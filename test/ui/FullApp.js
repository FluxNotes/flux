import { Selector } from 'testcafe';
import hardCodedPatient from '../../src/dataaccess/HardCodedPatient.json';
import PatientRecord from '../../src/patient/PatientRecord.jsx';
import moment from 'moment';

const pageDomain = "http://localhost";
const pagePort = "3000";
const pageRoute = "/patient"
const startPage = `${pageDomain}:${pagePort}${pageRoute}`;

fixture('Patient Mode - Patient Control Panel')
    .page(startPage);

test('Clicking event buttons selects corresponding event', async t => {
    const clinicalEventSelector = Selector('.clinical-event-select');

    // Post-encounter is pre-selected
    await t
        .expect(await clinicalEventSelector.textContent)
        .eql('Post-encounter');

    // Clicking Encounter choice selects it
    await t
        .click(clinicalEventSelector)
        .click(Selector('[data-test-clinical-event-selector-item="Encounter"]'));
    await t
        .expect(await clinicalEventSelector.textContent)
        .eql("Encounter");

    // Clicking Pre-encounter choice selects it and the editor is not rendered
    await t
        .click(clinicalEventSelector)
        .click(Selector('[data-test-clinical-event-selector-item="Pre-encounter"]'));
    await t
        .expect(await clinicalEventSelector.textContent)
        .eql("Pre-encounter")
        .expect(Selector('#clinical-notes').exists)
        .notOk();
    
    // Clicking Post-encounter choice selects it and the editor is rendered
    await t
        .click(clinicalEventSelector)
        .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));
    await t
        .expect(await clinicalEventSelector.textContent)
        .eql("Post-encounter")
        .expect(Selector('#clinical-notes').exists)
        .ok();
});

test('Selecting a condition changes the active condition', async t => {
    const conditionSelector = Selector('.condition-select');

    // first condition is selected by default
    await t
        .expect(await conditionSelector.textContent)
        .eql("Invasive ductal carcinoma of breast");

    // clicking on Fracture changes the condition
    await t
        .click(conditionSelector)
        .click(Selector('[data-test-condition-selector-item=Fracture]'));

    await t
        .expect(await conditionSelector.textContent)
        .eql("Fracture");

    const conditionName = Selector('[data-test-summary-section="Current Diagnosis"] [data-test-summary-item="Name"]')

    await t
        .expect(await conditionName.textContent)
        .eql("Fracture");
});

test('Clicking "New Note" button in pre-encounter mode changes layout and displays the note editor', async t => {
    const clinicalEventSelector = Selector('.clinical-event-select');
    const editor = Selector("div[data-slate-editor='true']");
    const newNoteButton = Selector('.note-new');

    // Select pre-encounter mode
    await t
        .click(clinicalEventSelector)
        .click(Selector('[data-test-clinical-event-selector-item="Pre-encounter"]'));

    // Click on new note button to open the editor
    await t
        .click(newNoteButton)

    await t
        .expect(editor.exists).ok();
});

fixture('Patient Mode - Editor')
    .page(startPage);

test('Clicking clinical notes in Note Assistance switches view to clinical notes', async t => {

    const clinicalNotesButton = Selector('.clinical-notes-btn');
    const newNoteButton = Selector('.note-new');

    // clinical notes button is selected
    await t
        .click(clinicalNotesButton)

    const buttonText = await newNoteButton.textContent;

    await t
        .expect(buttonText.toString().toLowerCase())
        .eql("new note");
});

test('In post-encounter mode, clicking the "New Note" button clears the editor content', async t => {
    const editor = Selector("div[data-slate-editor='true']");
    const clinicalNotesButton = Selector('.clinical-notes-btn');
    const newNoteButton = Selector('.note-new');

    // Enter some text in the editor
    await t
        .typeText(editor, "@name ")

    // Switch to clinical notes view
    await t
        .click(clinicalNotesButton)

    // Click on new note button
    await t
        .click(newNoteButton)

    await t
        .expect(editor.textContent)
        .eql("Enter your clinical note here or choose a template to start from...");
});

test('In pre-encounter mode, clicking the "New Note" button clears the editor content', async t => {
    const clinicalEventSelector = Selector('.clinical-event-select');
    const editor = Selector("div[data-slate-editor='true']");
    const clinicalNotesButton = Selector('.clinical-notes-btn');
    const newNoteButton = Selector('.note-new');

    // Select pre-encounter mode
    await t
        .click(clinicalEventSelector)
        .click(Selector('[data-test-clinical-event-selector-item="Pre-encounter"]'));

    // Click on new note button to open the editor
    await t
        .click(newNoteButton)

    // Enter some text in the editor
    await t
        .typeText(editor, "@name ")

    // Switch to clinical notes view
    await t
        .click(clinicalNotesButton)

    // Click on new note button to clear the editor
    await t
        .click(newNoteButton)

    await t
        .expect(editor.textContent)
        .eql("Enter your clinical note here or choose a template to start from...");
});



