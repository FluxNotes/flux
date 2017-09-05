import { Selector } from 'testcafe';
import Patient from '../../src/patient/Patient.jsx';

fixture('Patient Mode - Editor') 
    .page('http://localhost:3000/patient');

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
    .page('http://localhost:3000/patient');

fixture('Patient Mode - Timeline') 
    .page('http://localhost:3000/patient');

