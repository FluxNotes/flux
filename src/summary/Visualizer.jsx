import {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash'


export default class Visualizer extends Component { 
    // Get the data off of the props that we're looking at right now 
    _getDataCacheFromProps = (someProps) => { 
        // NOTE: Don't use this.props -- sometimes we want to look at incoming props ala shouldComponentUpdate
        const data = someProps.conditionSection.data.map((dataElement) => dataElement.data_cache);
        return data;
    }

    _hasSuggestionForSection(suggestions, sectionName) { 
        return _.find(suggestions, (suggestion) => suggestion.section === sectionName);
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Reasons to update:
        // - The highlighted suggestion is or was in this section 
        // - The searchSuggestions contains has changed and does/did contain a suggestion in this section
        // - There is a change to the dataCache of this section
        // - A note has been signed -- our representation of the data should reflect it's signedness
        // - Clinical event has changed
        // - isWide has changed
        // - Condition has changed
        // - allowItemClick has changed
        // - forceRefresh changes from false to true
        // - The sections to be displayed has changed
        // - Local state has changed
        const updatedSectionName = nextProps.conditionSection.name

        // Case 1: Highligted Suggestion Changed and is relevant for this seection  -- based on object, so we'll make a local copy in case te object is mutated 
        const currentHighlightedSuggestionSection = !_.isNull(this.props.highlightedSearchSuggestion) ? this.props.highlightedSearchSuggestion.section : null;
        const nextHighlightedSuggestionSection = !_.isNull(nextProps.highlightedSearchSuggestion) ? nextProps.highlightedSearchSuggestion.section : null;
        //  Have the highlighedItems changed, and is either the old/new in this section? 
        const relevantChangesToHighlightedSrc = !_.isEqual(this.props.highlightedSearchSuggestion, nextProps.highlightedSearchSuggestion)
            && (currentHighlightedSuggestionSection === updatedSectionName || nextHighlightedSuggestionSection === updatedSectionName);
        // Short circuit if true -- cannot change the search menu and other relevant data, so no need to continue checking for the sake of updating local data
        if (relevantChangesToHighlightedSrc) return relevantChangesToHighlightedSrc;


        //  Case 2: Search Suggestions relevant to the TDP change -- based on object, so we'll make a local copy in case te object is mutated 
        const previousTDPSuggestions = this.props.tdpSearchSuggestions;
        const nextTDPSuggestions = nextProps.tdpSearchSuggestions;
        // Do we have any TDP new suggestions, and are any of them in this section? 
        const relevantChangesToTDPSuggestions = !_.isEqual(previousTDPSuggestions, nextTDPSuggestions)
            && (this._hasSuggestionForSection(nextTDPSuggestions, updatedSectionName) || this._hasSuggestionForSection(previousTDPSuggestions, updatedSectionName))
        // Short circuit if true -- cannot change the search menu and other relevant data, so no need to continue checking for the sake of updating local data
        if (relevantChangesToTDPSuggestions) return relevantChangesToTDPSuggestions


        // Case 3: Data that this visualizer cares about changes -- based on object, so we'll make a local copy in case te object is mutated 
        //  - this is defined in the conditionSection prop; the data gets extracted above
        const nextDataCache = this._getDataCacheFromProps(nextProps);
        const changesToRelevantData = !_.isEqual(this._oldDataCache, nextDataCache)
        // Update local DataCache if there's a difference in the data
        if (changesToRelevantData) { 
            this._oldDataCache = nextDataCache;
        }

        // Case 4: SignedNote count has changed -- based on object, so we'll make a local copy in case te object is mutated
        const newSignedNotesCount = nextProps.patient.getNotes().reduce((totalNumberOfSignedNotes, currentNote) => {
            return totalNumberOfSignedNotes + (currentNote.signed ? 1 : 0);
        }, 0);
        const changesToSignedNotesCount = newSignedNotesCount !== this._signedNotesCount;
        // Update our local count of signed notes if updated
        if (changesToSignedNotesCount) {
            this._signedNotesCount = newSignedNotesCount;
        }

        // Case 5: ClinicalEvent -- just a string so no need to maintain local copy
        const changesToClinicalEvent = (this.props.clinicalEvent !== nextProps.clinicalEvent)

        // Case 6: isWide -- just a bool so no need to maintain local copy
        const changesToIsWide = (this.props.isWide !== nextProps.isWide);

        // Case 7: Condition string changes: need string representation -- based on object, so we'll make a local copy in case te object is mutated
        const newConditionCodeSystem = nextProps.condition.codeSystem;
        const newConditionCode = nextProps.condition.code
        // May not be human readable, but is a unique identifier and that's all we need here.
        const newConditionString = `${newConditionCodeSystem}${newConditionCode}`;
        const changesToConditionString = (this._currentConditionString !== newConditionString)
        if (changesToConditionString) {
            this._currentConditionString = newConditionString
        }

        // Case 8: allowItemClick -- just a bool so no need to maintain local copy
        const changesToAllowItemClick = (this.props.allowItemClick !== nextProps.allowItemClick);

        // Case 9: forceRefresh -- just a bool so no need to maintain local copy
        const changesToForceRefresh = (this.props.forceRefresh === false && nextProps.forceRefresh === true)

        // Case 10: Sections to display has changed
        const changesToSectionsDisplayed = !_.isEqual(this.props.sectionsToDisplay, nextProps.sectionsToDisplay);

        // Case 11: Any changes to local state
        const changesToState = !_.isEqual(this.state, nextState);

        return relevantChangesToHighlightedSrc
            || relevantChangesToTDPSuggestions
            || changesToRelevantData
            || changesToSignedNotesCount
            || changesToClinicalEvent
            || changesToIsWide
            || changesToConditionString
            || changesToAllowItemClick
            || changesToForceRefresh
            || changesToSectionsDisplayed
            || changesToState;
    }
} 

Visualizer.propTypes = {
    actions: PropTypes.array,
    allowItemClick: PropTypes.bool,
    condition: PropTypes.object,
    conditionSection: PropTypes.object,
    highlightedSearchSuggestion: PropTypes.object,
    isWide: PropTypes.bool.isRequired,
    loginUser: PropTypes.object.isRequired,
    patient: PropTypes.object,
    sectionTransform: PropTypes.func,
    tdpSearchSuggestions: PropTypes.array,
};

