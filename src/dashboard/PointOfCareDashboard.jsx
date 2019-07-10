import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Lang from 'lodash';
import TargetedDataPanel from '../panels/TargetedDataPanel';
import PointOfCare from '../notes/PointOfCare';
import Button from '../elements/Button';
import './PointOfCareDashboard.css';
import InMemoryClinicalNote from '../notes/InMemoryClinicalNote';
import DataAccess from '../dataaccess/DataAccess';
import moment from 'moment';

export default class PointOfCareDashboard extends Component {
    constructor(props) {
        super(props);

        const note = this.getFirstInProgressNote();
        const inMemoryClinicalNote = new InMemoryClinicalNote(this.props.shortcutManager, this.props.contextManager);
        inMemoryClinicalNote.parse(note.content);
        const nodes = inMemoryClinicalNote.getNodes();
        this.placeholderList = [];
        nodes.forEach((node, i) => {
            if (node.type === 'shortcut') {
                this.createShortcut(node.trigger, i);
            } else if (node.type === 'placeholder') {
                let newPlaceholder = this.newPlaceholder(node.placeholder.placeholder, node.placeholder.selectedValue, i);
                this.placeholderList.push(newPlaceholder);
            }
        });

        this.state = {
            showPOC: false
        };
    }

    moveTargetedDataPanelToSection = (sectionName) => {
        return this.targetedDataPanel.moveToSection(sectionName);
    }

    moveTargetedDataPanelToSubsection = (sectionName, subsectionName) => {
        return this.targetedDataPanel.moveToSubsection(sectionName, subsectionName);
    }

    togglePOC = (showPOC) => {
        this.setState({ showPOC });
    }

    _selectedPocIcon = () => {
        return (
            <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1 1.5L18.8947 1.5V8.95454L1 8.95454L1 1.5ZM0 0.5L1 0.5L18.8947 0.5L19.8947 0.5V1.5V8.95454V9.95454H18.8947L1 9.95454H0L0 8.95454L0 1.5L0 0.5ZM42 0.5L22.1053 0.5V9.95454L42 9.95454V0.5ZM41 13.3182L23.1053 13.3182V20.7727L41 20.7727V13.3182ZM23.1053 12.3182H22.1053V13.3182V20.7727V21.7727H23.1053L41 21.7727H42V20.7727V13.3182V12.3182H41L23.1053 12.3182ZM19.8947 12.3182L0 12.3182L0 21.7727L19.8947 21.7727V12.3182ZM22.1053 24.1364L42 24.1364V33.591H22.1053V24.1364ZM19.8947 24.1364L0 24.1364L0 33.591H19.8947V24.1364Z" fill="white" />
            </svg>
        );
    }

    _unselectedPocIcon = () => {
        return (
            <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1 1.5L18.8947 1.5V8.95454L1 8.95454L1 1.5ZM0 0.5L1 0.5L18.8947 0.5L19.8947 0.5V1.5V8.95454V9.95454H18.8947L1 9.95454H0L0 8.95454L0 1.5L0 0.5ZM23.1053 1.5L41 1.5V8.95454L23.1053 8.95454V1.5ZM22.1053 0.5L23.1053 0.5L41 0.5L42 0.5V1.5V8.95454V9.95454H41L23.1053 9.95454H22.1053V8.95454V1.5V0.5ZM41 13.3182L23.1053 13.3182V20.7727L41 20.7727V13.3182ZM23.1053 12.3182H22.1053V13.3182V20.7727V21.7727H23.1053L41 21.7727H42V20.7727V13.3182V12.3182H41L23.1053 12.3182ZM1 13.3182L18.8947 13.3182V20.7727L1 20.7727L1 13.3182ZM0 12.3182H1L18.8947 12.3182H19.8947V13.3182V20.7727V21.7727H18.8947L1 21.7727H0L0 20.7727L0 13.3182L0 12.3182ZM41 25.1364L23.1053 25.1364V32.591H41V25.1364ZM23.1053 24.1364H22.1053V25.1364V32.591V33.591H23.1053H41H42V32.591V25.1364V24.1364H41L23.1053 24.1364ZM1 25.1364L18.8947 25.1364V32.591H1L1 25.1364ZM0 24.1364H1L18.8947 24.1364H19.8947V25.1364V32.591V33.591H18.8947H1H0L0 32.591L0 25.1364L0 24.1364Z" fill="white" />
            </svg>
        );
    }

