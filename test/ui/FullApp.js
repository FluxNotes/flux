import { Selector, ClientFunction } from 'testcafe';
import hardCodedPatient from '../../src/dataaccess/HardCodedPatient.json';
import PatientRecord from '../../src/patient/PatientRecord.jsx';
import '../../src/model/init';
import moment from 'moment';

const pageDomain = "http://localhost";
const pagePort = "3000";
const pageRoute = "/demo1"
const startPage = `${pageDomain}:${pagePort}${pageRoute}`;

// fixture('Patient Mode - Patient Control Panel')
//     .page(startPage);

// test('Clicking event buttons selects corresponding event', async t => {
//     const clinicalEventSelector = Selector('.clinical-event-select');

//     // Pre-encounter is pre-selected
//     await t
//         .expect(await clinicalEventSelector.textContent)
//         .eql('Pre-encounter');

//     // Clicking Encounter choice selects it
//     await t
//         .click(clinicalEventSelector)
//         .click(Selector('[data-test-clinical-event-selector-item="Encounter"]'));
//     await t
//         .expect(await clinicalEventSelector.textContent)
//         .eql("Encounter");

//     // Clicking Pre-encounter choice selects it and the editor is not rendered
//     await t
//         .click(clinicalEventSelector)
//         .click(Selector('[data-test-clinical-event-selector-item="Pre-encounter"]'));
//     await t
//         .expect(await clinicalEventSelector.textContent)
//         .eql("Pre-encounter")
//         .expect(Selector('#clinical-notes').exists)
//         .notOk();

//     // Clicking Post-encounter choice selects it and the editor is rendered
//     await t
//         .click(clinicalEventSelector)
//         .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));
//     await t
//         .expect(await clinicalEventSelector.textContent)
//         .eql("Post-encounter")
//         .expect(Selector('#clinical-notes').exists)
//         .ok();
// });

// test('Selecting a condition changes the active condition', async t => {
//     const conditionSelector = Selector('.condition-select');

//     // first condition is selected by default
//     await t
//         .expect(await conditionSelector.textContent)
//         .eql("Invasive ductal carcinoma of breast");

//     // clicking on Fracture changes the condition
//     await t
//         .click(conditionSelector)
//         .click(Selector('[data-test-condition-selector-item=Fracture]'));

//     await t
//         .expect(await conditionSelector.textContent)
//         .eql("Fracture");

//     const conditionName = Selector('[data-test-summary-section="Condition"] [data-test-summary-item="Name"]')

//     await t
//         .expect(await conditionName.textContent)
//         .eql("Fracture");
// });

// test('Clicking "New Note" button in pre-encounter mode changes layout and displays the note editor', async t => {
//     // const clinicalEventSelector = Selector('.clinical-event-select');
//     const editor = Selector("div[data-slate-editor='true']");
//     const newNoteButton = Selector('.note-new');

//     // // Select pre-encounter mode
//     // await t
//     //     .click(clinicalEventSelector)
//     //     .click(Selector('[data-test-clinical-event-selector-item="Pre-encounter"]'));

//     // Click on new note button to open the editor
//     await t
//         .click(newNoteButton)

//     await t
//         .expect(editor.exists).ok();
// });


fixture('Patient Mode - Editor')
    .page(startPage);

// test('Clicking clinical notes toggle button in Note Assistance switches view to clinical notes', async t => {
//     // const clinicalEventSelector = Selector('.clinical-event-select');
//     // await t
//     //     .click(clinicalEventSelector)
//     //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));
//     const clinicalNotesButton = Selector('#notes-btn');
//     const newNoteButton = Selector('.note-new');

//     // clinical notes button is selected
//     await t
//         .click(clinicalNotesButton)

//     const buttonText = await newNoteButton.textContent;

//     await t
//         .expect(buttonText.toString().toLowerCase())
//         .eql("new note");
// });

// test('Clicking context toggle button in Note Assistance switches view to context tray', async t=> {
//     // const clinicalEventSelector = Selector('.clinical-event-select');
//     // await t
//     //     .click(clinicalEventSelector)
//     //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));

//     const clinicalNotesButton = Selector('#notes-btn');
//     const contextButton = Selector('#context-btn');
//     const contextTray = Selector('.context-tray');

//     // Mimic post-encounter view
//     const newNoteButton = Selector('.note-new');
//     await t
//         .click(newNoteButton)

//     // Select clinical notes
//     await t
//         .click(clinicalNotesButton)

//     // Select context button
//     await t
//         .click(contextButton)

//     await t
//         .expect(contextTray.exists)
//         .ok()
// });


// test('In post-encounter mode, clicking the "New Note" button clears the editor content', async t => {
//     const clinicalEventSelector = Selector('.clinical-event-select');
//     await t
//         .click(clinicalEventSelector)
//         .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));
//     const editor = Selector("div[data-slate-editor='true']");
//     const clinicalNotesButton = Selector('#notes-btn');
//     const newNoteButton = Selector('.note-new');

//     // Enter some text in the editor
//     await t
//         .typeText(editor, "@name ")

