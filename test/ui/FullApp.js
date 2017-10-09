import { Selector } from 'testcafe';
import Patient from '../../src/patient/Patient.jsx';
import moment from 'moment';

const pageDomain = "http://localhost";
const pagePort = "3000";
const pageRoute = "/patient"
const startPage = `${pageDomain}:${pagePort}${pageRoute}`;


fixture('Patient Mode - Editor') 
    .page(startPage);

test('Typing an inserterShortcut in the editor results in a structured data insertion ', async t => { 
    const editor = Selector("div[data-slate-editor='true']");
    await t
        .typeText(editor, "@name ")
    const structuredField = editor.find("span[class='structured-field']");
    await t
        .expect(structuredField.innerText)
        .contains(new Patient().getName());
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

fixture('Patient Mode - Context Panel')
    .page(startPage);

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

fixture('Patient Mode - Data Summary Panel')
test('Typing a progression note with as of date in the editor results in a new progression item on the timeline', async t => {
    const progressionItemsBefore = Selector("#timeline .rct-canvas .rct-items .rct-item.progression-item");
    const expectedNumItems = await progressionItemsBefore.count + 1;
    const editor = Selector("div[data-slate-editor='true']");
    const today = new moment().format('MM/DD/YYYY');

    // Needed to break up entering the text like this to get the structured data working
    await t
        .typeText(editor, "@condition ")
        .pressKey('enter')
        .typeText(editor, " ");
    await t
        .typeText(editor, "#dis")
        .pressKey('enter')
        .typeText(editor, " ")
        .typeText(editor, "#Stable ")
        .typeText(editor, " ");
    await t
        .typeText(editor, "#as")
    const correctSuggestion = Selector(".suggestion-portal").find('li').withText('as of');
    await t
        .click(correctSuggestion);
    await t
        .typeText(editor, " #" + today + " ");

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

test('Typing "#clinical" and selecting "clinical trial" from the portal in the editor results \
in a structured data insersion and the conext panel updates', async t => {
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


fixture('Patient Mode - Data Summary Panel')
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