    _selectedTdpIcon = () => {
        return (
            <svg width="35" height="42" viewBox="0 0 35 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.2533 41.25L1.54667 41.25C1.10178 41.25 0.75 40.8932 0.75 40.464L0.75 1.536C0.75 1.10679 1.10178 0.75 1.54667 0.75L24.4927 0.75C24.7056 0.75 24.9088 0.834063 25.0578 0.982046L33.8185 9.68228C33.9673 9.83009 34.05 10.0295 34.05 10.2362L34.05 40.464C34.05 40.8932 33.6982 41.25 33.2533 41.25Z" fill="white" stroke="white" strokeWidth="1.5" />
                <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="29">
                    <path d="M33.2533 28.05L1.54667 28.05C1.10178 28.05 0.75 27.6932 0.75 27.264L0.75 1.536C0.75 1.10679 1.10178 0.75 1.54667 0.75L24.4927 0.75C24.7056 0.75 24.9088 0.834063 25.0578 0.982046L33.8185 9.68228C33.9673 9.83009 34.05 10.0295 34.05 10.2362L34.05 27.264C34.05 27.6932 33.6982 28.05 33.2533 28.05Z" fill="white" stroke="white" strokeWidth="1.5" />
                </mask>
                <g mask="url(#mask0)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M24.7666 0.360107L34.4333 9.96011L24.7666 9.96011V0.360107Z" fill="white" stroke="#2D5D7C" strokeWidth="1.5" />
                </g>
                <line x1="18" y1="22.05" x2="28.8" y2="22.05" stroke="#2D5D7C" strokeWidth="1.5" />
                <line x1="6" y1="26.25" x2="28.8" y2="26.25" stroke="#2D5D7C" strokeWidth="1.5" />
                <line x1="6" y1="31.05" x2="28.8" y2="31.0501" stroke="#2D5D7C" strokeWidth="1.5" />
                <line x1="6" y1="35.8499" x2="28.8" y2="35.8499" stroke="#2D5D7C" strokeWidth="1.5" />
                <path opacity="0.896399" fillRule="evenodd" clipRule="evenodd" d="M14.1955 7.19995H9.80461V10.2703H6.6001V14.4774H9.80461V17.5477H14.1955L14.1955 14.4774L17.4001 14.4774V10.2703H14.1955V7.19995Z" fill="#2D5D7C" />
            </svg>
        );
    }

    _unselectedTdpIcon = () => {
        return (
            <svg width="35" height="42" viewBox="0 0 35 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.2533 41.25L1.54667 41.25C1.10178 41.25 0.75 40.8932 0.75 40.464L0.75 1.536C0.75 1.10679 1.10178 0.75 1.54667 0.75L24.4927 0.75C24.7056 0.75 24.9088 0.834063 25.0578 0.982046L33.8185 9.68228C33.9673 9.83009 34.05 10.0295 34.05 10.2362L34.05 40.464C34.05 40.8932 33.6982 41.25 33.2533 41.25Z" stroke="#DDDDDD" strokeWidth="1.5" />
                <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="29">
                    <path d="M33.2533 28.05L1.54667 28.05C1.10178 28.05 0.75 27.6932 0.75 27.264L0.75 1.536C0.75 1.10679 1.10178 0.75 1.54667 0.75L24.4927 0.75C24.7056 0.75 24.9088 0.834063 25.0578 0.982046L33.8185 9.68228C33.9673 9.83009 34.05 10.0295 34.05 10.2362L34.05 27.264C34.05 27.6932 33.6982 28.05 33.2533 28.05Z" fill="white" stroke="white" strokeWidth="1.5" />
                </mask>
                <g mask="url(#mask0)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M24.7666 0.360107L34.4333 9.96011L24.7666 9.96011V0.360107Z" stroke="#DDDDDD" strokeWidth="1.5" />
                </g>
                <line x1="18" y1="22.05" x2="28.8" y2="22.05" stroke="#DDDDDD" strokeWidth="1.5" />
                <line x1="6" y1="26.25" x2="28.8" y2="26.25" stroke="#DDDDDD" strokeWidth="1.5" />
                <line x1="6" y1="31.05" x2="28.8" y2="31.0501" stroke="#DDDDDD" strokeWidth="1.5" />
                <line x1="6" y1="35.8499" x2="28.8" y2="35.8499" stroke="#DDDDDD" strokeWidth="1.5" />
                <path opacity="0.896399" d="M9.80461 7.19995V6.44995L9.05461 6.44995V7.19995L9.80461 7.19995ZM14.1955 7.19995L14.9455 7.19995V6.44995L14.1955 6.44995V7.19995ZM9.80461 10.2703V11.0203H10.5546V10.2703H9.80461ZM6.6001 10.2703L6.6001 9.52032H5.8501V10.2703H6.6001ZM6.6001 14.4774H5.8501L5.8501 15.2274H6.6001V14.4774ZM9.80461 14.4774H10.5546L10.5546 13.7274H9.80461L9.80461 14.4774ZM9.80461 17.5477H9.05461V18.2977H9.80461V17.5477ZM14.1955 17.5477V18.2977H14.9455V17.5477H14.1955ZM14.1955 14.4774V13.7274H13.4455V14.4774H14.1955ZM17.4001 14.4774V15.2274H18.1501V14.4774H17.4001ZM17.4001 10.2703H18.1501V9.52032H17.4001V10.2703ZM14.1955 10.2703L13.4455 10.2703V11.0203L14.1955 11.0203V10.2703ZM9.80461 7.94995H14.1955V6.44995H9.80461V7.94995ZM10.5546 10.2703V7.19995L9.05461 7.19995V10.2703H10.5546ZM6.6001 11.0203H9.80461V9.52032H6.6001L6.6001 11.0203ZM7.3501 14.4774L7.3501 10.2703H5.8501L5.8501 14.4774H7.3501ZM9.80461 13.7274H6.6001V15.2274H9.80461L9.80461 13.7274ZM10.5546 17.5477V14.4774H9.05461V17.5477H10.5546ZM14.1955 16.7977H9.80461V18.2977H14.1955V16.7977ZM13.4455 14.4774L13.4455 17.5477H14.9455V14.4774L13.4455 14.4774ZM17.4001 13.7274L14.1955 13.7274V15.2274H17.4001V13.7274ZM16.6501 10.2703V14.4774H18.1501V10.2703H16.6501ZM14.1955 11.0203H17.4001V9.52032H14.1955V11.0203ZM13.4455 7.19995V10.2703L14.9455 10.2703V7.19995L13.4455 7.19995Z" fill="#DDDDDD" />
            </svg>
        );
    }

