import { Selector } from 'testcafe';
import Patient from '../../src/patient/Patient.jsx';


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

test('Typing a progression note with as of date in the editor results in a new progression item on the timeline', async t => {
    const progressionItemsTitleBefore = Selector("#timeline .rct-canvas .rct-items .rct-item.progression-item");
    const expectedNumItems = await progressionItemsTitleBefore.count + 1;

    const editor = Selector("div[data-slate-editor='true']");
    await t
        .typeText(editor, "@condition ")
        .pressKey('enter')
    await t
        .typeText(editor, "#disease")
        .pressKey('enter')
        .typeText(editor, "#Stable #as of #10/11/2017 ")
    const progressionItemsTitle = Selector("#timeline .rct-canvas .rct-items .rct-item.progression-item");
    const numItems = await progressionItemsTitle.count;

    await t
        .expect(expectedNumItems).eql(numItems, 'There should be ' + expectedNumItems + ' progression items on the timeline.');
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