test('Typing an inserterShortcut in the editor results in a structured data insertion ', async t => {
    const editor = Selector("div[data-slate-editor='true']");
    await t
        .typeText(editor, "@name ")
    const structuredField = editor.find("span[class='structured-field']");
    await t
        .expect(structuredField.innerText)
        .contains(new PatientRecord(hardCodedPatient).getName());
});

test('Typing a date in the editor results in a structured data insertion ', async t => {
    const editor = Selector("div[data-slate-editor='true']");
    await t
        .typeText(editor, "#12/20/2015 ")
    const structuredField = editor.find("span[class='structured-field']");
    await t
        .expect(structuredField.innerText)
        .contains("#12/20/2015");
});

test('Typing "#clinical" and selecting "clinical trial" from the portal in the editor results \
in a structured data insertion and the conext panel updates', async t => {
    const editor = Selector("div[data-slate-editor='true']");
    await t
        .typeText(editor, "#clinical");
    const correctSuggestion = Selector(".suggestion-portal").find('li').withText('clinical trial');
    await t
        .click(correctSuggestion);
    const structuredField = editor.find("span[class='structured-field']");
    await t
        .expect(structuredField.innerText)
        .contains('#clinical trial');
    const contextPanelElements = Selector(".context-options-list").find('button');
    const count = await contextPanelElements.count;
    const clinicalTrialChildren = ['#PATINA', '#TITLE', '#ENROLLED ON', '#ENDED ON'];
    for (let i = 0; i < count; i++) {
        let contextPanelElementInnerText = await contextPanelElements.nth(i).innerText;
        let contextPanelElementsUpper = contextPanelElementInnerText.toUpperCase();
        await t
            .expect(contextPanelElementsUpper)
            .contains(clinicalTrialChildren[i]);
    }
});

test("Typing '#deceased' in the editor results in a structured data insertion and the context panel updates", async t => {
    const editor = Selector("div[data-slate-editor='true']");
    await t
        .typeText(editor, "#deceased ");
    const structuredField = editor.find("span[class='structured-field']");
    await t
        .expect(structuredField.innerText)
        .contains('#deceased');
    const contextPanelElement = Selector(".context-options-list").find('button');

    const deceasedChild = '#DATE';
    const contextPanelElementInnerText = await contextPanelElement.innerText;
    const contextPanelElementUpper = contextPanelElementInnerText.toUpperCase();

    await t
        .expect(contextPanelElementUpper)
        .contains(deceasedChild);
});

test("Switching contexts without closing a context chooses the correct parent context and successfully enters information in editor", async t => {
    const editor = Selector("div[data-slate-editor='true']");
    const contextPanelElements = Selector(".context-options-list").find('button');
    const structuredField = editor.find("span[class='structured-field']");
    const conditionButton = await contextPanelElements.withText(/@condition/ig);
    const textToType = ["#toxicity ", "#nausea ", "#staging ", "#T0 "];
    
    await t
        .click(conditionButton);
    let correctCondition = Selector(".context-portal").find('li').withText('Invasive ductal carcinoma of breast');
    await t
        .click(correctCondition)
        .typeText(editor, ' ');
    for (let i = 0; i < textToType.length; i++) {
        await t 
            .typeText(editor, textToType[i]);
    };
    

    textToType.splice(0, 0, 'condition placeholder');
    const structuredFieldCount = await structuredField.count;
    for (let i = 1; i < structuredFieldCount; i++) {
        await t
            .expect(structuredField.nth(i).innerText)
            .contains(textToType[i]);
    }
});

test("Typing #PR into the editor followed by #Positive results in structured data insertion and context panel updates", async t => {
    const editor = Selector("div[data-slate-editor='true']");
    const contextPanelElements = Selector(".context-options-list").find('button');
    const structuredField = editor.find("span[class='structured-field']");
    const conditionButton = await contextPanelElements.withText(/@condition/ig);
    const textToType = ["#PR ", "#Positive "];
    
    await t
        .click(conditionButton);
    let correctCondition = Selector(".context-portal").find('li').withText('Invasive ductal carcinoma of breast');
    await t
        .click(correctCondition)
        .typeText(editor, ' ');
    for (let i = 0; i < textToType.length; i++) {
        await t 
            .typeText(editor, textToType[i]);
    };
    

    textToType.splice(0, 0, 'condition placeholder');
    const structuredFieldCount = await structuredField.count;
    for (let i = 1; i < structuredFieldCount; i++) {
        await t
            .expect(structuredField.nth(i).innerText)
            .contains(textToType[i]);
    }
});