//     // Switch to clinical notes view
//     await t
//         .click(clinicalNotesButton)

//     // Click on new note button
//     await t
//         .click(newNoteButton)

//     await t
//         .expect(editor.textContent)
//         .eql("Enter your clinical note here or choose a template to start from...");
// });

test('In pre-encounter mode, clicking the "New Note" button clears the editor content', async t => {
    // const clinicalEventSelector = Selector('.clinical-event-select');
    const editor = Selector("div[data-slate-editor='true']");
    const clinicalNotesButton = Selector('#notes-btn');
    const newNoteButton = Selector('.note-new');

    // // Select pre-encounter mode
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Pre-encounter"]'));

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

// test('Typing an inserterShortcut that is not currently valid in the editor does not result in a structured data insertion ', async t => {
//     // const clinicalEventSelector = Selector('.clinical-event-select');
//     // await t
//     //     .click(clinicalEventSelector)
//     //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));

//     // Mimic post-encounter view
//     const newNoteButton = Selector('.note-new');
//     await t
//         .click(newNoteButton)

//     const editor = Selector("div[data-slate-editor='true']");
//     await t
//         .typeText(editor, "#imaging")

//     const structuredField = editor.find("span[class='structured-field']");
//     await t
//         .expect(structuredField.exists).notOk();
// });

// test('Typing a date in the editor results in a structured data insertion ', async t => {
//     // const clinicalEventSelector = Selector('.clinical-event-select');
//     // await t
//     //     .click(clinicalEventSelector)
//     //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));

//     // Mimic post-encounter view
//     const newNoteButton = Selector('.note-new');
//     await t
//         .click(newNoteButton)

//     const editor = Selector("div[data-slate-editor='true']");
//     await t
//         .typeText(editor, "#12/20/2015 ")

//     const structuredField = editor.find("span[class='structured-field']");
//     await t
//         .expect(structuredField.innerText)
//         .contains("#12/20/2015");
// });

test('Typing "#enroll" and selecting "enrollment" from the portal in the editor results \
in a structured data insertion and the context panel updates', async t => {
    // const clinicalEventSelector = Selector('.clinical-event-select');
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));

    // Mimic post-encounter view
    const newNoteButton = Selector('.note-new');
    await t
        .click(newNoteButton)

    const editor = Selector("div[data-slate-editor='true']");
    await t
        .typeText(editor, "#enroll");

    const correctSuggestion = Selector(".suggestion-portal").find('li').withText('enrollment');
    await t
        .click(correctSuggestion);

    const structuredField = editor.find("span[class='structured-field']");
    await t
        .expect(structuredField.innerText)
        .contains('#enrollment');

    const contextPanelElements = Selector(".context-options-list").find('button');
    const count = await contextPanelElements.count;
    const clinicalTrialChildren = ['#PATINA', '#TITLE'];
    for (let i = 0; i < count; i++) {
        let contextPanelElementInnerText = await contextPanelElements.nth(i).innerText;
        let contextPanelElementsUpper = contextPanelElementInnerText.toUpperCase();
        await t
            .expect(contextPanelElementsUpper)
            .contains(clinicalTrialChildren[i]);
    }
});

test('Typing "#unen" and selecting "unenrolled" from the portal in the editor results \
in a structured data insertion and the context panel updates', async t => {
    // const clinicalEventSelector = Selector('.clinical-event-select');
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));

    // Mimic post-encounter view
    const newNoteButton = Selector('.note-new');
    await t
        .click(newNoteButton)

    const editor = Selector("div[data-slate-editor='true']");
    await t
        .typeText(editor, "#unen");

    const correctSuggestion = Selector(".suggestion-portal").find('li').withText('unenrolled');
    await t
        .click(correctSuggestion);

    const structuredField = editor.find("span[class='structured-field']");
    await t
        .expect(structuredField.innerText)
        .contains('#unenrolled');

    const contextPanelElements = Selector(".context-options-list").find('button');
    const count = await contextPanelElements.count;
    const clinicalTrialChildren = ['#PATINA', '#TITLE'];
    for (let i = 0; i < count; i++) {
        let contextPanelElementInnerText = await contextPanelElements.nth(i).innerText;
        let contextPanelElementsUpper = contextPanelElementInnerText.toUpperCase();
        await t
            .expect(contextPanelElementsUpper)
            .contains(clinicalTrialChildren[i]);
    }
});


// test("Typing '#deceased' in the editor results in a structured data insertion and the context panel updates", async t => {
//     // const clinicalEventSelector = Selector('.clinical-event-select');
//     // await t
//     //     .click(clinicalEventSelector)
//     //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));

//     // Mimic post-encounter view
//     const newNoteButton = Selector('.note-new');
//     await t
//         .click(newNoteButton)

//     const editor = Selector("div[data-slate-editor='true']");
//     await t
//         .typeText(editor, "#deceased ");

//     const structuredField = editor.find("span[class='structured-field']");
//     await t
//         .expect(structuredField.innerText)
//         .contains('#deceased');

