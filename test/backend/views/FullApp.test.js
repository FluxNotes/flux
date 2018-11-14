import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { expect } from 'chai'

import { FullApp } from '../../../src/containers/FullApp';
import SummaryHeader from '../../../src/summary/SummaryHeader';
import TargetedDataSection from '../../../src/summary/TargetedDataSection';
import Button from '../../../src/elements/Button';
import SummaryMetadata from '../../../src/summary/SummaryMetadata';
import VisualizerManager from '../../../src/summary/VisualizerManager';
import TabularNameValuePairsVisualizer from '../../../src/summary/NarrativeNameValuePairsVisualizer';

import Slate from '../../../src/lib/slate';
import DataAccess from '../../../src/dataaccess/DataAccess';
import ContextManager from '../../../src/context/ContextManager';
import ShortcutManager from '../../../src/shortcuts/ShortcutManager';
import StructuredFieldMapManager from '../../../src/shortcuts/StructuredFieldMapManager';
import FluxNotesEditor from '../../../src/notes/FluxNotesEditor';

import NotesPanel from '../../../src/panels/NotesPanel';
import NoteAssistant from '../../../src/notes/NoteAssistant';
import hardCodedPatient from '../../../src/dataaccess/HardCodedPatient.json';
import PatientRecord from '../../../src/patient/PatientRecord.jsx';
import FluxInjury from '../../../src/model/condition/FluxInjury';

import SearchIndex from '../../../src/patientControl/SearchIndex';
import FluxClinicalNote from '../../../src/model/core/FluxClinicalNote';
import PreferenceManager from '../../../src/preferences/PreferenceManager';
import FluxGastrointestinalStromalTumor from '../../../src/model/oncology/FluxGastrointestinalStromalTumor';
import FluxBreastCancer from '../../../src/model/oncology/FluxBreastCancer';

Enzyme.configure({ adapter: new Adapter() });

describe('1 UpdateErrors', function () {
    it('1.1 should set state.errors to equal the provided argument', function () {
        const wrapper = shallow(<FullApp display='test' />);
        const emptyErrors = [];
        wrapper.instance().updateErrors(emptyErrors);
        expect(wrapper.state('errors'))
            .to.be.an('array')
            .and.to.be.empty;

        const newErrors = ["anything", "anything else"];
        wrapper.instance().updateErrors(newErrors);
        expect(wrapper.state('errors'))
            .to.equal(newErrors);
    });
});

describe('2 setFullAppState', function() {
    it('2.1 sets the state on the component', function() {
        const wrapper = shallow(<FullApp display='test'/>);

        wrapper.instance().setFullAppState('testKey', 'testValue');
        expect(wrapper.state('testKey'))
            .to.eq('testValue');
    });
});

// describe('SummaryHeader', function() {
//     it('View buttons update state', function() {
//         const wrapper = shallow(<SummaryHeader />);

//         // // Initial state
//         // expect(wrapper.state('layout'))
//         //     .to.eq('none');

//         // // Clicking a View button changes the state
//         // const leftView = wrapper.find(Button).find('#left-collapsed-layout-button');
//         // leftView.simulate('click');
//         // expect(wrapper.state('layout'))
//         //   .to.eq('left');
//     });
// });

describe('3 TargetedDataControl', function() {
    it('3.1 noteDisplayMode buttons update state', function() {
        const summaryMetadata = new SummaryMetadata();
        const condition = new FluxBreastCancer({
            "Value": {
                "Coding": [
                    {
                        "Value": "408643008",
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                        },
                        "CodeSystem": {
                            "Value": "http://snomed.info/sct",
                            "EntryType": {
                                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeSystem"
                            }
                        },
                        "DisplayText": {
                            "Value": "Invasive ductal carcinoma of breast",
                            "EntryType": {
                                "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                            }
                        }
                    }
                ],
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
                }
            }
        });
        const metadata = summaryMetadata.getMetadata(null, null, condition, null, null, null);
        // Look for the first NameValuePair section which should be Summary. Assumes it does not have a defaultVisualizer property
        const section = metadata.sections.find((section) => {
            return (section.type === "NameValuePairs");
        });
        let options = [];
        if (section.type === "NameValuePairs") {
            options.push('tabular');
            if (section.narrative) {
                options.push('narrative');
            }
        } else if (section.type === "Events") {
            options.push('timeline');
        }
        const defaultOrTabular = options.length > 0 ? options[0] : 'tabular';

        const preferenceManager = new PreferenceManager(null);
        const visualizerManager = new VisualizerManager();
        const searchIndex = new SearchIndex();
        const wrapper = shallow(<TargetedDataSection tdpSearchSuggestions={[]} patient={null} condition={null} section={section} type={section.type} visualizerManager={visualizerManager} preferenceManager={preferenceManager} isWide={false} clinicalEvent='post-encounter' searchIndex={searchIndex} />);

        // Initial state
        expect(wrapper.state('defaultVisualizer'))
            .to.eq(defaultOrTabular);
        expect(wrapper.state('chosenVisualizer'))
            .to.be.null;

        // Clicking the non-default note display button changes the state
        const narrativeIcon = wrapper.find('.right-icons').find(Button).find('#narrative');
        narrativeIcon.simulate('click');
        expect(wrapper.state('chosenVisualizer'))
            .to.eq('narrative');
    });
});
describe('4 TargetedDataControl - correct default visualizer Medications', function() {
    it('4.1 correct default visualizer', function() {
        const summaryMetadata = new SummaryMetadata(null);
        const condition = new FluxGastrointestinalStromalTumor({
            "Value": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
                },
                "Coding": [
                    {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                        },
                        "Value": "420120006",
                        "CodeSystem": {
                            "EntryType": {
                                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeSystem"
                            },
                            "Value": "http://snomed.info/sct"
                        },
                        "DisplayText": {
                            "EntryType": {
                                "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                            },
                            "Value": "Gastrointestinal stromal tumor"
                        }
                    }
                ]
            }
        });
        const metadata = summaryMetadata.getMetadata(null, null, condition, null, null, null);
        // Look for the first NameValuePair section which should be Summary. Assumes it does not have a defaultVisualizer property
        const section = metadata.sections.find((section) => {
            return (section.type === "Medications");
        });
        const expectedDefault = 'chart';

        const preferenceManager = new PreferenceManager(null);
        const visualizerManager = new VisualizerManager();
        const searchIndex = new SearchIndex();
        const wrapper = shallow(<TargetedDataSection searchSuggestions={[]} patient={null} condition={null} section={section} type={section.type} visualizerManager={visualizerManager} defaultVisualizer={section.defaultVisualizer} preferenceManager={preferenceManager} isWide={false} clinicalEvent='pre-encounter' searchIndex={searchIndex} />);

        // Initial state
        expect(wrapper.state('defaultVisualizer'))
            .to.eq(expectedDefault);
        expect(wrapper.state('chosenVisualizer'))
            .to.be.null;
    });
});

