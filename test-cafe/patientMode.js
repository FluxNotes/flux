import { Selector } from 'testcafe';
import ProgressionLookup from "../src/lib/progression_lookup.jsx"

// Landing page testing
fixture('Lite Mode - Landing') 
    .page('http://localhost:3000');

test('Clicking progression button puts us in progression mode', async t => { 
    await t
        .click("#Progression")
        .expect(Selector("#shortcut-viewer").find('h1').innerText)
        .eql("Disease Progression", `Current header doesn't reflect expected progression page header`);
})

test('Clicking toxicity button puts us in toxicity mode', async t => { 
    await t
        .click("#Toxicity")
        .expect(Selector("#shortcut-viewer").find('h1').innerText)
        .eql("Toxicity", `Current header doesn't reflect expected toxicity page header`);
})

test('Clicking about button puts us back on landing page', async t => { 
    await t
        .click("#Toxicity")
        .click("#About\\ Flux\\ Notes\\ Lite")
        .expect(Selector("#shortcut-viewer").find('h1').innerText)
        .eql("About Flux Notes Lite", `Current header doesn't reflect expected landing page header`);
})

// Progression page testing
fixture('Lite Mode - Progression') 
    .page('http://localhost:3000')
    .beforeEach( async t => { 
        await t.click("#Progression");
    });

test('Changing status via button updates copy-content', async t => {
    const statusButtons = Selector('.btn-group-status-progression').find("span[class^='MuiButton-label']");
    const numButtons = await statusButtons.count;
    for(let i = 0; i < numButtons; i++) {
        await t
            .click(statusButtons.nth(i))
            .expect(Selector("#copy-content").innerText)
            .eql(`#progression is #${await statusButtons.nth(i).innerText}`);
    }
});