//     const contextPanelElement = Selector('.context-tray section:last-child .context-option');
//     const deceasedChild = '#DATE';
//     const contextPanelElementInnerText = await contextPanelElement.innerText;
//     const contextPanelElementUpper = contextPanelElementInnerText.toUpperCase();
//     await t
//         .expect(contextPanelElementUpper)
//         .contains(deceasedChild);
// });

// test("Typing #PR into the editor followed by #Positive results in structured data insertion and context panel updates", async t => {
//     // const clinicalEventSelector = Selector('.clinical-event-select');
//     // await t
//     //     .click(clinicalEventSelector)
//     //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));

//     // Mimic post-encounter view
//     const newNoteButton = Selector('.note-new');
//     await t
//         .click(newNoteButton)

//     const editor = Selector("div[data-slate-editor='true']");
//     const contextPanelElements = Selector(".context-options-list").find('.context-option');
//     const structuredField = editor.find("span[class='structured-field']");
//     const conditionButton = await contextPanelElements.withText(/@condition/ig);
//     const textToType = ["#PR ", "#Positive "];

//     await t
//         .click(conditionButton);

//     const optionsForm = Selector("#pickList-options-panel").find(".option-btn");
//     const invasiveButton = await optionsForm.withText(/Invasive ductal carcinoma of breast/ig);

//     await t
//         .click(invasiveButton);

//     for (let i = 0; i < textToType.length; i++) {
//         await t
//             .typeText(editor, textToType[i]);
//     };

//     textToType.splice(0, 0, 'condition placeholder');
//     const structuredFieldCount = await structuredField.count;
//     for (let i = 1; i < structuredFieldCount; i++) {
//         await t
//             .expect(structuredField.nth(i).innerText)
//             .contains(textToType[i]);
//     }
// });

// test("Typing #HER2 into the editor followed by #Positive results in structured data insertion and context panel updates", async t => {
//     // const clinicalEventSelector = Selector('.clinical-event-select');
//     // await t
//     //     .click(clinicalEventSelector)
//     //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));

//     // Mimic post-encounter view
//     const newNoteButton = Selector('.note-new');
//     await t
//         .click(newNoteButton)

//     const editor = Selector("div[data-slate-editor='true']");
//     const contextPanelElements = Selector(".context-options-list").find('.context-option');
//     const structuredField = editor.find("span[class='structured-field']");
//     const conditionButton = await contextPanelElements.withText(/@condition/ig);
//     const textToType = ["#HER2 ", "#Positive "];

//     await t
//         .click(conditionButton);

//     const optionsForm = Selector("#pickList-options-panel").find(".option-btn");
//     const invasiveButton = await optionsForm.withText(/Invasive ductal carcinoma of breast/ig);

//     await t
//         .click(invasiveButton);

//     for (let i = 0; i < textToType.length; i++) {
//         await t
//             .typeText(editor, textToType[i]);
//     };

//     textToType.splice(0, 0, 'condition placeholder');
//     const structuredFieldCount = await structuredField.count;
//     for (let i = 1; i < structuredFieldCount; i++) {
//         await t
//             .expect(structuredField.nth(i).innerText)
//             .contains(textToType[i]);
//     }
// });

// test("Typing #ER into the editor followed by #Positive results in structured data insertsion and context panel updates", async t => {
//     // const clinicalEventSelector = Selector('.clinical-event-select');
//     // await t
//     //     .click(clinicalEventSelector)
//     //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));

//     // Mimic post-encounter view
//     const newNoteButton = Selector('.note-new');
//     await t
//         .click(newNoteButton)

//     const editor = Selector("div[data-slate-editor='true']");
//     const contextPanelElements = Selector(".context-options-list").find('.context-option');
//     const structuredField = editor.find("span[class='structured-field']");
//     const conditionButton = await contextPanelElements.withText(/@condition/ig);
//     const textToType = ["#ER ", "#Positive "];

//     await t
//         .click(conditionButton);

//     const optionsForm = Selector("#pickList-options-panel").find(".option-btn");
//     const invasiveButton = await optionsForm.withText(/Invasive ductal carcinoma of breast/ig);

//     await t
//         .click(invasiveButton);

//     for (let i = 0; i < textToType.length; i++) {
//         await t
//             .typeText(editor, textToType[i]);
//     };

//     // We will skip checking for the inserted condition. Add a placeholder so indexes line up.
//     textToType.splice(0, 0, 'condition placeholder');
//     const structuredFieldCount = await structuredField.count;
//     for (let i = 1; i < structuredFieldCount; i++) {
//         await t
//             .expect(structuredField.nth(i).innerText)
//             .contains(textToType[i]);
//     }
// });


// TODO: Nicole
fixture('Patient Mode - Context Panel')
    .page(startPage);