describe('5 FullApp', function() {
    beforeEach(() => {
        window.getSelection = () => {
          return {
            removeAllRanges: () => {},
            addRange: () => {}
          };
        },
        window.document.createRange = () => {
            return {
                setStart: () => {}
            };
        }
    });
    it('5.1 Selecting a condition changes the active condition', () => {
        const wrapper = mount(<FullApp 
                display='Flux Notes' 
                dataSource='HardCodedReadOnlyDataSource' 
                patientId='788dcbc3-ed18-470c-89ef-35ff91854c7e' />);
        const conditionSelector = wrapper.find('SelectInput');
        expect(conditionSelector.exists()).to.equal(true);
        expect(conditionSelector.text()).to.equal('Invasive ductal carcinoma of breast');

        conditionSelector.at(0).props().onChange({target: { value: 1}});
        expect(conditionSelector.text()).to.equal('Fracture');

        expect(wrapper.state('condition') instanceof FluxInjury);
        //const conditionName = wrapper.find('[data-test-summary-section="Summary"] [data-test-summary-item="Name"]');
       //expect(conditionName.exists()).to.equal(true);
       //expect(conditionName.text()).to.equal('Fracture');
    });
    it('5.2 Clicking "New Note" button in pre-encounter mode changes layout and displays the note editor', () => {
        const wrapper = mount(<FullApp 
            display='Flux Notes' 
            dataSource='HardCodedReadOnlyDataSource' 
            patientId='788dcbc3-ed18-470c-89ef-35ff91854c7e' />);
        const e1 = wrapper.find('div.editor-content');
        expect(e1.exists()).to.equal(false);
    
        const newNoteButton = wrapper.find('.note-new');
    
        // Click on new note button to open the editor
        newNoteButton.at(0).props().onClick();
        wrapper.update();
        //const editor = wrapper.find("div[data-slate-editor='true']");
        const e2 = wrapper.find('div.editor-content');
        expect(e2.exists()).to.equal(true);
    });
    it('5.3 Clicking clinical notes toggle button in Note Assistant switches view to clinical notes', () => {
        const wrapper = mount(<FullApp 
            display='Flux Notes' 
            dataSource='HardCodedReadOnlyDataSource' 
            patientId='788dcbc3-ed18-470c-89ef-35ff91854c7e' />);

        // Click on new note button to open the editor
        const newNoteButton = wrapper.find('.note-new');
        newNoteButton.at(0).props().onClick();
        wrapper.update();

        // no new note button now
        const newNoteButton2 = wrapper.find('.note-new');
        expect(newNoteButton2.exists()).to.equal(false);

        // clinical notes button is selected
        const clinicalNotesButton = wrapper.find('#notes-btn');
        expect(clinicalNotesButton.exists()).to.equal(true);
        clinicalNotesButton.at(0).props().onClick();
        wrapper.update();

        // do we have new note button available?
        const newNoteButton3 = wrapper.find('.note-new');
        expect(newNoteButton3.exists()).to.equal(true);
    });
    it('5.4 Clicking context toggle button in Note Assistant switches view to context tray', () => {
        const wrapper = mount(<FullApp 
            display='Flux Notes' 
            dataSource='HardCodedReadOnlyDataSource' 
            patientId='788dcbc3-ed18-470c-89ef-35ff91854c7e' />,
            { attachTo: document.body });

        // Mimic post-encounter view
        const newNoteButton = wrapper.find('.note-new');
        newNoteButton.at(0).props().onClick();
        wrapper.update();

        // Select clinical notes
        const clinicalNotesButton = wrapper.find('#notes-btn');
        clinicalNotesButton.at(0).props().onClick();
        wrapper.update();
    
        // Select context button
        const contextButton = wrapper.find('#context-btn');
        contextButton.at(0).props().onClick();
        wrapper.update();

        // context tray should be showing
        const contextTray = wrapper.find('.context-tray');
        expect(contextTray.exists()).to.equal(true);
    });
    // it.only('In pre-encounter mode, clicking the "New Note" button clears the editor content', () => {
    //     const wrapper = mount(<FullApp 
    //         display='Flux Notes' 
    //         dataSource='HardCodedReadOnlyDataSource' 
    //         patientId='788dcbc3-ed18-470c-89ef-35ff91854c7e' />);

    //     // click new note button
    //     const newNoteButton = wrapper.find('.note-new');
    //     newNoteButton.at(0).props().onClick();
    //     wrapper.update();

    //     // editor
    //     //const e1 = wrapper.find('div.editor-content');
    //     const e1 = wrapper.find('Editor.editor-panel');
    //     expect(e1.exists()).to.equal(true);
    //     // console.log(e1.at(0).debug());
           
    //     // Enter some text in the editor
    //     e1.at(0).props().onInput(null, "@name ");
    
    //     // Select clinical notes
    //     const clinicalNotesButton = wrapper.find('#notes-btn');
    //     clinicalNotesButton.at(0).props().onClick();
    //     wrapper.update();
    
    //     // Click on new note button to clear the editor
    //     newNoteButton.at(0).props().onClick();
    //     wrapper.update();

    //     //console.log(e1.at(0).debug());
    //     // await t
    //     //     .expect(editor.textContent)
    //     //     .eql("Enter your clinical note here or choose a template to start from...");
    // });
});

