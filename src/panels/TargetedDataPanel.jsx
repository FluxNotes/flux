import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import TargetedDataSubpanel from '../summary/TargetedDataSubpanel';
import Minimap from '../lib/react-minimap/react-minimap.js';
import '../lib/react-minimap/react-minimap.css'
import './TargetedDataPanel.css';

export default class TargetedDataPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sectionsToDisplay: []
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.targetedDataPanelSize !== this.props.targetedDataPanelSize) {
            this.forceUpdate();
        }
        if (nextProps.appState.condition !== this.props.appState.condition) {
            const conditionMetadata = this.getConditionMetadata(nextProps.appState.condition);
            const sectionsToDisplay = this.getSectionsToDisplay(conditionMetadata, nextProps.appState.condition);
            this.setState({ sectionsToDisplay });
        }
    }

    startEditingMinimap = () => {
        this.props.setAppBlur(true);
        const conditionMetadata = this.getConditionMetadata();
        const allSections = conditionMetadata.sections;
        this.setState({ sectionsToDisplay: allSections });
    }

    doneEditingMinimap = () => {
        const conditionMetadata = this.getConditionMetadata();
        const sectionsToDisplay = this.getSectionsToDisplay(conditionMetadata, this.props.appState.condition);
        this.props.setAppBlur(false);
        this.setState({ sectionsToDisplay });
    }

    moveToSection(sectionName) {
        return this.minimap.moveToSection(sectionName);
    }

    moveToSubsection(sectionName, subsectionName) {
        if (this.minimap) {
            return this.minimap.moveToSubsection(sectionName, subsectionName);
        }
    }

    moveToSubsectionFromSearch(suggestion) {
        this.moveToSubsection(suggestion.section, suggestion.subsection);
    }

    getConditionMetadata(condition = this.props.appState.condition) {
        const { loginUser } = this.props;
        const patient = this.props.appState.patient;
        return this.props.summaryMetadata.getMetadata(  this.props.preferenceManager,
                                                        patient,
                                                        condition,
                                                        loginUser.getRoleType(),
                                                        loginUser.getRole(),
                                                        loginUser.getSpecialty());
    }

    getSectionsToDisplay = (conditionMetadata, condition) => {
        let sectionsToDisplay = [];
        sectionsToDisplay = conditionMetadata.sections.filter((section) => {
            let preferenceManagerVisibleSettings = this.props.preferenceManager.getPreference('visibleSections');
            if (_.isNull(preferenceManagerVisibleSettings)) {
                preferenceManagerVisibleSettings = {};
                this.props.preferenceManager.setPreference('visibleSections', preferenceManagerVisibleSettings);
            }
            let currentSectionVisible = true;
            const settingName = `${section.name}-${condition.codeURL}`;
            if (!_.isNull(preferenceManagerVisibleSettings) && !_.isUndefined(preferenceManagerVisibleSettings[settingName])) {
                currentSectionVisible = preferenceManagerVisibleSettings[settingName];
            }
            if (!currentSectionVisible) {
                this.props.searchIndex.removeDataBySection(section.name);
            }
            return currentSectionVisible;
        });
        return sectionsToDisplay;
    }

    render () {
        // The css data attribute associated with the minimap
        const minimapAttribute = 'data-test-summary-section';
        const shortTitleAttribute = 'data-minimap-short-title';
        const conditionMetadata = this.getConditionMetadata();
        const conditionURL = this.props.appState.condition ? this.props.appState.condition.codeURL : '';

        const { sectionsToDisplay } = this.state;
        const tdpDisabledClass = this.props.isAppBlurred ? 'content-disabled' : '';

        if (conditionMetadata && conditionMetadata.sections.length > 1) {
            return (
                <div className="targeted-data-panel">
                    <Minimap
                        selector={`[${minimapAttribute}]`}
                        className="fitted-panel"
                        titleAttribute={minimapAttribute}
                        shortTitleAttribute={shortTitleAttribute}
                        width={80}
                        isFullHeight={true}
                        ref={(minimap) => { this.minimap = minimap; }}
                        conditionURL={conditionURL}
                        preferenceManager={this.props.preferenceManager}
                        doneEditingMinimap={this.doneEditingMinimap}
                        startEditingMinimap={this.startEditingMinimap}
                    >
                        <div id={`summary-subpanel`}>
                            <div className={`summary-section ${tdpDisabledClass}`}>
                                <TargetedDataSubpanel
                                    actions={this.props.actions}
                                    allowItemClick={this.props.isNoteViewerEditable}
                                    clinicalEvent={this.props.appState.clinicalEvent}
                                    condition={this.props.appState.condition}
                                    conditionMetadata={conditionMetadata}
                                    forceRefresh={this.props.forceRefresh}
                                    highlightedSearchSuggestion={this.props.highlightedSearchSuggestion}
                                    isWide={this.props.isWide}
                                    loginUser={this.props.loginUser}
                                    moveToSubsectionFromSearch={this.moveToSubsectionFromSearch.bind(this)}
                                    preferenceManager={this.props.preferenceManager}
                                    patient={this.props.appState.patient}
                                    setForceRefresh={this.props.setForceRefresh}
                                    sectionsToDisplay={sectionsToDisplay}
                                    searchIndex={this.props.searchIndex}
                                    searchSuggestions={this.props.searchSuggestions}
                                    setHighlightedSearchSuggestion={this.props.setHighlightedSearchSuggestion}
                                />
                            </div>
                        </div>
                    </Minimap>
                </div>
            );
        } else {
            return (
                <div className="targeted-data-panel">
                    <div id="summary-subpanel">
                        <div className="summary-section">
                            <TargetedDataSubpanel
                                actions={this.props.actions}
                                allowItemClick={this.props.isNoteViewerEditable}
                                className="targeted-data-subpanel-no-minimap"
                                clinicalEvent={this.props.appState.clinicalEvent}
                                condition={this.props.appState.condition}
                                conditionMetadata={conditionMetadata}
                                forceRefresh={this.props.forceRefresh}
                                highlightedSearchSuggestion={this.props.highlightedSearchSuggestion}
                                isWide={this.props.isWide}
                                loginUser={this.props.loginUser}
                                moveToSubsectionFromSearch={this.moveToSubsectionFromSearch.bind(this)}
                                preferenceManager={this.props.preferenceManager}
                                patient={this.props.appState.patient}
                                setForceRefresh={this.props.setForceRefresh}
                                sectionsToDisplay={sectionsToDisplay}
                                searchIndex={this.props.searchIndex}
                                searchSuggestions={this.props.searchSuggestions}
                                setHighlightedSearchSuggestion={this.props.setHighlightedSearchSuggestion}
                            />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

TargetedDataPanel.proptypes = {
    actions: PropTypes.array.isRequired,
    appState: PropTypes.shape({
        patient: PropTypes.object.isRequired,
        clinicalEvent: PropTypes.object.isRequired,
        condition: PropTypes.object,
    }).isRequired,
    forceRefresh: PropTypes.bool,
    highlightedSearchSuggestion: PropTypes.object,
    isAppBlurred: PropTypes.bool,
    isNoteViewerEditable: PropTypes.bool.isRequired,
    isTargetedDataSubpanelVisible: PropTypes.bool,
    isWide: PropTypes.bool.isRequired,
    loginUser: PropTypes.object.isRequired,
    preferenceManager: PropTypes.object.isRequired,
    setAppBlur: PropTypes.func,
    setForceRefresh: PropTypes.func.isRequired,
    searchIndex: PropTypes.object.isRequired,
    searchSuggestions: PropTypes.array,
    summaryMetadata: PropTypes.object.isRequired,
    targetedDataPanelSize: PropTypes.string.isRequired
}