test('Clicking "#enrollment", "#date" and choosing a date inserts "#enrollment #{date chosen}"', async t => {
    // const clinicalEventSelector = Selector('.clinical-event-select');
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));

    // Mimic post-encounter view
    const newNoteButton = Selector('.note-new');
    await t
        .click(newNoteButton)

    const today = new moment().format('MM/DD/YYYY');
    const expectedText = ["#enrollment", `#${today}`];
    const editor = Selector("div[data-slate-editor='true']");
    const structuredField = editor.find("span[class='structured-field']");
    const contextPanelElements = Selector(".context-options-list").find('.context-option');
    const sectionItemElements = Selector('.context-tray').find('.view-mode-section-item');
    const shortcutsButton = await sectionItemElements.withText(/SHORTCUTS/g);
    const clinicalTrialButton = await contextPanelElements.withText(/#enrollment/ig);

    // Click on shortcuts
    await t
        .click(shortcutsButton);

    // In shortcuts, click on #enrollment 
    await t
        .click(clinicalTrialButton);

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

test('Clicking "#unenrolled", "#date" and choosing a date inserts "#unenrolled #{date chosen}"', async t => {
    // const clinicalEventSelector = Selector('.clinical-event-select');
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));

    // Mimic post-encounter view
    const newNoteButton = Selector('.note-new');
    await t
        .click(newNoteButton)

    const today = new moment().format('MM/DD/YYYY');
    const expectedText = ["#unenrolled", `#${today}`];
    const editor = Selector("div[data-slate-editor='true']");
    const structuredField = editor.find("span[class='structured-field']");
    const contextPanelElements = Selector(".context-options-list").find('.context-option');
    const clinicalTrialButton = await contextPanelElements.withText(/#unenrolled/ig);

    await t
        .click(clinicalTrialButton);

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
    // const clinicalEventSelector = Selector('.clinical-event-select');
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));

    // Mimic post-encounter view
    const newNoteButton = Selector('.note-new');
    await t
        .click(newNoteButton)

    const today = new moment().format('MM/DD/YYYY');
    const expectedText = ["#deceased", `#${today}`];
    const editor = Selector("div[data-slate-editor='true']");
    const structuredField = editor.find("span[class='structured-field']");
    const contextPanelElements = Selector(".context-options-list").find('.context-option');
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
    // const clinicalEventSelector = Selector('.clinical-event-select');
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));

    // Mimic post-encounter view
    const newNoteButton = Selector('.note-new');
    await t
        .click(newNoteButton)

    const today = moment().format('MM/DD/YYYY');
    const expectedText = ["Invasive ductal carcinoma of breast", "#disease status", "#Stable", "#as of", `#${today}`];
    const progressionItemsBefore = Selector("#timeline .rct-canvas .rct-items .rct-item.progression-item");
    const expectedNumItems = await progressionItemsBefore.count + 1;
    const editor = Selector("div[data-slate-editor='true']");
    const structuredField = editor.find("span[class='structured-field']");
    const contextPanelElements = Selector(".context-options-list").find('.context-option');
    const conditionButton = await contextPanelElements.withText(/@condition/ig);
    const optionsForm = Selector("#pickList-options-panel").find(".option-btn");
    const invasiveButton = await optionsForm.withText(/Invasive ductal carcinoma of breast/ig);

    await t
        .click(conditionButton);

    // Click on "Invasive..." button in the option panel
    await t
        .click(invasiveButton);

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

    // Mimic pre-encounter view
    const closeNoteButton = Selector('.close-note-btn');
    await t
        .click(closeNoteButton)

    const progressionItems = Selector("#timeline .rct-canvas .rct-items .rct-item.progression-item");
    const numItems = await progressionItems.count;

    // Make sure today's date is contained in one of the progressions on the timeline
    let containsDate = false;
    for(let i = 0; !containsDate && i < numItems; i++) {
        let item = progressionItems.nth(i);
        await t.hover(item);

        const hoverTextItemDate = await Selector("#timeline #hover-item p");
        const dateText = await hoverTextItemDate.innerText;
        containsDate = containsDate || dateText === today.toString();

        // reset the cursor position before the next iteration of the loop, otherwise fails
        await t.hover(newNoteButton);
    }

    await t
        .expect(containsDate).ok("One of the progressions on the timeline should contain today's date.");

    // Assert that the number of progressions is correct
    await t
        .expect(expectedNumItems).eql(numItems, 'There should be ' + expectedNumItems + ' progression items on the timeline.');
});

test('Clicking "@condition" and choosing "Invasive ductal carcinoma of breast" creates a new condition section in the context tray.', async t => {
    // const clinicalEventSelector = Selector('.clinical-event-select');
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));
    // Mimic post-encounter view
    const newNoteButton = Selector('.note-new');
    await t
        .click(newNoteButton)

    const editor = Selector("div[data-slate-editor='true']");
    const contextPanelElements = Selector(".context-options-list").find('.context-option');
    const conditionButton = await contextPanelElements.withText(/@condition/ig);
    const optionsForm = Selector("#pickList-options-panel").find(".option-btn");
    const invasiveButton = await optionsForm.withText(/Invasive ductal carcinoma of breast/ig);

    await t
        .click(conditionButton);

    // Click on "Invasive..." button in the option panel
    await t
        .click(invasiveButton);

    const conditionSection = Selector('.context-tray').find('div').withAttribute('title', 'Invasive ductal carcinoma of breast');
    await t
        .expect(conditionSection.exists)
        .ok();

    const conditionSectionSnapshot = await conditionSection();
    await t
        .expect(conditionSectionSnapshot.hasClass('selected'))
        .ok();
});