    renderNextIcon = () => {
        return (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth=".5" fill="none" fillRule="evenodd">
                    <g id="Group-39" stroke="#CCCCCC" strokeWidth=".75">
                        <rect x="10" y="1" width="5" height="3" fill="#CCCCCC" />
                        <rect y="14.5" width="16" height="0.3" fill="#CCCCCC" />
                        <rect width="1.25" height="15" transform="matrix(1 0 0 -1 0 15)" fill="#CCCCCC" />
                        <rect x="10" y="5.5" width="5" height="3" fill="#CCCCCC" />
                        <rect x="10" y="10" width="5" height="3" fill="#CCCCCC" />
                        <rect x="3" y="1" width="5" height="3" fill="#CCCCCC" />
                        <rect x="3" y="5.5" width="5" height="3" fill="#CCCCCC" />
                        <rect x="3" y="10" width="5" height="3" fill="#CCCCCC" />
                    </g>
                </g>
            </svg>
        );
    }

    getFirstInProgressNote() {
        const notes = this.props.patient.getInProgressNotes();
        return notes[0];
    }

    placeholderCheck = (text) => {
        const { shortcutManager } = this.props;

        if (!text.startsWith("<") || !text.endsWith(">")) return false;
        const placeholderShortcuts = shortcutManager.getAllPlaceholderShortcuts();
        const remainderText = text.slice(1, -1).toLowerCase();

        return placeholderShortcuts.some((placeholderShortcut) => {
            const triggers = shortcutManager.getTriggersForShortcut(placeholderShortcut.id);

            return triggers.some((trigger) => {
                const triggerNoPrefix = trigger.name.slice(1);
                return triggerNoPrefix.toLowerCase() === remainderText;
            });
        });
    }

    newPlaceholder = (placeholderText, data, key) => {
        const shortcutName = "#" + placeholderText.substring(1, placeholderText.length - 1); // strip off < and > and add #
        const result = this.props.shortcutManager.createPlaceholder(shortcutName, placeholderText, data, this.props.contextManager, this.props.patient, this.props.selectedNote, this.props.setForceRefresh);
        result.setKey(key);
        return result;
    }

    createShortcut(triggerOrKeywordObject, key) {
        const triggerOrKeywordText = (Lang.isUndefined(triggerOrKeywordObject.trigger)) ? triggerOrKeywordObject.keyword : triggerOrKeywordObject.trigger;
        const shortcut = this.props.shortcutManager.createShortcut(
            triggerOrKeywordObject.definition, triggerOrKeywordText, this.props.patient,
            triggerOrKeywordObject.selectedValue, this.handleShortcutUpdate);
        shortcut.setSource("parsed note");
        shortcut.initialize(this.props.contextManager, triggerOrKeywordText, true, triggerOrKeywordObject.selectedValue);
        shortcut.setKey(key);

        return shortcut;
    }
    renderPocIcon() {
        return this.state.showPOC ? this._selectedPocIcon() : this._unselectedPocIcon();
    }

    renderTdpIcon() {
        return this.state.showPOC ? this._unselectedTdpIcon() : this._selectedTdpIcon();
    }