test("Typing #HER2 into the editor followed by #Positive results in structured data insertion and context panel updates", async t => {
    const editor = Selector("div[data-slate-editor='true']");
    const contextPanelElements = Selector(".context-options-list").find('button');
    const structuredField = editor.find("span[class='structured-field']");
    const conditionButton = await contextPanelElements.withText(/@condition/ig);
    const textToType = ["#HER2 ", "#Positive "];
    
    await t
        .click(conditionButton);
    let correctCondition = Selector(".context-portal").find('li').withText('Invasive ductal carcinoma of breast');
    await t
        .click(correctCondition)
        .typeText(editor, ' ');
    for (let i = 0; i < textToType.length; i++) {
        await t 
            .typeText(editor, textToType[i]);
    };
    

    textToType.splice(0, 0, 'condition placeholder');
    const structuredFieldCount = await structuredField.count;
    for (let i = 1; i < structuredFieldCount; i++) {
        await t
            .expect(structuredField.nth(i).innerText)
            .contains(textToType[i]);
    }
});

test("Typing #ER into the editor followed by #Positive results in structured data insertsion and context panel updates", async t => {
    const editor = Selector("div[data-slate-editor='true']");
    const contextPanelElements = Selector(".context-options-list").find('button');
    const structuredField = editor.find("span[class='structured-field']");
    const conditionButton = await contextPanelElements.withText(/@condition/ig);
    const textToType = ["#ER ", "#Positive "];
    
    await t
        .click(conditionButton);
    let correctCondition = Selector(".context-portal").find('li').withText('Invasive ductal carcinoma of breast');
    await t
        .click(correctCondition)
        .typeText(editor, ' ');
    for (let i = 0; i < textToType.length; i++) {
        await t 
            .typeText(editor, textToType[i]);
    };
    
    // We will skip checking for the inserted condition. Add a placeholder so indexes line up.
    textToType.splice(0, 0, 'condition placeholder');
    const structuredFieldCount = await structuredField.count;
    for (let i = 1; i < structuredFieldCount; i++) {
        await t
            .expect(structuredField.nth(i).innerText)
            .contains(textToType[i]);
    }
});

fixture('Patient Mode - Context Panel')
    .page(startPage);