test('Clicking "@condition" and choosing multiple conditions does not allow user to select other conditions besides the current condition from the context tray in the condition section.', async t => {
    // const clinicalEventSelector = Selector('.clinical-event-select');
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));

    // Mimic post-encounter view
    const newNoteButton = Selector('.note-new');
    await t
        .click(newNoteButton)

    const editor = Selector("div[data-slate-editor='true']");
    const contextPanelElements = Selector('.context-options-list').find('.context-option');
    const sectionItemElements = Selector('.context-tray').find('.section-item');
    const conditionButton = await contextPanelElements.withText(/@condition/ig);
    const patientButton = await sectionItemElements.withText(/CONTEXT/g);
    const optionsForm = Selector("#pickList-options-panel").find(".option-btn");
    const fractureButton = await optionsForm.withText(/Fracture/ig);

    // Input first condition
    await t
        .click(conditionButton);

    // Click on "Invasive..." button in the option panel
    await t
        .click(fractureButton);

    // Input second condition
    await t
        .click(patientButton);

    await t
        .click(conditionButton);

    const invasiveButton = await optionsForm.withText(/Invasive ductal carcinoma of breast/ig);
    await t
        .click(invasiveButton);

    const condition1Button = await sectionItemElements.withText(/Fracture/g);

    await t
        .expect(condition1Button.exists)
        .notOk()
});

test('Not choosing an option from a portal still allows user to delete parent shortcut', async t => {
    // const clinicalEventSelector = Selector('.clinical-event-select');
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));

    // Mimic post-encounter view
    const newNoteButton = Selector('.note-new');
    await t
        .click(newNoteButton)

    const editor = Selector("div[data-slate-editor='true']");
    const structuredField = editor.find("span[class='structured-field']");
    const contextPanelElements = Selector(".context-options-list").find('.context-option');
    const clinicalTrialButton = await contextPanelElements.withText(/#enrollment/ig);

    // Select post-encounter mode
    await t
        .click(clinicalTrialButton);

    const dateButton = await contextPanelElements.withText(/#date/ig);
    await t
        .click(dateButton)
        .pressKey('esc');

    await t
        .click(editor);

    await t
        .pressKey('backspace');

    await t
        .expect(structuredField.exists)
        .notOk();
});

fixture('Patient Mode - Clinical Notes list')
    .page(startPage);

// test('Clicking New Note button adds a new in progress note to the list', async t => {
//     // const clinicalEventSelector = Selector('.clinical-event-select');
//     // await t
//     //     .click(clinicalEventSelector)
//     //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));
//     const clinicalNotesButton = Selector('#notes-btn');
//     const newNoteButton = Selector('.note-new');
//     const inProgressNotes = Selector('.in-progress-note');

//     await t
//         .click(clinicalNotesButton);

//     const inProgressNotesLength = await inProgressNotes.count;

//     // There are no unsigned notes on the patient's record initially
//     await t
//         .expect(inProgressNotesLength).eql(0);

//     await t
//         .click(newNoteButton)
//         .click(clinicalNotesButton);

//     const inProgressNotesUpdatedLength = await inProgressNotes.count;

//     // Adding a new note adds an unsigned, in-progress note
//     await t
//         .expect(inProgressNotesUpdatedLength).eql(1);
// });

test('Clicking New Note button and clicking delete-note button should have no net effect on the # of inProgressNotes', async t => {
    // const clinicalEventSelector = Selector('.clinical-event-select');
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));
    const clinicalNotesButton = Selector('#notes-btn');
    const contextTrayButton = Selector('#context-btn');
    const deleteNoteButton = Selector('#delete-note-button');
    const newNoteButton = Selector('.note-new');
    const inProgressNotes = Selector('.in-progress-note');

    await t
        .click(clinicalNotesButton);

    const inProgressNotesLength = await inProgressNotes.count;

    // There are no unsigned notes on the patient's record initially
    await t
        .expect(inProgressNotesLength).eql(0);

    // Create a new note, and delete it immediately
    await t
        .click(newNoteButton)
        .click(contextTrayButton)
        .click(deleteNoteButton)
        .click(clinicalNotesButton);

    const inProgressNotesUpdatedLength = await inProgressNotes.count;

    // Adding a new note adds an unsigned, in-progress note
    await t
        .expect(inProgressNotesUpdatedLength).eql(inProgressNotesLength);
});


