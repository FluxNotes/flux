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

fixture('Patient Mode - Data Summary Panel') 
    .page(startPage);

test('Clicking to insert a captured data element results in that text pasted into the editor', async t => { 
    const editor = Selector("div[data-slate-editor='true']");
    const summaryButtons = Selector("#summary-list div table .captured .button-hover")
    const numButtons = await summaryButtons.count;

    console.log(numButtons);
    for(let i = 0; i < numButtons; i++) { 
        await t
            .click(summaryButtons.nth(i))
            .expect(await editor.innerText)
            .contains(await summaryButtons.nth(i).innerText);
    }
});

fixture('Patient Mode - Timeline') 
    .page(startPage);

