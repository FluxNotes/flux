import { Selector } from 'testcafe';


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


fixture('Lite Mode - Progression') 
    .page('http://localhost:3000')
    .beforeEach( async t => { 
        await t.click("#Progression");
    });
test('Changing progression status via button updates copy-content', async t => {
    const statusButtons = Selector('.btn-group-status-progression').find("span[class^='MuiButton-label']");
    const numButtons = await statusButtons.count;
    for(let i = 0; i < numButtons; i++) {
        await t
            .click(statusButtons.nth(i))
            .expect(Selector("#copy-content").innerText)
            .contains(await statusButtons.nth(i).innerText);
    }
});
test('Changing progression rationale via button updates copy-content', async t => {
    const rationaleButtons = Selector('.btn-group-reason-progression').find("span[class^='MuiButton-label']");
    const numButtons = await rationaleButtons.count;
    for(let i = 0; i < numButtons; i++) {
        await t
            .click(rationaleButtons.nth(i))
            .expect(Selector("#copy-content").innerText)
            .contains(await rationaleButtons.nth(i).innerText);
    }
});


fixture('Lite Mode - Toxicity') 
    .page('http://localhost:3000')
    .beforeEach( async t => { 
        await t.click("#Toxicity");
    });
test('Typing an adverseEvent updates copy-content', async t => {
    const adverseEventInput = Selector('.react-autosuggest__input').nth(0);
    await t
        .typeText(adverseEventInput, "Anemia")
        .pressKey('enter')
        .expect(Selector("#copy-content").innerText)
        .contains(await adverseEventInput.value);
});
test('Selecting adverseEvent, then selecting a valid grade updates copy-content', async t => {
    const adverseEventInput = Selector('.react-autosuggest__input').nth(0);
    const gradeButtons = Selector('#grade-menu').find("div[class='grade-menu-item-name']");
    const numButtons = await gradeButtons.count;
    await t
        .typeText(adverseEventInput, "Anemia")
        .pressKey('enter');

    for(let i = 0; i < numButtons; i++) {
        await t
            .click(gradeButtons.nth(i))
            .expect(Selector("#copy-content").innerText)
            .contains(await gradeButtons.nth(i).innerText);
    }
});
test('Changing attribution via button updates copy-content', async t => {
    const attributionButtons = Selector('.btn-group-attribution').find("span[class^='MuiButton-label']");
    const numButtons = await attributionButtons.count;
    for(let i = 0; i < numButtons; i++) {
        await t
            .click(attributionButtons.nth(i))
            .expect(Selector("#copy-content").innerText)
            .contains(await attributionButtons.nth(i).innerText);
    }
});