test('Clicking on an existing note in post encounter mode loads the note in the editor', async t => {
    // const clinicalEventSelector = Selector('.clinical-event-select');
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));
    const editor = Selector("div[data-slate-editor='true']");
    const clinicalNotesButton = Selector('#notes-btn');
    const note = Selector('.existing-note');

    // Click on the clinical notes button to switch to clinical notes view
    await t
        .click(clinicalNotesButton);

    // Click on one of the existing notes
    await t
        .click(note)

    // Test that there is some text in the editor and that the editor is not in its initial cleared state
    await t
        .expect(editor.textContent)
        .notEql("Enter your clinical note here or choose a template to start from...");
});

test('Clicking on a note in the clinical notes view updates the information in the note header', async t =>  {
    // const clinicalEventSelector = Selector('.clinical-event-select');
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));
    const clinicalNotesButton = Selector('#notes-btn');
    const note = Selector('.existing-note');
    const noteHeaderName = Selector('#note-title').textContent;

    // Click on the clinical notes button to switch to clinical notes view
    await t
        .click(clinicalNotesButton);

    // Click on one of the existing notes
    await t
        .click(note);

    // Test that the note header name has been updated (that it doesn't equal the default text on app start)
    await t
        .expect(noteHeaderName)
        .notEql("Pathology Assessment");
});

test('Clicking on an existing note in post encounter mode puts the NotesPanel in a read only mode with the clinical notes view displayed and the context toggle button disabled', async t => {
    // const clinicalEventSelector = Selector('.clinical-event-select');
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));
    const editor = Selector("div[data-slate-editor='true']");
    const clinicalNotesButton = Selector('#notes-btn');
    const clinicalNotesPanel = Selector('.clinical-notes-panel');
    const note = Selector('.existing-note');
    const contextToggleButton = Selector('#context-btn');

    // Click on the clinical notes button to switch to clinical notes view
    await t
        .click(clinicalNotesButton);

    // Click on one of the existing notes
    await t
        .click(note)

    // Try to type random text in the editor
    await t
        .typeText(editor, "random_text")

    // Because editor is read only, expect that text cannot be entered
    await t
        .expect(editor.textContent).notContains('random_text', 'Editor content does not contain the text "random_text"');

    // Expect to see the clinical notes view (not the context tray)
    await t
        .expect(clinicalNotesPanel.exists)
        .ok()

    // Click the context button and expect to still see the clinical notes view (not the context tray)
    await t
        .click(contextToggleButton);

    await t
        .expect(clinicalNotesPanel.exists)
        .ok()
})

test('Clicking on an in-progress note in post encounter mode loads the note in the editor', async t => {
    // const clinicalEventSelector = Selector('.clinical-event-select');
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));

    // Mimic post-encounter view
    const newNoteButton = Selector('.note-new');
    await t
        .click(newNoteButton)

    const editor = Selector("div[data-slate-editor='true']");
    const clinicalNotesButton = Selector('#notes-btn');
    // const newNoteButton = Selector('.note-new');
    const inProgressNotes = Selector('.in-progress-note');

    // Enter some text in the editor
    await t
        .typeText(editor, "This is a note.");

    // Click on the clinical notes button to switch to clinical notes view
    await t
        .click(clinicalNotesButton);

    // Click on the new note button to create an in-progress note and toggle back to clinical notes view
    await t
        .click(newNoteButton)
        .click(clinicalNotesButton);

    // Click on the in-progress note
    await t
        .click(inProgressNotes)

    // Test that there is some text in the editor and that the editor is not in its initial cleared state
    await t
        .expect(editor.textContent)
        .notEql("Enter your clinical note here or choose a template to start from...");
});

test('Clicking on an existing note hides the sign note button', async t => {
    // const clinicalEventSelector = Selector('.clinical-event-select');
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));
    const clinicalNotesButton = Selector('#notes-btn');
    const note = Selector('.existing-note');
    const signButton = Selector('.btn_finish');

    // Click on the clinical notes button to switch to clinical notes view
    await t
        .click(clinicalNotesButton);

    // Click on one of the existing notes
    await t
        .click(note)

    // Check that the sign button exists
    await t
        .expect(signButton.exists)
        .notOk()
});

test('Clicking on an in-progress note shows the sign note button', async t => {
    // const clinicalEventSelector = Selector('.clinical-event-select');
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));
    const editor = Selector("div[data-slate-editor='true']");
    const clinicalNotesButton = Selector('#notes-btn');
    const newNoteButton = Selector('.note-new');
    const signButton = Selector('.btn_finish');

    // Click on the clinical notes button to switch to clinical notes view
    await t
        .click(clinicalNotesButton);

    // Click on the new note button to create an in-progress note and toggle back to clinical notes view
    await t
        .click(newNoteButton)
        .click(clinicalNotesButton);

    // Check that the sign button exists
    await t
        .expect(signButton.exists)
        .ok()
});

