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
})

fixture('Patient Mode - Data Summary Panel') 
    .page(startPage);

fixture('Patient Mode - Timeline') 
    .page(startPage);

