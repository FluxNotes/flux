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

Enzyme.configure({ adapter: new Adapter() });

describe('UpdateErrors', function () {
    it('should set state.errors to equal the provided argument', function () {
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

describe('setFullAppState', function() {
    it('sets the state on the component', function() {
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

describe('TargetedDataControl', function() {
    it('noteDisplayMode buttons update state', function() {
        const summaryMetadata = new SummaryMetadata();
        // Look for the first NameValuePair section which should be Summary. Assumes it does not have a defaultVisualizer property
        const section = summaryMetadata.hardCodedMetadata["http://snomed.info/sct/408643008"].sections.find((section) => {
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

        const visualizerManager = new VisualizerManager()
        const wrapper = shallow(<TargetedDataSection section={section} type={section.type} visualizerManager={visualizerManager} isWide={false} clinicalEvent='post-encounter'/>);

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
describe('TargetedDataControl - correct default visualizer Medications', function() {
    it('correct default visualizer', function() {
        const summaryMetadata = new SummaryMetadata();
        // Look for the first NameValuePair section which should be Summary. Assumes it does not have a defaultVisualizer property
        const section = summaryMetadata.hardCodedMetadata["http://snomed.info/sct/408643008"].sections.find((section) => {
            return (section.type === "Medications");
        });
        const expectedDefault = 'chart';

        const visualizerManager = new VisualizerManager()
        const wrapper = shallow(<TargetedDataSection section={section} type={section.type} visualizerManager={visualizerManager} isWide={false} clinicalEvent='pre-encounter'/>);

        // Initial state
        expect(wrapper.state('defaultVisualizer'))
            .to.eq(expectedDefault);
        expect(wrapper.state('chosenVisualizer'))
            .to.be.null;
    });
});

describe('FullApp', function() {
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
    it('Selecting a condition changes the active condition', () => {
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
    it('Clicking "New Note" button in pre-encounter mode changes layout and displays the note editor', () => {
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
    it('Clicking clinical notes toggle button in Note Assistant switches view to clinical notes', () => {
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
    it('Clicking context toggle button in Note Assistant switches view to context tray', () => {
        const wrapper = mount(<FullApp 
            display='Flux Notes' 
            dataSource='HardCodedReadOnlyDataSource' 
            patientId='788dcbc3-ed18-470c-89ef-35ff91854c7e' />);

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

describe('FluxNotesEditor', function() {
    beforeEach(() => {
      // Set up window and document to be used by Slate in test
      window.getSelection = () => {
          return {
              addRange: () => {},
              extend: () => {},
              removeAllRanges: () => {}
          }
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
    it('inserts supplied text for inserter shortcuts', () => {
        // Set up Managers that are needed by FluxNotesEditor
        let patient = new PatientRecord(hardCodedPatient);
        const contextManager = new ContextManager(patient, () => {});
        const shortcutManager = new ShortcutManager();
        const structuredFieldMapManager = new StructuredFieldMapManager();

        // Mock function to create a new shortcut and set text on shortcut. Allows Editor to update correctly.
        let mockNewCurrentShortcut = (shortcutC, shortcutType, shortcutData, updatePatient = true) => {
            let newShortcut = shortcutManager.createShortcut(shortcutC, shortcutType, {}, shortcutData, this.handleShortcutUpdate);
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
            handleUpdateEditorWithNote={jest.fn()}
            isNoteViewerVisible={true}
            isNoteViewerEditable={true}
            setFullAppState={jest.fn()}
            setFullAppStateWithCallback={jest.fn()}
            setLayout={jest.fn()}
            saveNoteUponKeypress={jest.fn()}
            shouldEditorContentUpdate={true}
            setNoteViewerEditable={jest.fn()}
            setNoteViewerVisible={jest.fn()}
        />);
        expect(wrapper).to.exist;
        // wrapper.find('.editor-content').simulate('click'); //goes into on change

        let noteContent = '@name[[Test Name]] is a @age[[49]] year old @gender[[Female]] coming in for follow up.';
        const updatedEditorNote = { content: noteContent };
        // Set updatedEditorNote props because this triggers that a change is coming in to the editor and inserts text with structured phrases.
        wrapper.setProps({ updatedEditorNote });

        // Check structured phrases
        const structuredField = wrapper.find('.structured-field');
        expect(structuredField.at(0).text()).to.equal(`Test Name `);
        expect(structuredField.at(1).text()).to.equal(`49 `);
        expect(structuredField.at(2).text()).to.equal(`Female `);
        // Check full text
        expect(wrapper.find('.editor-content').text()).to.contains('Test Name  is a  49  year old  Female  coming in for follow up.')
    });

    it.only('In pre-encounter mode, clicking the "New Note" button clears the editor content', () => {
        let patient = new PatientRecord(hardCodedPatient);
        const contextManager = new ContextManager(patient, () => {});
        const structuredFieldMapManager = new StructuredFieldMapManager();
        const shortcutManager = new ShortcutManager();

        // Mock function to create a new shortcut and set text on shortcut. Allows Editor to update correctly.
        let mockNewCurrentShortcut = (shortcutC, shortcutType, shortcutData, updatePatient = true) => {
            let newShortcut = shortcutManager.createShortcut(shortcutC, shortcutType, {}, shortcutData, this.handleShortcutUpdate);
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
            documentText={''}
            errors={[]}
            handleSummaryItemSelected={jest.fn()}
            itemInserted={jest.fn()}
            loginUser={''}
            noteClosed={false}
            setDocumentText={jest.fn()}
            setFullAppStateWithCallback={jest.fn()}
            setLayout={jest.fn()}
            setOpenClinicalNote={jest.fn()}
            setNoteClosed={jest.fn()}
            setNoteViewerEditable={jest.fn()}
            setNoteViewerVisible={jest.fn()}
            setSearchSelectedItem={jest.fn()}
            summaryItemToInsert={''}
            updateErrors={jest.fn()}
        />);
        expect(notesPanelWrapper).to.have.lengthOf(1);
        expect(notesPanelWrapper.find(FluxNotesEditor)).to.have.lengthOf(1);
        notesPanelWrapper.setState({ updatedEditorNote: { content: '@name' } });

        expect(notesPanelWrapper.find('.structured-field')).to.have.length(1);
        expect(notesPanelWrapper.find('.structured-field').text()).to.contain(patient.getName());

        // clinical notes button is selected
        const clinicalNotesButton = notesPanelWrapper.find('#notes-btn');
        expect(clinicalNotesButton.exists()).to.equal(true);
        clinicalNotesButton.at(0).props().onClick();
        notesPanelWrapper.update();
        
        // Click on new note button to open the editor
        const newNoteButton = notesPanelWrapper.find('.note-new');
        newNoteButton.at(0).props().onClick();
        notesPanelWrapper.update();

        //expect(notesPanelWrapper.find('.structured-field')).to.have.length(0);
        expect(notesPanelWrapper.find('[contenteditable=false]').at(0).text()).
            to.contain("Enter your clinical note here or choose a template to start from...");
    });    

    it('renders notes panel and typing an inserterShortcut in the editor results in a structured data insertion', () => {
        let patient = new PatientRecord(hardCodedPatient);
        const contextManager = new ContextManager(patient, () => {});
        const structuredFieldMapManager = new StructuredFieldMapManager();
        const shortcutManager = new ShortcutManager();

        // Mock function to create a new shortcut and set text on shortcut. Allows Editor to update correctly.
        let mockNewCurrentShortcut = (shortcutC, shortcutType, shortcutData, updatePatient = true) => {
            let newShortcut = shortcutManager.createShortcut(shortcutC, shortcutType, {}, shortcutData, this.handleShortcutUpdate);
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
            documentText={''}
            errors={[]}
            handleSummaryItemSelected={jest.fn()}
            itemInserted={jest.fn()}
            loginUser={''}
            noteClosed={false}
            setDocumentText={jest.fn()}
            setFullAppStateWithCallback={jest.fn()}
            setLayout={jest.fn()}
            setOpenClinicalNote={jest.fn()}
            setNoteClosed={jest.fn()}
            setNoteViewerEditable={jest.fn()}
            setNoteViewerVisible={jest.fn()}
            setSearchSelectedItem={jest.fn()}
            summaryItemToInsert={''}
            updateErrors={jest.fn()}
        />);
        expect(notesPanelWrapper).to.have.lengthOf(1);
        expect(notesPanelWrapper.find(FluxNotesEditor)).to.have.lengthOf(1);
        notesPanelWrapper.setState({ updatedEditorNote: { content: '@name' } });

        expect(notesPanelWrapper.find('.structured-field')).to.have.length(1);
        expect(notesPanelWrapper.find('.structured-field').text()).to.contain(patient.getName());
    });

    it('renders notes panel, clicking "@condition" and choosing "Invasive ductal carcinoma of breast" creates a new condition section in the context tray and adds structured data.', () => {
        let patient = new PatientRecord(hardCodedPatient);
        const contextManager = new ContextManager(patient, () => {});
        const structuredFieldMapManager = new StructuredFieldMapManager();
        const shortcutManager = new ShortcutManager();

        // Mock function to create a new shortcut and set text on shortcut. Allows Editor to update correctly.
        let mockNewCurrentShortcut = (shortcutC, shortcutType, shortcutData, updatePatient = true) => {
            let newShortcut = shortcutManager.createShortcut(shortcutC, shortcutType, {}, shortcutData, this.handleShortcutUpdate);
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
            documentText={''}
            errors={[]}
            handleSummaryItemSelected={jest.fn()}
            itemInserted={jest.fn()}
            loginUser={''}
            noteClosed={false}
            setDocumentText={jest.fn()}
            setDocumentTextWithCallback={jest.fn()}
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
        />);
        expect(notesPanelWrapper.find(FluxNotesEditor)).to.have.lengthOf(1);
        expect(notesPanelWrapper.find(NoteAssistant)).to.have.lengthOf(1);

        const contextPanelElements = notesPanelWrapper.find('.context-options-list .context-option');
        const conditionButton = contextPanelElements.find({ children: '@condition' });
        expect(conditionButton).to.have.lengthOf(1);
        conditionButton.simulate('click');

        const optionsForm = notesPanelWrapper.find('#pickList-options-panel').find('.option-btn').find('span');
        const invasiveButton = optionsForm.find({ children: 'Invasive ductal carcinoma of breast 13 JAN 2012' });
        expect(invasiveButton).to.have.lengthOf(1);
        invasiveButton.simulate('click');

        const conditionSection = notesPanelWrapper.find('.context-tray').find('div').find('[title="Invasive ductal carcinoma of breast"]');
        expect(conditionSection).to.have.lengthOf(1);

        expect(notesPanelWrapper.find('.structured-field')).to.have.length(1);
        expect(notesPanelWrapper.find('.structured-field').text()).to.contain('Invasive ductal carcinoma of breast');
    });    
    
    it('captures staging data using singleKeywordHashtag method', () => {
        // Set up Managers that are needed by FluxNotesEditor
        let patient = new PatientRecord(hardCodedPatient);
        const contextManager = new ContextManager(patient, () => {});
        const shortcutManager = new ShortcutManager();
        const structuredFieldMapManager = new StructuredFieldMapManager();

        // Mock function to create a new shortcut and set text on shortcut. Allows Editor to update correctly.
        let mockNewCurrentShortcut = (shortcutC, shortcutType, shortcutData, updatePatient = true) => {
            let newShortcut = shortcutManager.createShortcut(shortcutC, shortcutType, {}, shortcutData, this.handleShortcutUpdate);
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
            handleUpdateEditorWithNote={jest.fn()}
            isNoteViewerVisible={true}
            isNoteViewerEditable={true}
            setFullAppState={jest.fn()}
            setFullAppStateWithCallback={jest.fn()}
            setLayout={jest.fn()}
            saveNoteUponKeypress={jest.fn()}
            shouldEditorContentUpdate={true}
            setNoteViewerEditable={jest.fn()}
            setNoteViewerVisible={jest.fn()}
        />);
        expect(wrapper).to.exist;
        // wrapper.find('.editor-content').simulate('click'); //goes into on change

        // let noteContent = ' #staging t2 n2 m1';
        const arrayOfStructuredDataToEnter = ["@condition[[Invasive ductal carcinoma of breast]] ", "#staging ", "t2 ", "n2 ", "m1 "]
        const arrayOfExpectedStructuredData = ["Invasive ductal carcinoma of breast ", "#staging ", "t2 ", "n2 ", "m1 "]
        const updatedEditorNote = { content: arrayOfStructuredDataToEnter.join(' ') };
        // Set updatedEditorNote props because this triggers that a change is coming in to the editor and inserts text with structured phrases.
        wrapper.setProps({ updatedEditorNote });

        // Check structured phrases
        const structuredField = wrapper.find('.structured-field');
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

    it('Switches contexts without closing a context chooses the correct parent context and successfully enters information in editor', () => {
        // Set up Managers that are needed by FluxNotesEditor
        let patient = new PatientRecord(hardCodedPatient);
        const contextManager = new ContextManager(patient, () => {});
        const shortcutManager = new ShortcutManager();
        const structuredFieldMapManager = new StructuredFieldMapManager();

        // Mock function to create a new shortcut and set text on shortcut. Allows Editor to update correctly.
        let mockNewCurrentShortcut = (shortcutC, shortcutType, shortcutData, updatePatient = true) => {
            let newShortcut = shortcutManager.createShortcut(shortcutC, shortcutType, {}, shortcutData, this.handleShortcutUpdate);
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
            handleUpdateEditorWithNote={jest.fn()}
            isNoteViewerVisible={true}
            isNoteViewerEditable={true}
            setFullAppState={jest.fn()}
            setFullAppStateWithCallback={jest.fn()}
            setLayout={jest.fn()}
            saveNoteUponKeypress={jest.fn()}
            shouldEditorContentUpdate={true}
            setNoteViewerEditable={jest.fn()}
            setNoteViewerVisible={jest.fn()}
        />);
        expect(wrapper).to.exist;
        // wrapper.find('.editor-content').simulate('click'); //goes into on change

        // let noteContent = ' #staging t2 n2 m1';
        const arrayOfShortcutText = ["@condition[[Invasive ductal carcinoma of breast]] ", "#toxicity ", "#nausea ", "#disease status ", "#imaging "];
        const arrayOfParsedShortcutText = ["Invasive ductal carcinoma of breast ", "#toxicity ", "#nausea ", "#disease status ", "#imaging "]
        const updatedEditorNote = { content: arrayOfShortcutText.join(' ') };
        // Set updatedEditorNote props because this triggers that a change is coming in to the editor and inserts text with structured phrases.
        wrapper.setProps({ updatedEditorNote });

        // Check structured phrases
        const structuredField = wrapper.find('.structured-field');
        expect(structuredField).to.have.lengthOf(arrayOfParsedShortcutText.length)
        for (let index = 0; index < arrayOfParsedShortcutText.length; index++) {
            expect(structuredField.at(index).text()).to.contain(arrayOfParsedShortcutText[index]);
        }
        // Check full text
        const editorContent = wrapper.find('.editor-content');
        for (let index = 0; index < arrayOfParsedShortcutText.length; index++) {
            expect(editorContent.text()).to.contain(arrayOfParsedShortcutText[index]);
        }
    });
});