test('Clicking on the sign note button moves the note from in progress notes to existing notes', async t => {
    // const clinicalEventSelector = Selector('.clinical-event-select');
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));
    const clinicalNotesButton = Selector('#notes-btn');
    const newNoteButton = Selector('.note-new');
    const inProgressNotes = Selector('.in-progress-note');
    const signNoteButton = Selector('.btn_finish');

    // Click clinical notes button
    await t
        .click(clinicalNotesButton);

    // Click "New note" button
    await t
        .click(newNoteButton)
        .click(clinicalNotesButton);

    // Get the current number of in-progress notes
    const inProgressNotesLength = await inProgressNotes.count;

    // Click "Sign note" button
    await t
        .click(signNoteButton);

    // Get the updated number of in-progress notes
    const updatedInProgressNotesLength = await inProgressNotes.count;

    // There should be one less in-progress notes
    await t
        .expect(updatedInProgressNotesLength)
        .eql(inProgressNotesLength - 1);
});

test('Entering disease status information updates the data in the targeted data panel to indicate that the disease status information is unsigned', async t => {
    const newNoteButton = Selector('.note-new');
    await t
        .click(newNoteButton);

    const contextPanelElements = Selector(".context-options-list").find('.context-option');
    const conditionButton = await contextPanelElements.withText(/@condition/ig);
    const unSignedItem = Selector('.list-unsigned');

    await t
        .click(conditionButton);

    const optionsForm = Selector("#pickList-options-panel").find(".option-btn");
    const invasiveButton = await optionsForm.withText(/Invasive ductal carcinoma of breast/ig);

    await t
        .click(invasiveButton);

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

    await t
        .expect(unSignedItem.exists)
        .ok();
});

test('Clicking on the sign note button changes the unsigned data from a dotted line to a solid line', async t => {
    // const clinicalEventSelector = Selector('.clinical-event-select');
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));

    // Mimic post-encounter view
    const newNoteButton = Selector('.note-new');
    await t
        .click(newNoteButton)

    const signNoteButton = Selector('.btn_finish');
    const contextPanelElements = Selector(".context-options-list").find('.context-option');
    const conditionButton = await contextPanelElements.withText(/@condition/ig);
    const unSignedItem = Selector('.list-unsigned');

    await t
        .click(conditionButton);

    const optionsForm = Selector("#pickList-options-panel").find(".option-btn");
    const invasiveButton = await optionsForm.withText(/Invasive ductal carcinoma of breast/ig);

    await t
        .click(invasiveButton);

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

    await t
        .click(signNoteButton)

    await t
        .expect(unSignedItem.exists)
        .notOk();
});

// Verifies automatic saving
test('Contents of in-progress note saved when switching to a completed note and back', async t => {
    // const clinicalEventSelector = Selector('.clinical-event-select');
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));

    // Mimic post-encounter view
    const newNoteButton = Selector('.note-new');
    await t
        .click(newNoteButton)

    const editor = Selector("div[data-slate-editor='true']");
    const clinicalNotesButton = Selector('#notes-btn');
    const inProgressNotes = Selector('.in-progress-note');
    const note = Selector('.existing-note');

    // Enter some text in the editor
    await t
        .typeText(editor, "This is a note.");

    // Click on the clinical notes button to switch to clinical notes view
    await t
        .click(clinicalNotesButton);

    // click on a completed note to view it
    await t
        .click(note)

    // Click on the in-progress note
    await t
        .click(inProgressNotes)

    // Test that there is some text in the editor and that the editor is not in its initial cleared state
    await t
        .expect(editor.textContent)
        .notEql("Enter your clinical note here or choose a template to start from...");

    // Test that there is some text in the editor and that the editor is not in its initial cleared state
    await t
        .expect(editor.textContent)
        .notEql("");
});

test('Clicking on an in-progress note in post encounter mode puts the NotesPanel in edit mode with the context tray displayed', async t => {
    // const clinicalEventSelector = Selector('.clinical-event-select');
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));
    const editor = Selector("div[data-slate-editor='true']");
    const clinicalNotesButton = Selector('#notes-btn');
    const newNoteButton = Selector('.note-new');
    const inProgressNotes = Selector('.in-progress-note');
    const contextTray = Selector('.context-tray');

    // Click on the clinical notes button to switch to clinical notes view
    await t
        .click(clinicalNotesButton);

    // Click on the new note button to create an in-progress note and toggle back to clinical notes view
    await t
        .click(newNoteButton)
        .click(clinicalNotesButton);

    // Click on the in-progress note
    await t
        .click(inProgressNotes)

    // Try to type random text in the editor (added a space because chrome created a strange character if no space)
    await t
        .typeText(editor, " random_text")

    // Because editor is in edit mode, expect that text can be entered
    await t
        .expect(editor.textContent).contains('random_text', 'Editor content contains the text "random_text"');

    // Expect to see the context tray (not the clinical notes view)
    await t
        .expect(contextTray.exists)
        .ok()
})

test('Clicking on an existing note in pre encounter mode loads the note in the editor', async t => {
    // const clinicalEventSelector = Selector('.clinical-event-select');
    const editor = Selector("div[data-slate-editor='true']");
    const note = Selector('.existing-note');

    // // Select pre-encounter mode
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Pre-encounter"]'));

    // Click on one of the existing notes
    await t
        .click(note)

    // Test that there is some text in the editor and that the editor is not in its initial cleared state
    await t
        .expect(editor.textContent)
        .notEql("Enter your clinical note here or choose a template to start from...");
})