    renderNextPatient() {
        const dataAccess = new DataAccess('HardCodedMcodeV01DataSource');
        const patients = dataAccess.getListOfPatients();
        const nextPatient = this.getNextAppointment(patients).shrId;
        this.props.loadPatient(nextPatient);
    }

    getNextAppointment(patientList) {
        let nextPatient = this.props.patient;
        let currTime = null;
        let nextTime = null;
        const encounters = this.props.patient.getEncountersChronologicalOrder();
        // find current patient's appointment time, assuming there is only one appointment a day per person
        for (let i = 0; i < encounters.length; i++) {
            const encounterTime = new moment(encounters[i].expectedPerformanceTime, "DD MMM YYYY hh:mm");
            if (encounterTime.date() === moment().date()) {
                currTime = encounterTime;
                break;
            }
        }
        // looks through all patients to find next patient based on closest time on current date
        patientList.forEach((patient) => {
            if (patient.shrId === nextPatient.shrId) return;
            const allEncounters = patient.getEncountersChronologicalOrder();
            allEncounters.forEach((encounter) => {
                const appTime = new moment(encounter.expectedPerformanceTime, "DD MMM YYYY hh:mm");
                if (appTime.date() === moment().date() && appTime.isAfter(currTime)) {
                    if (nextTime === null) {
                        nextTime = appTime;
                        nextPatient = patient;
                    }
                    else if (nextTime !== null && appTime.isBefore(nextTime)) {
                        nextTime = appTime;
                        nextPatient = patient;
                    }
                }
            });
        });
        return nextPatient;
    }

    renderSidebar() {
        return (
            <div className="poc-nav-bar">
                <Button onClick={() => this.togglePOC(false)}>
                    {this.renderTdpIcon()}
                </Button>
                <Button onClick={() => this.togglePOC(true)}>
                    {this.renderPocIcon()}
                </Button>
                <Button className="next-patient" onClick={() => { this.renderNextPatient(); }}>
                    {this.renderNextIcon()}
                </Button>
            </div>
        );
    }

    renderTdp() {
        const targetedDataPanelStyles = {
            "WebkitTransition": "width .5s", /* Safari */
            "transition": "width .5s",
        };

        return (
            <div className="right-border-box" style={targetedDataPanelStyles}>
                <TargetedDataPanel
                    actions={this.props.actions}
                    forceRefresh={this.props.forceRefresh}
                    appState={this.props.appState}
                    highlightedSearchSuggestion={this.props.highlightedSearchSuggestion}
                    isNoteViewerEditable={false}
                    isTargetedDataSubpanelVisible={true}
                    isWide={true}
                    loginUser={this.props.loginUser}
                    preferenceManager={this.props.preferenceManager}
                    summaryMetadata={this.props.summaryMetadata}
                    setForceRefresh={this.props.setForceRefresh}
                    targetedDataPanelSize={'100%'}
                    ref={(tdp) => { this.targetedDataPanel = tdp; }}
                    searchIndex={this.props.searchIndex}
                    searchSuggestions={this.props.searchSuggestions}
                    setHighlightedSearchSuggestion={this.props.setHighlightedSearchSuggestion}
                    isAppBlurred={this.props.isAppBlurred}
                    setAppBlur={this.props.setAppBlur}
                />
            </div>
        );
    }

    renderPoc() {
        const PointOfCarePanelStyles = {
            "width": "100%",
            "WebkitTransition": "width .5s", /* Safari */
            "transition": "width .5s",
        };
        return (
            <div className="right-border-box point-of-care-container" style={PointOfCarePanelStyles}>
                <PointOfCare placeholders={this.placeholderList} />
            </div>
        );
    }

    render() {
        return (
            <div id="point-of-care-dashboard-content">
                {this.renderSidebar()}
                {this.state.showPOC ? this.renderPoc() : this.renderTdp()}
            </div>
        );
    }
}

PointOfCareDashboard.propTypes = {
    actions: PropTypes.array.isRequired,
    appState: PropTypes.object.isRequired,
    contextManager: PropTypes.object.isRequired,
    dataAccess: PropTypes.object.isRequired,
    forceRefresh: PropTypes.bool,
    loginUser: PropTypes.object.isRequired,
    patient: PropTypes.object.isRequired,
    preferenceManager: PropTypes.object.isRequired,
    searchSelectedItem: PropTypes.object,
    setForceRefresh: PropTypes.func.isRequired,
    setFullAppStateWithCallback: PropTypes.func.isRequired,
    setSearchSelectedItem: PropTypes.func.isRequired,
    shortcutManager: PropTypes.object.isRequired,
    summaryMetadata: PropTypes.object.isRequired,
    searchIndex: PropTypes.object.isRequired,
    structuredFieldMapManager: PropTypes.object.isRequired,
    searchSuggestions: PropTypes.array,
    highlightedSearchSuggestion: PropTypes.object,
};