describe('6 FluxNotesEditor', function() {
    beforeEach(() => {
        let range = {
            cloneRange: () => { return range; },
            setStart: () => {},
            getBoundingClientRect: () => {
                return {
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                };
            }
        };
        // Set up window and document to be used by Slate in test
        window.getSelection = () => {
            return {
                addRange: () => {},
                extend: () => {},
                removeAllRanges: () => {},
                getRangeAt: () => {
                    return range;
                }
            };
        }
        // window.document.createRange = jest.fn();
        document.createRange = function() {
            return {
                setEnd: function(){},
                setStart: function(){},
                getBoundingClientRect: function(){
                    return {right: 0};
                }
            }
        };
    })
    it('6.1 inserts supplied text for inserter shortcuts', () => {
        // Set up Managers that are needed by FluxNotesEditor
        let patient = new PatientRecord(hardCodedPatient);
        const contextManager = new ContextManager(patient, () => {});
        const shortcutManager = new ShortcutManager();
        const structuredFieldMapManager = new StructuredFieldMapManager();
        const searchIndex = new SearchIndex();

        // Mock function to create a new shortcut and set text on shortcut. Allows Editor to update correctly.
        let mockNewCurrentShortcut = (shortcutC, shortcutType, shortcutData, updatePatient = true) => {
            let newShortcut = shortcutManager.createShortcut(shortcutC, shortcutType, patient, shortcutData, this.handleShortcutUpdate);
            newShortcut.initialize(contextManager, shortcutType, updatePatient, shortcutData);

            return newShortcut;
        }

        const wrapper = mount(<FluxNotesEditor
            closeNote={() => {}}
            updatedEditorNote={{ content: '' }}
            shortcutManager={shortcutManager}
            contextManager={contextManager}
            structuredFieldMapManager={structuredFieldMapManager}
            newCurrentShortcut={mockNewCurrentShortcut}
            updatedEditorNote={null}
            searchIndex={searchIndex}
            handleUpdateEditorWithNote={jest.fn()}
            isNoteViewerVisible={true}
            isNoteViewerEditable={true}
            setFullAppState={jest.fn()}
            setFullAppStateWithCallback={jest.fn()}
            setLayout={jest.fn()}
            shouldEditorContentUpdate={true}
            setNoteViewerEditable={jest.fn()}
            setNoteViewerVisible={jest.fn()}
            setOpenSourceNoteEntryId={jest.fn()}
            currentViewMode={''}
            errors={[]}
            itemInserted={jest.fn()}
            noteAssistantMode={''}
            patient={{}}
            saveNote={jest.fn()}
            summaryItemToInsert={''}
            updateErrors={jest.fn()}
            updateLocalDocumentText={jest.fn()}
            updateSelectedNote={jest.fn()}
            updateNoteAssistantMode={jest.fn()}
            updateContextTrayItemToInsert={jest.fn()}
            searchSuggestions={[]}
        />);
        expect(wrapper).to.exist;
        // wrapper.find('.editor-content').simulate('click'); //goes into on change
        let noteContent = '@name[[Test Name]] is a @age[[49]] year old @gender[[Female]] coming in for follow up.';
        const entryId = patient.addClinicalNote('', '', '', '', '', noteContent, false);
        const updatedEditorNote = patient.getEntryById(entryId);
        // Set updatedEditorNote props because this triggers that a change is coming in to the editor and inserts text with structured phrases.
        wrapper.setProps({ updatedEditorNote });

        // Check structured phrases
        const structuredField = wrapper.find('.structured-field-inserter');
        expect(structuredField.at(0).text()).to.equal(`Test Name `);
        expect(structuredField.at(1).text()).to.equal(`49 `);
        expect(structuredField.at(2).text()).to.equal(`Female `);
        // Check full text
        expect(wrapper.find('.editor-content').text()).to.contains('Test Name  is a  49  year old  Female  coming in for follow up.')
    });

    // it.only('In pre-encounter mode, clicking the "New Note" button clears the editor content', () => {
    //     let patient = new PatientRecord(hardCodedPatient);
    //     const contextManager = new ContextManager(patient, () => {});
    //     const structuredFieldMapManager = new StructuredFieldMapManager();
    //     const shortcutManager = new ShortcutManager();

    //     // Mock function to create a new shortcut and set text on shortcut. Allows Editor to update correctly.
    //     let mockNewCurrentShortcut = (shortcutC, shortcutType, shortcutData, updatePatient = true) => {
    //         let newShortcut = shortcutManager.createShortcut(shortcutC, shortcutType, {}, shortcutData, this.handleShortcutUpdate);
    //         newShortcut.initialize(contextManager, shortcutType, updatePatient, shortcutData);
    //         return newShortcut;
    //     }

    //     let appState = { documentText : ''};
    //     let setFullAppStateWithCallback = (state, callback) => {
    //         appState = state;
    //     };

    //     const notesPanelWrapper = mount(<NotesPanel
    //         patient={patient}
    //         contextManager={contextManager}
    //         structuredFieldMapManager={structuredFieldMapManager}
    //         shortcutManager={shortcutManager}
    //         newCurrentShortcut={mockNewCurrentShortcut}
    //         setFullAppState={jest.fn()}
    //         isNoteViewerVisible={true}
    //         isNoteViewerEditable={true}
    //         //Others that are required but not used in test
    //         currentViewMode={''}
    //         dataAccess={{}}
    //         documentText={appState.documentText}
    //         errors={[]}
    //         handleSummaryItemSelected={jest.fn()}
    //         itemInserted={jest.fn()}
    //         loginUsername={''}
    //         noteClosed={false}
    //         setDocumentText={jest.fn()}
    //         setDocumentTextWithCallback={jest.fn()}
    //         setFullAppStateWithCallback={setFullAppStateWithCallback}
    //         setLayout={jest.fn()}
    //         setOpenClinicalNote={jest.fn()}
    //         setNoteClosed={jest.fn()}
    //         setNoteViewerEditable={jest.fn()}
    //         setNoteViewerVisible={jest.fn()}
    //         setSearchSelectedItem={jest.fn()}
    //         summaryItemToInsert={''}
    //         updateErrors={jest.fn()}
    //     />);
    //     expect(notesPanelWrapper).to.have.lengthOf(1);
    //     expect(notesPanelWrapper.find(FluxNotesEditor)).to.have.lengthOf(1);
    //     notesPanelWrapper.setState({ updatedEditorNote: { content: '@name' } });

    //     expect(notesPanelWrapper.find('.structured-field')).to.have.length(1);
    //     expect(notesPanelWrapper.find('.structured-field').text()).to.contain(patient.getName());

    //     // clinical notes button is selected
    //     const clinicalNotesButton = notesPanelWrapper.find('#notes-btn');
    //     expect(clinicalNotesButton.exists()).to.equal(true);
    //     clinicalNotesButton.at(0).props().onClick();
    //     notesPanelWrapper.update();
        
    //     // Click on new note button to open the editor
    //     // const newNoteButton = notesPanelWrapper.find('.note-new');
    //     // newNoteButton.at(0).props().onClick();
    //     // notesPanelWrapper.update();

    //     // simulate new note button being clicked
    //     const noteAssistant = notesPanelWrapper.find(NoteAssistant);
    //     //console.log(noteAssistant.at(0).instance());
    //     noteAssistant.at(0).instance().handleOnNewNoteButtonClick();
    //     notesPanelWrapper.update();

    //     //expect(notesPanelWrapper.find('.structured-field')).to.have.length(0);
    //     /*expect(notesPanelWrapper.find('span[contenteditable=false]').at(0).text()).
    //         to.contain("Enter your clinical note here or choose a template to start from...");*/

    //     console.log(notesPanelWrapper.find('div[data-slate-editor=true]').debug());
    //     expect(notesPanelWrapper.find('div[data-slate-editor=true]').text()).to.
    //         contain("Enter your clinical note here or choose a template o start from...");
    // });    

    it('6.2 renders notes panel and typing an inserterShortcut in the editor results in a structured data insertion', () => {
        let patient = new PatientRecord(hardCodedPatient);
        const contextManager = new ContextManager(patient, () => {});
        const structuredFieldMapManager = new StructuredFieldMapManager();
        const shortcutManager = new ShortcutManager();

        // Mock function to create a new shortcut and set text on shortcut. Allows Editor to update correctly.
        let mockNewCurrentShortcut = (shortcutC, shortcutType, shortcutData, updatePatient = true) => {
            let newShortcut = shortcutManager.createShortcut(shortcutC, shortcutType, patient, shortcutData, this.handleShortcutUpdate);
            newShortcut.initialize(contextManager, shortcutType, updatePatient, shortcutData);
            return newShortcut;
        }

        const searchIndex = new SearchIndex();
        const notesPanelWrapper = mount(<NotesPanel
            patient={patient}
            contextManager={contextManager}
            structuredFieldMapManager={structuredFieldMapManager}
            shortcutManager={shortcutManager}
            newCurrentShortcut={mockNewCurrentShortcut}
            setFullAppState={jest.fn()}
            isNoteViewerVisible={true}
            isNoteViewerEditable={true}
            //Others that are required but not used in test
            currentViewMode={''}
            dataAccess={{}}
            errors={[]}
            handleSummaryItemSelected={jest.fn()}
            itemInserted={jest.fn()}
            loginUsername={''}
            noteClosed={false}
            searchIndex={searchIndex}
            setFullAppStateWithCallback={jest.fn()}
            setLayout={jest.fn()}
            setOpenClinicalNote={jest.fn()}
            setNoteClosed={jest.fn()}
            setNoteViewerEditable={jest.fn()}
            setNoteViewerVisible={jest.fn()}
            setOpenSourceNoteEntryId={jest.fn()}
            setSearchSelectedItem={jest.fn()}
            summaryItemToInsert={''}
            updateErrors={jest.fn()}
            searchSuggestions={[]}
        />,
        { attachTo: document.body });
        expect(notesPanelWrapper).to.have.lengthOf(1);
        expect(notesPanelWrapper.find(FluxNotesEditor)).to.have.lengthOf(1);

        const entryId = patient.addClinicalNote('', '', '', '', '', '@name', false);
        const updatedEditorNote = patient.getEntryById(entryId);
        notesPanelWrapper.setState({ updatedEditorNote });

        expect(notesPanelWrapper.find('.structured-field-inserter')).to.have.length(1);
        expect(notesPanelWrapper.find('.structured-field-inserter').text()).to.contain(patient.getName());
    });

    it('6.3 renders notes panel, clicking "@condition" and choosing "Invasive ductal carcinoma of breast" creates a new condition section in the context tray and adds structured data.', () => {
        let patient = new PatientRecord(hardCodedPatient);
        const contextManager = new ContextManager(patient, () => {});
        const structuredFieldMapManager = new StructuredFieldMapManager();
        const shortcutManager = new ShortcutManager();

        // Mock function to create a new shortcut and set text on shortcut. Allows Editor to update correctly.
        let mockNewCurrentShortcut = (shortcutC, shortcutType, shortcutData, updatePatient = true) => {
            let newShortcut = shortcutManager.createShortcut(shortcutC, shortcutType, patient, shortcutData, this.handleShortcutUpdate);
            newShortcut.initialize(contextManager, shortcutType, updatePatient, shortcutData);
            return newShortcut;
        }

        const searchIndex = new SearchIndex();
        const notesPanelWrapper = mount(<NotesPanel
            patient={patient}
            contextManager={contextManager}
            structuredFieldMapManager={structuredFieldMapManager}
            shortcutManager={shortcutManager}
            newCurrentShortcut={mockNewCurrentShortcut}
            setFullAppState={jest.fn()}
            isNoteViewerVisible={true}
            isNoteViewerEditable={true}
            //Others that are required but not used in test
            currentViewMode={''}
            dataAccess={{}}
            errors={[]}
            handleSummaryItemSelected={jest.fn()}
            itemInserted={jest.fn()}
            loginUsername={''}
            noteClosed={false}
            searchIndex={searchIndex}
            setFullAppStateWithCallback={jest.fn()}
            setLayout={jest.fn()}
            setOpenClinicalNote={jest.fn()}
            setNoteClosed={jest.fn()}
            setNoteViewerEditable={jest.fn()}
            setNoteViewerVisible={jest.fn()}
            setSearchSelectedItem={jest.fn()}
            setOpenClinicalNote={jest.fn()}
            setOpenSourceNoteEntryId={jest.fn()}
            summaryItemToInsert={''}
            updateErrors={jest.fn()}
            searchSuggestions={[]}
        />, { attachTo: document.body });
        expect(notesPanelWrapper.find(FluxNotesEditor)).to.have.lengthOf(1);
        expect(notesPanelWrapper.find(NoteAssistant)).to.have.lengthOf(1);

        const contextPanelElements = notesPanelWrapper.find('.context-options-list .context-option');
        const conditionButton = contextPanelElements.find({ children: '@condition' });
        expect(conditionButton).to.have.lengthOf(1);
        conditionButton.simulate('click');

        const optionsForm = notesPanelWrapper.find('#pickList-options-panel').find('.option-btn').find('span');
        const invasiveButton = optionsForm.find({ children: 'Invasive ductal carcinoma of breast 01 Jun 2012' });
        expect(invasiveButton).to.have.lengthOf(1);
        invasiveButton.simulate('click');

        const conditionSection = notesPanelWrapper.find('.context-tray').find('div').find('[title="Invasive ductal carcinoma of breast"]');
        expect(conditionSection).to.have.lengthOf(1);

        expect(notesPanelWrapper.find('.structured-field-inserter')).to.have.length(1);
        expect(notesPanelWrapper.find('.structured-field-inserter').text()).to.contain('Invasive ductal carcinoma of breast');
    });

    it('6.4 Typing an inserterShortcut that is not currently valid in the editor does not result in a structured data insertion ', () => {
        // Set up Managers that are needed by FluxNotesEditor
        let patient = new PatientRecord(hardCodedPatient);
        const contextManager = new ContextManager(patient, () => {});
        const shortcutManager = new ShortcutManager();
        const structuredFieldMapManager = new StructuredFieldMapManager();
        const searchIndex = new SearchIndex();

        // Mock function to create a new shortcut and set text on shortcut. Allows Editor to update correctly.
        let mockNewCurrentShortcut = (shortcutC, shortcutType, shortcutData, updatePatient = true) => {
            let newShortcut = shortcutManager.createShortcut(shortcutC, shortcutType, patient, shortcutData, this.handleShortcutUpdate);
            newShortcut.initialize(contextManager, shortcutType, updatePatient, shortcutData);
            return newShortcut;
        }

        const wrapper = mount(<FluxNotesEditor
            closeNote={() => {}}
            updatedEditorNote={{ content: '' }}
            shortcutManager={shortcutManager}
            contextManager={contextManager}
            structuredFieldMapManager={structuredFieldMapManager}
            newCurrentShortcut={mockNewCurrentShortcut}
            updatedEditorNote={null}
            searchIndex={searchIndex}
            handleUpdateEditorWithNote={jest.fn()}
            isNoteViewerVisible={true}
            isNoteViewerEditable={true}
            setFullAppState={jest.fn()}
            setFullAppStateWithCallback={jest.fn()}
            setLayout={jest.fn()}
            shouldEditorContentUpdate={true}
            setNoteViewerEditable={jest.fn()}
            setNoteViewerVisible={jest.fn()}
            setOpenSourceNoteEntryId={jest.fn()}
            currentViewMode={''}
            errors={[]}
            itemInserted={jest.fn()}
            noteAssistantMode={''}
            patient={{}}
            saveNote={jest.fn()}
            summaryItemToInsert={''}
            updateErrors={jest.fn()}
            updateLocalDocumentText={jest.fn()}
            updateSelectedNote={jest.fn()}
            updateNoteAssistantMode={jest.fn()}
            updateContextTrayItemToInsert={jest.fn()}
            searchSuggestions={[]}
        />);
        expect(wrapper).to.exist;
        // wrapper.find('.editor-content').simulate('click'); //goes into on change

        // let noteContent = '#imaging ';
        const arrayOfStructuredDataToEnter = ["#imaging "]
        const entryId = patient.addClinicalNote('', '', '', '', '', arrayOfStructuredDataToEnter.join(' '), false);
        const updatedEditorNote = patient.getEntryById(entryId);
        // Set updatedEditorNote props because this triggers that a change is coming in to the editor and inserts text with structured phrases.
        wrapper.instance().onFocus();
        wrapper.setProps({ updatedEditorNote });

        // Check structured phrases
        const structuredField = wrapper.find('.structured-field-creator');
        expect(structuredField).to.have.lengthOf(0)

        // Check full text
        const editorContent = wrapper.find('.editor-content');
        expect(editorContent.text()).to.contain("");
    });    
    
    it('6.5 captures staging data using singleKeywordHashtag method', () => {
        // Set up Managers that are needed by FluxNotesEditor
        let patient = new PatientRecord(hardCodedPatient);
        const contextManager = new ContextManager(patient, () => {});
        const shortcutManager = new ShortcutManager();
        const structuredFieldMapManager = new StructuredFieldMapManager();
        const searchIndex = new SearchIndex();

        // Mock function to create a new shortcut and set text on shortcut. Allows Editor to update correctly.
        let mockNewCurrentShortcut = (shortcutC, shortcutType, shortcutData, updatePatient = true) => {
            let newShortcut = shortcutManager.createShortcut(shortcutC, shortcutType, patient, shortcutData, this.handleShortcutUpdate);
            newShortcut.initialize(contextManager, shortcutType, updatePatient, shortcutData);
            return newShortcut;
        }

        const wrapper = mount(<FluxNotesEditor
            arrayOfPickLists={[]}
            changeShortcutType={() => {}} 
            closeNote={() => {}} 
            contextManager={contextManager}
            contextTrayItemToInsert={() => {}} 
            currentViewMode={''}
            errors={[]}
            handleUpdateEditorWithNote={jest.fn()}
            handleUpdateArrayOfPickLists={jest.fn()}
            isNoteViewerEditable={true}
            isNoteViewerVisible={true}
            itemInserted={jest.fn()}
            newCurrentShortcut={mockNewCurrentShortcut}
            noteAssistantMode={''}
            openNoteSearchSuggestions={jest.fn()}
            openSourceNoteEntryId={''}
            patient={patient}
            saveNote={jest.fn()}
            searchIndex={searchIndex}
            selectedNote={{}}
            selectedPickListOptions={jest.fn()}
            setForceRefresh={jest.fn()}
            setLayout={jest.fn()}
            setNoteViewerEditable={jest.fn()}
            setNoteViewerVisible={jest.fn()}
            setOpenSourceNoteEntryId={jest.fn()}
            setUndoTemplateInsertion={jest.fn()}
            shortcutKey={{}}
            shortcutManager={shortcutManager}
            shortcutType={{}}
            shouldEditorContentUpdate={true}
            shouldRevertTemplate={jest.fn()}
            shouldUpdateShortcutType={jest.fn()}
            structuredFieldMapManager={structuredFieldMapManager}
            summaryItemToInsert={''}
            summaryItemToInsertSource={''}
            updateErrors={jest.fn()}
            updatedEditorNote={{ content: '' }}
            updateLocalDocumentText={jest.fn()}
            updateSelectedNote={jest.fn()}
            updateNoteAssistantMode={jest.fn()}
            updateContextTrayItemToInsert={jest.fn()}
            searchSuggestions={[]}
        />);
        expect(wrapper).to.exist;
        // wrapper.find('.editor-content').simulate('click'); //goes into on change

        // let noteContent = ' #staging t2 n2 m1';
        const arrayOfStructuredDataToEnter = ["@condition[[{\"text\":\"Invasive ductal carcinoma of breast\",\"entryId\":\"8\"}]] ", "#staging ", "t2 ", "n2 ", "m1 "];
        const arrayOfExpectedStructuredDataInserters = ["Invasive ductal carcinoma of breast "];
        const arrayOfExpectedStructuredDataCreators = ["staging ", "t2 ", "n2 ", "m1 "];
        const entryId = patient.addClinicalNote('', '', '', '', '', arrayOfStructuredDataToEnter.join(' '), false);
        const updatedEditorNote = patient.getEntryById(entryId);
        // Set updatedEditorNote props because this triggers that a change is coming in to the editor and inserts text with structured phrases.
        wrapper.setProps({ updatedEditorNote });

        // Check structured phrases inserters
        const structuredFieldInserter = wrapper.find('.structured-field-inserter');
        expect(structuredFieldInserter).to.have.lengthOf(arrayOfExpectedStructuredDataInserters.length)
        for (let index = 0; index < arrayOfExpectedStructuredDataInserters.length; index++) {
            expect(structuredFieldInserter.at(index).text()).to.contain(arrayOfExpectedStructuredDataInserters[index]);
        }
        // Check structured phrases creators
        const structuredFieldCreator = wrapper.find('.structured-field-creator');
        expect(structuredFieldCreator).to.have.lengthOf(arrayOfExpectedStructuredDataCreators.length)
        for (let index = 0; index < arrayOfExpectedStructuredDataCreators.length; index++) {
            expect(structuredFieldCreator.at(index).text()).to.contain(arrayOfExpectedStructuredDataCreators[index]);
        }
        // Check full text
        const editorContent = wrapper.find('.editor-content');
        for (let index = 0; index < arrayOfExpectedStructuredDataInserters.length; index++) {
            expect(editorContent.text()).to.contain(arrayOfExpectedStructuredDataInserters[index]);
        }
        for (let index = 0; index < arrayOfExpectedStructuredDataCreators.length; index++) {
            expect(editorContent.text()).to.contain(arrayOfExpectedStructuredDataCreators[index]);
        }
    });

    it('6.6 Typing a date in the editor results in a structured data insertion ', () => {
        // Set up Managers that are needed by FluxNotesEditor
        let patient = new PatientRecord(hardCodedPatient);
        const contextManager = new ContextManager(patient, () => {});
        const shortcutManager = new ShortcutManager();
        const structuredFieldMapManager = new StructuredFieldMapManager();
        const searchIndex = new SearchIndex();

        // Mock function to create a new shortcut and set text on shortcut. Allows Editor to update correctly.
        let mockNewCurrentShortcut = (shortcutC, shortcutType, shortcutData, updatePatient = true) => {
            let newShortcut = shortcutManager.createShortcut(shortcutC, shortcutType, patient, shortcutData, this.handleShortcutUpdate);
            newShortcut.initialize(contextManager, shortcutType, updatePatient, shortcutData);
            return newShortcut;
        }

        const wrapper = mount(<FluxNotesEditor
            closeNote={() => {}}
            updatedEditorNote={{ content: '' }}
            shortcutManager={shortcutManager}
            contextManager={contextManager}
            structuredFieldMapManager={structuredFieldMapManager}
            newCurrentShortcut={mockNewCurrentShortcut}
            updatedEditorNote={null}
            searchIndex={searchIndex}
            handleUpdateEditorWithNote={jest.fn()}
            isNoteViewerVisible={true}
            isNoteViewerEditable={true}
            setFullAppState={jest.fn()}
            setFullAppStateWithCallback={jest.fn()}
            setLayout={jest.fn()}
            shouldEditorContentUpdate={true}
            setNoteViewerEditable={jest.fn()}
            setNoteViewerVisible={jest.fn()}
            setOpenSourceNoteEntryId={jest.fn()}
            currentViewMode={''}
            errors={[]}
            itemInserted={jest.fn()}
            noteAssistantMode={''}
            patient={{}}
            saveNote={jest.fn()}
            summaryItemToInsert={''}
            updateErrors={jest.fn()}
            updateLocalDocumentText={jest.fn()}
            updateSelectedNote={jest.fn()}
            updateNoteAssistantMode={jest.fn()}
            updateContextTrayItemToInsert={jest.fn()}
            searchSuggestions={[]}
        />);
        expect(wrapper).to.exist;
        // wrapper.find('.editor-content').simulate('click'); //goes into on change

        // let noteContent = ' #staging t2 n2 m1';
        const arrayOfStructuredDataToEnter = ["#12/20/2015 "];
        const arrayOfExpectedStructuredData = ["12/20/2015 "];
        const entryId = patient.addClinicalNote('', '', '', '', '', arrayOfStructuredDataToEnter.join(' '), false);
        const updatedEditorNote = patient.getEntryById(entryId);
        // Set updatedEditorNote props because this triggers that a change is coming in to the editor and inserts text with structured phrases.
        wrapper.setProps({ updatedEditorNote });

        // Check structured phrases
        const structuredField = wrapper.find('.structured-field-creator');
        expect(structuredField).to.have.lengthOf(arrayOfExpectedStructuredData.length)
        for (let index = 0; index < arrayOfExpectedStructuredData.length; index++) {
            expect(structuredField.at(index).text()).to.contain(arrayOfExpectedStructuredData[index]);
        }
        // Check full text
        const editorContent = wrapper.find('.editor-content');
        for (let index = 0; index < arrayOfExpectedStructuredData.length; index++) {
            expect(editorContent.text()).to.contain(arrayOfExpectedStructuredData[index]);
        }
    });

    it("6.7 Typing '#deceased' in the editor results in a structured data insertion and the context panel updates", () => {
        let patient = new PatientRecord(hardCodedPatient);
        const contextManager = new ContextManager(patient, () => {});
        const structuredFieldMapManager = new StructuredFieldMapManager();
        const shortcutManager = new ShortcutManager();

        // Mock function to create a new shortcut and set text on shortcut. Allows Editor to update correctly.
        let mockNewCurrentShortcut = (shortcutC, shortcutType, shortcutData, updatePatient = true) => {
            let newShortcut = shortcutManager.createShortcut(shortcutC, shortcutType, patient, shortcutData, this.handleShortcutUpdate);
            newShortcut.initialize(contextManager, shortcutType, updatePatient, shortcutData);
            return newShortcut;
        }

        const searchIndex = new SearchIndex();
        const notesPanelWrapper = mount(<NotesPanel
            patient={patient}
            contextManager={contextManager}
            structuredFieldMapManager={structuredFieldMapManager}
            shortcutManager={shortcutManager}
            newCurrentShortcut={mockNewCurrentShortcut}
            setFullAppState={jest.fn()}
            isNoteViewerVisible={true}
            isNoteViewerEditable={true}
            //Others that are required but not used in test
            currentViewMode={''}
            dataAccess={{}}
            errors={[]}
            handleSummaryItemSelected={jest.fn()}
            itemInserted={jest.fn()}
            loginUsername={''}
            noteClosed={false}
            searchIndex={searchIndex}
            setFullAppStateWithCallback={jest.fn()}
            setLayout={jest.fn()}
            setOpenClinicalNote={jest.fn()}
            setNoteClosed={jest.fn()}
            setNoteViewerEditable={jest.fn()}
            setNoteViewerVisible={jest.fn()}
            setSearchSelectedItem={jest.fn()}
            setOpenClinicalNote={jest.fn()}
            setOpenSourceNoteEntryId={jest.fn()}
            summaryItemToInsert={''}
            updateErrors={jest.fn()}
            searchSuggestions={[]}
        />,
        { attachTo: document.body });
        const fluxNotesEditor = notesPanelWrapper.find(FluxNotesEditor);
        expect(fluxNotesEditor).to.have.lengthOf(1);
        expect(notesPanelWrapper.find(NoteAssistant)).to.have.lengthOf(1);

        const arrayOfStructuredDataToEnter = ["#deceased "];
        const entryId = patient.addClinicalNote('', '', '', '', '', arrayOfStructuredDataToEnter.join(' '), false);
        const updatedEditorNote = patient.getEntryById(entryId);
        // Set updatedEditorNote props because this triggers that a change is coming in to the editor and inserts text with structured phrases.
        fluxNotesEditor.instance().onFocus();
        //fluxNotesEditor.setProps({ updatedEditorNote });
        notesPanelWrapper.setState({ updatedEditorNote });


        expect(notesPanelWrapper.find('.structured-field-creator')).to.have.length(1);
        expect(notesPanelWrapper.find('.structured-field-creator').text()).to.contain('deceased');        

        const deceasedChild = notesPanelWrapper.find('.context-tray').find('div.context-options-header[title="Date"]');
        expect(deceasedChild).to.have.lengthOf(1);
    });

    it("6.8 Typing #PR into the editor followed by #Positive results in structured data insertion and context panel updates", () => {
        let patient = new PatientRecord(hardCodedPatient);
        const contextManager = new ContextManager(patient, () => {});
        const structuredFieldMapManager = new StructuredFieldMapManager();
        const shortcutManager = new ShortcutManager();

        // Mock function to create a new shortcut and set text on shortcut. Allows Editor to update correctly.
        let mockNewCurrentShortcut = (shortcutC, shortcutType, shortcutData, updatePatient = true) => {
            let newShortcut = shortcutManager.createShortcut(shortcutC, shortcutType, patient, shortcutData, this.handleShortcutUpdate);
            newShortcut.initialize(contextManager, shortcutType, updatePatient, shortcutData);
            return newShortcut;
        }

        const searchIndex = new SearchIndex();
        const notesPanelWrapper = mount(<NotesPanel
            patient={patient}
            contextManager={contextManager}
            structuredFieldMapManager={structuredFieldMapManager}
            shortcutManager={shortcutManager}
            newCurrentShortcut={mockNewCurrentShortcut}
            setFullAppState={jest.fn()}
            isNoteViewerVisible={true}
            isNoteViewerEditable={true}
            //Others that are required but not used in test
            currentViewMode={''}
            dataAccess={{}}
            errors={[]}
            handleSummaryItemSelected={jest.fn()}
            itemInserted={jest.fn()}
            loginUsername={''}
            noteClosed={false}
            searchIndex={searchIndex}
            setFullAppStateWithCallback={jest.fn()}
            setLayout={jest.fn()}
            setOpenClinicalNote={jest.fn()}
            setNoteClosed={jest.fn()}
            setNoteViewerEditable={jest.fn()}
            setNoteViewerVisible={jest.fn()}
            setSearchSelectedItem={jest.fn()}
            setOpenClinicalNote={jest.fn()}
            setOpenSourceNoteEntryId={jest.fn()}
            summaryItemToInsert={''}
            updateErrors={jest.fn()}
            searchSuggestions={[]}
        />,
        { attachTo: document.body });
        const fluxNotesEditor = notesPanelWrapper.find(FluxNotesEditor);
        expect(fluxNotesEditor).to.have.lengthOf(1);
        expect(notesPanelWrapper.find(NoteAssistant)).to.have.lengthOf(1);

        const arrayOfStructuredDataToEnter = ["@condition[[{\"text\":\"Invasive ductal carcinoma of breast\",\"entryId\":\"8\"}]] ", "#PR ", "#Positive "];
        const arrayOfExpectedStructuredDataInserter = ["Invasive ductal carcinoma of breast "]
        const arrayOfExpectedStructuredDataCreator = ["PR ", "Positive "]
        const entryId = patient.addClinicalNote('', '', '', '', '', arrayOfStructuredDataToEnter.join(' '), false);
        const updatedEditorNote = patient.getEntryById(entryId);
        // Set updatedEditorNote props because this triggers that a change is coming in to the editor and inserts text with structured phrases.
        fluxNotesEditor.instance().onFocus();
        //fluxNotesEditor.setProps({ updatedEditorNote });
        notesPanelWrapper.setState({ updatedEditorNote });

        // Check structured phrases
        const structuredFieldInserter = notesPanelWrapper.find('.structured-field-inserter');
        expect(structuredFieldInserter).to.have.lengthOf(arrayOfExpectedStructuredDataInserter.length)
        for (let index = 0; index < arrayOfExpectedStructuredDataInserter.length; index++) {
            expect(structuredFieldInserter.at(index).text()).to.contain(arrayOfExpectedStructuredDataInserter[index]);
        }
        const structuredFieldCreator = notesPanelWrapper.find('.structured-field-creator');
        expect(structuredFieldCreator).to.have.lengthOf(arrayOfExpectedStructuredDataCreator.length)
        for (let index = 0; index < arrayOfExpectedStructuredDataCreator.length; index++) {
            expect(structuredFieldCreator.at(index).text()).to.contain(arrayOfExpectedStructuredDataCreator[index]);
        }
        // Check full text
        const editorContentInserter = notesPanelWrapper.find('.editor-content');
        for (let index = 0; index < arrayOfExpectedStructuredDataInserter.length; index++) {
            expect(editorContentInserter.text()).to.contain(arrayOfExpectedStructuredDataInserter[index]);
        }
        const editorContentCreator = notesPanelWrapper.find('.editor-content');
        for (let index = 0; index < arrayOfExpectedStructuredDataCreator.length; index++) {
            expect(editorContentCreator.text()).to.contain(arrayOfExpectedStructuredDataCreator[index]);
        }
    });

    // NOTE: Skipping this test for now since it is functionally the same as the #PR tests
    it.skip("6.9 Typing #ER into the editor followed by #Positive results in structured data insertion and context panel updates", () => {
        let patient = new PatientRecord(hardCodedPatient);
        const contextManager = new ContextManager(patient, () => {});
        const structuredFieldMapManager = new StructuredFieldMapManager();
        const shortcutManager = new ShortcutManager();

        // Mock function to create a new shortcut and set text on shortcut. Allows Editor to update correctly.
        let mockNewCurrentShortcut = (shortcutC, shortcutType, shortcutData, updatePatient = true) => {
            let newShortcut = shortcutManager.createShortcut(shortcutC, shortcutType, patient, shortcutData, this.handleShortcutUpdate);
            newShortcut.initialize(contextManager, shortcutType, updatePatient, shortcutData);
            return newShortcut;
        }

        const notesPanelWrapper = mount(<NotesPanel
            patient={patient}
            contextManager={contextManager}
            structuredFieldMapManager={structuredFieldMapManager}
            shortcutManager={shortcutManager}
            newCurrentShortcut={mockNewCurrentShortcut}
            setFullAppState={jest.fn()}
            isNoteViewerVisible={true}
            isNoteViewerEditable={true}
            //Others that are required but not used in test
            currentViewMode={''}
            dataAccess={{}}
            errors={[]}
            handleSummaryItemSelected={jest.fn()}
            itemInserted={jest.fn()}
            loginUsername={''}
            noteClosed={false}
            setFullAppStateWithCallback={jest.fn()}
            setLayout={jest.fn()}
            setOpenClinicalNote={jest.fn()}
            setNoteClosed={jest.fn()}
            setNoteViewerEditable={jest.fn()}
            setNoteViewerVisible={jest.fn()}
            setSearchSelectedItem={jest.fn()}
            setOpenClinicalNote={jest.fn()}
            summaryItemToInsert={''}
            updateErrors={jest.fn()}
            searchSuggestions={[]}
        />);
        const fluxNotesEditor = notesPanelWrapper.find(FluxNotesEditor);
        expect(fluxNotesEditor).to.have.lengthOf(1);
        expect(notesPanelWrapper.find(NoteAssistant)).to.have.lengthOf(1);

        const arrayOfStructuredDataToEnter = ["@condition[[{\"text\":\"Invasive ductal carcinoma of breast\",\"entryId\":\"8\"}]] ", "#ER ", "#Positive "];
        const arrayOfExpectedStructuredData = ["Invasive ductal carcinoma of breast ", "#ER ", "#Positive "]
        const updatedEditorNote = { content: arrayOfStructuredDataToEnter.join(' ') };
        // Set updatedEditorNote props because this triggers that a change is coming in to the editor and inserts text with structured phrases.
        fluxNotesEditor.instance().onFocus();
        //fluxNotesEditor.setProps({ updatedEditorNote });
        notesPanelWrapper.setState({ updatedEditorNote });

        // Check structured phrases
        const structuredField = notesPanelWrapper.find('.structured-field');
        expect(structuredField).to.have.lengthOf(arrayOfExpectedStructuredData.length)
        for (let index = 0; index < arrayOfExpectedStructuredData.length; index++) {
            expect(structuredField.at(index).text()).to.contain(arrayOfExpectedStructuredData[index]);
        }
        // Check full text
        const editorContent = notesPanelWrapper.find('.editor-content');
        for (let index = 0; index < arrayOfExpectedStructuredData.length; index++) {
            expect(editorContent.text()).to.contain(arrayOfExpectedStructuredData[index]);
        }
    });

    // NOTE: Skipping this test for now since it is functionally the same as the #PR tests
    it.skip("6.10 Typing #HER2 into the editor followed by #Positive results in structured data insertion and context panel updates", () => {
        let patient = new PatientRecord(hardCodedPatient);
        const contextManager = new ContextManager(patient, () => {});
        const structuredFieldMapManager = new StructuredFieldMapManager();
        const shortcutManager = new ShortcutManager();

        // Mock function to create a new shortcut and set text on shortcut. Allows Editor to update correctly.
        let mockNewCurrentShortcut = (shortcutC, shortcutType, shortcutData, updatePatient = true) => {
            let newShortcut = shortcutManager.createShortcut(shortcutC, shortcutType, patient, shortcutData, this.handleShortcutUpdate);
            newShortcut.initialize(contextManager, shortcutType, updatePatient, shortcutData);
            return newShortcut;
        }

        const notesPanelWrapper = mount(<NotesPanel
            patient={patient}
            contextManager={contextManager}
            structuredFieldMapManager={structuredFieldMapManager}
            shortcutManager={shortcutManager}
            newCurrentShortcut={mockNewCurrentShortcut}
            setFullAppState={jest.fn()}
            isNoteViewerVisible={true}
            isNoteViewerEditable={true}
            //Others that are required but not used in test
            currentViewMode={''}
            dataAccess={{}}
            errors={[]}
            handleSummaryItemSelected={jest.fn()}
            itemInserted={jest.fn()}
            loginUsername={''}
            noteClosed={false}
            setFullAppStateWithCallback={jest.fn()}
            setLayout={jest.fn()}
            setOpenClinicalNote={jest.fn()}
            setNoteClosed={jest.fn()}
            setNoteViewerEditable={jest.fn()}
            setNoteViewerVisible={jest.fn()}
            setSearchSelectedItem={jest.fn()}
            setOpenClinicalNote={jest.fn()}
            summaryItemToInsert={''}
            updateErrors={jest.fn()}
            searchSuggestions={[]}
        />);
        const fluxNotesEditor = notesPanelWrapper.find(FluxNotesEditor);
        expect(fluxNotesEditor).to.have.lengthOf(1);
        expect(notesPanelWrapper.find(NoteAssistant)).to.have.lengthOf(1);

        const arrayOfStructuredDataToEnter = ["@condition[[{\"text\":\"Invasive ductal carcinoma of breast\",\"entryId\":\"8\"}]] ", "#HER2 ", "#Positive "];
        const arrayOfExpectedStructuredData = ["Invasive ductal carcinoma of breast ", "#HER2 ", "#Positive "]
        const updatedEditorNote = { content: arrayOfStructuredDataToEnter.join(' ') };
        // Set updatedEditorNote props because this triggers that a change is coming in to the editor and inserts text with structured phrases.
        fluxNotesEditor.instance().onFocus();
        //fluxNotesEditor.setProps({ updatedEditorNote });
        notesPanelWrapper.setState({ updatedEditorNote });

        // Check structured phrases
        const structuredField = notesPanelWrapper.find('.structured-field');
        expect(structuredField).to.have.lengthOf(arrayOfExpectedStructuredData.length)
        for (let index = 0; index < arrayOfExpectedStructuredData.length; index++) {
            expect(structuredField.at(index).text()).to.contain(arrayOfExpectedStructuredData[index]);
        }
        // Check full text
        const editorContent = notesPanelWrapper.find('.editor-content');
        for (let index = 0; index < arrayOfExpectedStructuredData.length; index++) {
            expect(editorContent.text()).to.contain(arrayOfExpectedStructuredData[index]);
        }
    });

    it('6.11 Switches contexts without closing a context chooses the correct parent context and successfully enters information in editor', () => {
        // Set up Managers that are needed by FluxNotesEditor
        let patient = new PatientRecord(hardCodedPatient);
        const contextManager = new ContextManager(patient, () => {});
        const shortcutManager = new ShortcutManager();
        const structuredFieldMapManager = new StructuredFieldMapManager();
        const searchIndex = new SearchIndex();

        // Mock function to create a new shortcut and set text on shortcut. Allows Editor to update correctly.
        let mockNewCurrentShortcut = (shortcutC, shortcutType, shortcutData, updatePatient = true) => {
            let newShortcut = shortcutManager.createShortcut(shortcutC, shortcutType, patient, shortcutData, this.handleShortcutUpdate);
            newShortcut.initialize(contextManager, shortcutType, updatePatient, shortcutData);
            return newShortcut;
        }

        const wrapper = mount(<FluxNotesEditor
            closeNote={() => {}}
            updatedEditorNote={{ content: '' }}
            shortcutManager={shortcutManager}
            contextManager={contextManager}
            structuredFieldMapManager={structuredFieldMapManager}
            newCurrentShortcut={mockNewCurrentShortcut}
            updatedEditorNote={null}
            searchIndex={searchIndex}
            handleUpdateEditorWithNote={jest.fn()}
            isNoteViewerVisible={true}
            isNoteViewerEditable={true}
            setFullAppState={jest.fn()}
            setFullAppStateWithCallback={jest.fn()}
            setLayout={jest.fn()}
            shouldEditorContentUpdate={true}
            setNoteViewerEditable={jest.fn()}
            setNoteViewerVisible={jest.fn()}
            setOpenSourceNoteEntryId={jest.fn()}
            currentViewMode={''}
            errors={[]}
            itemInserted={jest.fn()}
            noteAssistantMode={''}
            patient={{}}
            saveNote={jest.fn()}
            summaryItemToInsert={''}
            updateErrors={jest.fn()}
            updateLocalDocumentText={jest.fn()}
            updateSelectedNote={jest.fn()}
            updateNoteAssistantMode={jest.fn()}
            updateContextTrayItemToInsert={jest.fn()}
            searchSuggestions={[]}
        />);
        expect(wrapper).to.exist;
        // wrapper.find('.editor-content').simulate('click'); //goes into on change

        // let noteContent = ' #staging t2 n2 m1';
        const arrayOfShortcutText = ["@condition[[{\"text\":\"Invasive ductal carcinoma of breast\",\"entryId\":\"8\"}]] ", "#toxicity ", "#nausea ", "#disease status ", "#imaging "];
        const arrayOfParsedShortcutTextInserter = ["Invasive ductal carcinoma of breast "]
        const arrayOfParsedShortcutTextCreator = ["toxicity ", "nausea ", "disease status ", "imaging "]
        const entryId = patient.addClinicalNote('', '', '', '', '', arrayOfShortcutText.join(' '), false);
        const updatedEditorNote = patient.getEntryById(entryId);
        // Set updatedEditorNote props because this triggers that a change is coming in to the editor and inserts text with structured phrases.
        wrapper.setProps({ updatedEditorNote });

        // Check structured phrases
        const structuredFieldInserter = wrapper.find('.structured-field-inserter');
        expect(structuredFieldInserter).to.have.lengthOf(arrayOfParsedShortcutTextInserter.length)
        for (let index = 0; index < arrayOfParsedShortcutTextInserter.length; index++) {
            expect(structuredFieldInserter.at(index).text()).to.contain(arrayOfParsedShortcutTextInserter[index]);
        }
        const structuredFieldCreator = wrapper.find('.structured-field-creator');
        expect(structuredFieldCreator).to.have.lengthOf(arrayOfParsedShortcutTextCreator.length)
        for (let index = 0; index < arrayOfParsedShortcutTextCreator.length; index++) {
            expect(structuredFieldCreator.at(index).text()).to.contain(arrayOfParsedShortcutTextCreator[index]);
        }
        // Check full text
        const editorContentCreator = wrapper.find('.editor-content');
        for (let index = 0; index < arrayOfParsedShortcutTextCreator.length; index++) {
            expect(editorContentCreator.text()).to.contain(arrayOfParsedShortcutTextCreator[index]);
        }
    });

    it('6.12 Clicking New Note button adds a new in progress note to the list', () => {
        let patient = new PatientRecord(hardCodedPatient);
        const contextManager = new ContextManager(patient, () => {});
        const structuredFieldMapManager = new StructuredFieldMapManager();
        const shortcutManager = new ShortcutManager();

        // Mock function to create a new shortcut and set text on shortcut. Allows Editor to update correctly.
        let mockNewCurrentShortcut = (shortcutC, shortcutType, shortcutData, updatePatient = true) => {
            let newShortcut = shortcutManager.createShortcut(shortcutC, shortcutType, patient, shortcutData, this.handleShortcutUpdate);
            newShortcut.initialize(contextManager, shortcutType, updatePatient, shortcutData);
            return newShortcut;
        }

        const searchIndex = new SearchIndex();
        const notesPanelWrapper = mount(<NotesPanel
            patient={patient}
            contextManager={contextManager}
            structuredFieldMapManager={structuredFieldMapManager}
            shortcutManager={shortcutManager}
            newCurrentShortcut={mockNewCurrentShortcut}
            setFullAppState={jest.fn()}
            isNoteViewerVisible={true}
            isNoteViewerEditable={true}
            //Others that are required but not used in test
            currentViewMode={''}
            dataAccess={{}}
            errors={[]}
            handleSummaryItemSelected={jest.fn()}
            itemInserted={jest.fn()}
            loginUsername={''}
            noteClosed={false}
            searchIndex={searchIndex}
            setFullAppStateWithCallback={jest.fn()}
            setLayout={jest.fn()}
            setOpenClinicalNote={jest.fn()}
            setNoteClosed={jest.fn()}
            setNoteViewerEditable={jest.fn()}
            setNoteViewerVisible={jest.fn()}
            setSearchSelectedItem={jest.fn()}
            setOpenClinicalNote={jest.fn()}
            summaryItemToInsert={''}
            updateErrors={jest.fn()}
            searchSuggestions={[]}
        />);

        const clinicalNotesButton = notesPanelWrapper.find('#notes-btn');
        expect(clinicalNotesButton.exists()).to.equal(true);
        clinicalNotesButton.at(0).props().onClick();
        notesPanelWrapper.update();

        const inProgressNotes = notesPanelWrapper.find('.note.in-progress-note');
    
        // There are no unsigned notes on the patient's record initially
        expect(inProgressNotes).to.have.length(0);
    
        const newNoteButton = notesPanelWrapper.find('.note-new');
        newNoteButton.at(0).props().onClick();
        notesPanelWrapper.update();
    
        clinicalNotesButton.at(0).props().onClick();
        notesPanelWrapper.update();
    
        const inProgressNotesAfter = notesPanelWrapper.find('.note.in-progress-note');
        expect(inProgressNotesAfter).to.have.length(1);
    });

    // it.only('6.?? Clicking on an existing note in post encounter mode loads the note in the editor', () => {
    //     let patient = new PatientRecord(hardCodedPatient);
    //     const contextManager = new ContextManager(patient, () => {});
    //     const structuredFieldMapManager = new StructuredFieldMapManager();
    //     const shortcutManager = new ShortcutManager();

    //     // Mock function to create a new shortcut and set text on shortcut. Allows Editor to update correctly.
    //     let mockNewCurrentShortcut = (shortcutC, shortcutType, shortcutData, updatePatient = true) => {
    //         let newShortcut = shortcutManager.createShortcut(shortcutC, shortcutType, {}, shortcutData, this.handleShortcutUpdate);
    //         newShortcut.initialize(contextManager, shortcutType, updatePatient, shortcutData);
    //         return newShortcut;
    //     }

    //     const notesPanelWrapper = mount(<NotesPanel
    //         patient={patient}
    //         contextManager={contextManager}
    //         structuredFieldMapManager={structuredFieldMapManager}
    //         shortcutManager={shortcutManager}
    //         newCurrentShortcut={mockNewCurrentShortcut}
    //         setFullAppState={jest.fn()}
    //         isNoteViewerVisible={true}
    //         isNoteViewerEditable={true}
    //         //Others that are required but not used in test
    //         currentViewMode={''}
    //         dataAccess={{}}
    //         errors={[]}
    //         handleSummaryItemSelected={jest.fn()}
    //         itemInserted={jest.fn()}
    //         loginUsername={''}
    //         noteClosed={false}
    //         setFullAppStateWithCallback={jest.fn()}
    //         setLayout={jest.fn()}
    //         setOpenClinicalNote={jest.fn()}
    //         setNoteClosed={jest.fn()}
    //         setNoteViewerEditable={jest.fn()}
    //         setNoteViewerVisible={jest.fn()}
    //         setSearchSelectedItem={jest.fn()}
    //         setOpenClinicalNote={jest.fn()}
    //         summaryItemToInsert={''}
    //         updateErrors={jest.fn()}
    //     />);

    //     const clinicalNotesButton = notesPanelWrapper.find('#notes-btn');
    //     expect(clinicalNotesButton.exists()).to.equal(true);
    //     clinicalNotesButton.at(0).props().onClick();
    //     notesPanelWrapper.update();

    //     // Click on one of the existing notes
    //     const note = notesPanelWrapper.find('.existing-note');
    //     note.at(0).props().onClick();
    //     notesPanelWrapper.update();

    //     const editorContent = notesPanelWrapper.find('.editor-content');
    //     expect(editorContent.text()).to.not.contain("Enter your clinical note here or choose a template to start from...");
    // });
});