fixture('Patient Mode - Targeted Data Panel')
    .page(startPage);

test('Clicking to insert a captured data element results in that text pasted into the editor', async t => {
    // const clinicalEventSelector = Selector('.clinical-event-select');
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));
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
    // const clinicalEventSelector = Selector('.clinical-event-select');

    // // Clicking Post-encounter choice selects it and the editor is rendered
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));
    // await t
    //     .expect(await clinicalEventSelector.textContent)
    //     .eql("Post-encounter");

    // Mimic post-encounter view
    const newNoteButton = Selector('.note-new');
    await t
        .click(newNoteButton)

    const sectionsPostEncounter = Selector('#targeted-data-section')
    const numSectionsPostEncounter = await sectionsPostEncounter.count;

    // Now check to make sure the Medications sections does *not* exist
    let result = false;
    for (let i = 0; i < numSectionsPostEncounter; i++) {
        let header = sectionsPostEncounter.nth(i).find("h2[class='section-header']");
        let headerText = await header.innerText;
        if (headerText === "Medications") result = true;
    }

    await t
        .expect(result === false);

    // // Clicking Pre-encounter choice selects it and the editor is not rendered
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Pre-encounter"]'));
    // await t
    //     .expect(await clinicalEventSelector.textContent)
    //     .eql("Pre-encounter");

    // Mimic pre-encounter view
    const closeNoteButton = Selector('.close-note-btn');
    await t
        .click(closeNoteButton)

    const sectionsPreEncounter = Selector('#targeted-data-section')
    const numSectionsPreEncounter = await sectionsPreEncounter.count;

    // Now check to make sure the Medications sections *does* exist
    result = false;
    for (let i = 0; i < numSectionsPreEncounter; i++) {
        let header = sectionsPreEncounter.nth(i).find("h2[class='section-header']");
        let headerText = await header.innerText;
        if (headerText === "Medications") result = true;
    }

    await t
        .expect(result === true);
});

// test('Clicking the data visualization buttons changes the visualizer used', async t => {
//     // const clinicalEventSelector = Selector('.clinical-event-select');
//     // await t
//     //     .click(clinicalEventSelector)
//     //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));
//     const sections = Selector('#targeted-data-section')
//     const sectionData = Selector('div#targeted-data-section');
//     const numSections = await sections.count;
//     for (let i = 0; i < numSections; i++) {
//         let icons = sections.nth(i).find('.right-icons button');
//         let numIcons = await icons.count;
//         for (let j = 0; j < numIcons; j++) {
//             const iconType = await icons.nth(j).id;
//             await t
//                 .click(icons.nth(j));
//             if (iconType === 'tabular') {
//                 // Check that class name of section = tabular-list
//                await t
//                     .expect(sections.nth(i).find('.tabular-list').exists)
//                     .ok();
//             } else if (iconType === 'narrative'){
//                 // Check class name = 'narrative-subsections'
//                 await t
//                     .expect(sections.nth(i).find('.narrative-subsections').exists)
//                     .ok();
//             } else if (iconType === 'timeline') {
//                 // Check id = 'timeline'
//                 await t
//                     .expect(sections.nth(i).find('#timeline').exists)
//                     .ok();
//             }
//         }
//     }
// });

// test('Clicking the data visualization buttons changes the visualizer used', async t => {
//     // const clinicalEventSelector = Selector('.clinical-event-select');
//     // await t
//     //     .click(clinicalEventSelector)
//     //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));
//     const sections = Selector('#targeted-data-section')
//     const sectionData = Selector('div#targeted-data-section');
//     const numSections = await sections.count;
//     for (let i = 0; i < numSections; i++) {
//         let icons = sections.nth(i).find('.right-icons button');
//         let numIcons = await icons.count;
//         for (let j = 0; j < numIcons; j++) {
//             const iconType = await icons.nth(j).id;
//             await t
//                 .click(icons.nth(j));
//             if (iconType === 'tabular') {
//                 // Check that class name of section = tabular-list
//                await t
//                     .expect(sections.nth(i).find('.tabular-list').exists)
//                     .ok();
//             } else if (iconType === 'narrative'){
//                 // Check class name = 'narrative-subsections'
//                 await t
//                     .expect(sections.nth(i).find('.narrative-subsections').exists)
//                     .ok();
//             } else if (iconType === 'timeline') {
//                 // Check id = 'timeline'
//                 await t
//                     .expect(sections.nth(i).find('#timeline').exists)
//                     .ok();
//             }
//         }
//     }
// });


fixture('Patient Mode - Timeline')
    .page(startPage);

test('Hovering over calendar medication items should add medication name to hover text', async t => {
    // const clinicalEventSelector = Selector('.clinical-event-select');
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));
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
    // const clinicalEventSelector = Selector('.clinical-event-select');
    // await t
    //     .click(clinicalEventSelector)
    //     .click(Selector('[data-test-clinical-event-selector-item="Post-encounter"]'));
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