test('Clicking "#clinical trial", "#enrollment date", "#date" and choosing a date inserts "#clinical trial #enrolled on #{date chosen}"', async t => {
    const today = new moment().format('MM/DD/YYYY');
    const expectedText = ["#clinical trial", "#enrolled on", `#${today}`];
    const editor = Selector("div[data-slate-editor='true']");
    const structuredField = editor.find("span[class='structured-field']");
    const contextPanelElements = Selector(".context-options-list").find('button');
    const clinicalTrialButton = await contextPanelElements.withText(/#clinical trial/ig);

    await t
        .click(clinicalTrialButton);
    const enrolledOnButton = await contextPanelElements.withText(/#enrolled on/ig);
    await t
        .click(enrolledOnButton);
    const dateButton = await contextPanelElements.withText(/#date/ig);
    await t
        .click(dateButton)
        .pressKey('enter');

    const structuredFieldCount = await structuredField.count;
    for (let i = 0; i < structuredFieldCount; i++) {
        await t
            .expect(structuredField.nth(i).innerText)
            .contains(expectedText[i]);
    }
});

test('Clicking "#deceased", "#date" and choosing a date inserts "#deceased #{date chosen}"', async t => {
    const today = new moment().format('MM/DD/YYYY');
    const expectedText = ["#deceased", `#${today}`];
    const editor = Selector("div[data-slate-editor='true']");
    const structuredField = editor.find("span[class='structured-field']");
    const contextPanelElements = Selector(".context-options-list").find('button');

    const deceasedButton = await contextPanelElements.withText(/#deceased/ig);

    await t
        .click(deceasedButton);
    const dateButton = await contextPanelElements.withText(/#date/ig);
    await t
        .click(dateButton)
        .pressKey('enter');

    const structuredFieldCount = await structuredField.count;
    for (let i = 0; i < structuredFieldCount; i++) {
        await t
            .expect(structuredField.nth(i).innerText)
            .contains(expectedText[i]);
    }
});

test('Clicking "@condition", "#disease status", "#stable", "#as of", "#date" and choosing a date inserts "Invasive ductal carcinoma of breast #disease status #Stable #as of #{date chosen}.  These actions should also create a new progression item in the timeline.', async t => {
    const today = new moment().format('MM/DD/YYYY');
    const expectedText = ["Invasive ductal carcinoma of breast", "#disease status", "#Stable", "#as of", `#${today}`];
    const progressionItemsBefore = Selector("#timeline .rct-canvas .rct-items .rct-item.progression-item");
    const expectedNumItems = await progressionItemsBefore.count + 1;
    const editor = Selector("div[data-slate-editor='true']");
    const structuredField = editor.find("span[class='structured-field']");
    const contextPanelElements = Selector(".context-options-list").find('button');
    const conditionButton = await contextPanelElements.withText(/@condition/ig);

    await t
        .click(conditionButton);
    let correctCondition = Selector(".context-portal").find('li').withText('Invasive ductal carcinoma of breast');
    await t
        .click(correctCondition);
    const diseaseStatusButton = await contextPanelElements.withText(/#disease status/ig);
    await t
        .click(diseaseStatusButton);
    const stableButton = await contextPanelElements.withText(/#stable/ig);
    await t
        .click(stableButton);
    const asOfButton = await contextPanelElements.withText(/#as of/ig);
    await t
        .click(asOfButton);
    const dateButton = await contextPanelElements.withText(/#date/ig);
    await t
        .click(dateButton)
        .pressKey('enter');

    const structuredFieldCount = await structuredField.count;
    for (let i = 0; i < structuredFieldCount; i++) {
        await t
            .expect(structuredField.nth(i).innerText)
            .contains(expectedText[i]);
    }

    const progressionItems = Selector("#timeline .rct-canvas .rct-items .rct-item.progression-item");
    const numItems = await progressionItems.count;

    // Make sure today's date is contained in one of the progressions on the timeline
    let item = "";
    let containsDate = false;
    for(let i = 0; i < numItems; i++) {
        item = progressionItems.nth(i);
        await t
            .hover(progressionItems.nth(i));

        const hoverTextItemDate = await Selector("#timeline #hover-item p");
        const dateText = await hoverTextItemDate.innerText;
        if(dateText === today.toString()) containsDate = true;
    }

    await t
        .expect(containsDate).ok("One of the progressions on the timeline should contain today's date.");
    // Assert that the number of progressions is correct
    await t
        .expect(expectedNumItems).eql(numItems, 'There should be ' + expectedNumItems + ' progression items on the timeline.');

});


fixture('Patient Mode - Clinical Notes list')
    .page(startPage);

test('Clicking New Note button adds a new in progress note to the list', async t => {
    const clinicalNotesButton = Selector('.clinical-notes-btn');
    const newNoteButton = Selector('.note-new');
    const inProgressNotes = Selector('#in-progress-note');
    
    await t
        .click(clinicalNotesButton);
    
    const inProgressNotesLength = await inProgressNotes.count;
    
    // There are no unsigned notes on the patient's record initially
    await t
        .expect(inProgressNotesLength).eql(0);
    
    await t
        .click(newNoteButton)
        .click(clinicalNotesButton)
    
    const inProgressNotesUpdatedLength = await inProgressNotes.count;
    
    // Adding a new note adds an unsigned, in-progress note
    await t
        .expect(inProgressNotesUpdatedLength).eql(inProgressNotesLength+1);
});


fixture('Patient Mode - Targeted Data Panel')
    .page(startPage);

test('Clicking to insert a captured data element results in that text pasted into the editor', async t => {
    const editor = Selector("div[data-slate-editor='true']");
    const summaryButtons = Selector("#summary-list div table .captured .button-hover")
    const numButtons = await summaryButtons.count;

    for(let i = 0; i < numButtons; i++) {
        await t
            .click(summaryButtons.nth(i))
            .expect(await editor.innerText)
            .contains(await summaryButtons.nth(i).innerText);
    }
});

test('Medications section appears in targeted data panel in pre-encounter mode only', async t => {
    const clinicalEventSelector = Selector('.clinical-event-select');

    // Clicking Post-encounter choice selects it and the editor is rendered
    await t
        .click(clinicalEventSelector)
        .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));
    await t
        .expect(await clinicalEventSelector.textContent)
        .eql("Post-encounter");

    const sections = Selector('#targeted-data-section')
    const sectionData = Selector('div#targeted-data-section');
    const numSectionsPostEncounter = await sections.count;

    // Clicking Pre-encounter choice selects it and the editor is not rendered
    await t
        .click(clinicalEventSelector)
        .click(Selector('[data-test-clinical-event-selector-item="Pre-encounter"]'));
    await t
        .expect(await clinicalEventSelector.textContent)
        .eql("Pre-encounter");
    
    const sectionsPreEncounter = Selector('#targeted-data-section')
    const sectionDataPreEncounter = Selector('div#targeted-data-section');
    const numSectionsPreEncounter = await sectionsPreEncounter.count;
    
    console.log(numSectionsPreEncounter + " is more by 1 than " + numSectionsPostEncounter);
    console.log(sectionDataPreEncounter);
    
    await t
        .expect(numSectionsPreEncounter === (numSectionsPostEncounter + 1));
});

test('Clicking the data visualization buttons changes the visualizer used', async t => {
    const sections = Selector('#targeted-data-section')
    const sectionData = Selector('div#targeted-data-section');
    const numSections = await sections.count;
    for (let i = 0; i < numSections; i++) {
        let icons = sections.nth(i).find('.right-icons button');
        let numIcons = await icons.count;
        for (let j = 0; j < numIcons; j++) {
            const iconType = await icons.nth(j).id;
            await t
                .click(icons.nth(j));
            if (iconType === 'tabular') {
                // Check that class name of section = tabular-subsections
               await t
                    .expect(sections.nth(i).find('.tabular-subsections').exists)
                    .ok();
            } else if (iconType === 'narrative'){
                // Check class name = 'narrative-subsections'
                await t
                    .expect(sections.nth(i).find('.narrative-subsections').exists)
                    .ok();
            } else if (iconType === 'graphic') {
                // Check id = 'timeline'
                await t
                    .expect(sections.nth(i).find('#timeline').exists)
                    .ok();
            }
        }
    }
});

test('Clicking the data visualization buttons changes the visualizer used', async t => {
    const sections = Selector('#targeted-data-section')
    const sectionData = Selector('div#targeted-data-section');
    const numSections = await sections.count;
    for (let i = 0; i < numSections; i++) {
        let icons = sections.nth(i).find('.right-icons button');
        let numIcons = await icons.count;
        for (let j = 0; j < numIcons; j++) {
            const iconType = await icons.nth(j).id;
            await t
                .click(icons.nth(j));
            if (iconType === 'tabular') {
                // Check that class name of section = tabular-subsections
               await t
                    .expect(sections.nth(i).find('.tabular-subsections').exists)
                    .ok();
            } else if (iconType === 'narrative'){
                // Check class name = 'narrative-subsections'
                await t
                    .expect(sections.nth(i).find('.narrative-subsections').exists)
                    .ok();
            } else if (iconType === 'graphic') {
                // Check id = 'timeline'
                await t
                    .expect(sections.nth(i).find('#timeline').exists)
                    .ok();
            }
        }
    }
});

fixture('Patient Mode - Timeline')
    .page(startPage);

test('Hovering over calendar medication items should add medication name to hover text', async t => {
    const calendarItemsTitle = Selector("#timeline .rct-canvas .rct-items .rct-item.medication-item strong");
    const numItems = await calendarItemsTitle.count;
    let itemTitle = "";

    for(let i = 0; i < numItems; i++) {
        itemTitle = calendarItemsTitle.nth(i)
        await t
            .hover(calendarItemsTitle.nth(i));

        const hoverTextItem =  await Selector("#timeline #hover-item");

        await t
            .expect(await hoverTextItem.innerText)
            .contains(await calendarItemsTitle.nth(i).innerText);
    }
});

test('Selecting a condition changes the timeline summary', async t => {
    const conditionSelector = Selector('.condition-select');

    // first condition is selected by default
    await t
        .expect(await conditionSelector.textContent)
        .eql("Invasive ductal carcinoma of breast");

    // clicking on Fracture changes the condition
    await t
        .click(conditionSelector)
        .click(Selector('[data-test-condition-selector-item=Fracture]'));

    await t
        .expect(await conditionSelector.textContent)
        .eql("Fracture");

    let progressionItems = Selector("#timeline .rct-canvas .rct-items .rct-item.progression-item");
    let numItems = await progressionItems.count;
    
    // There should be one progression item on the timeline now
    await t
        .expect(1).eql(numItems, 'There should be 1 progression item on the timeline.');

    await t
        .hover(progressionItems.nth(0));
    const hoverTextItem = await Selector("#timeline #hover-item");
    await t
        .expect(await hoverTextItem.innerText)
        .contains("Fracture");
});
