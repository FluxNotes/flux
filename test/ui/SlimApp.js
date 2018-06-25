import { Selector } from 'testcafe';

const pageDomain = "http://localhost";
const pagePort = "3000";
const pageRoute = "/patina"

const startPage = `${pageDomain}:${pagePort}${pageRoute}`;

// NOTE: The Toxicity page test has been implemented in backend/views/SlimApp. Others in this fixture will be similar.
fixture('Lite Mode - Landing')
    .page(startPage);
test('Clicking progression button puts us in progression mode', async t => {
    await t
        .click("#Disease\\ Status")
        .expect(Selector("#shortcut-viewer").find('h1').innerText)
        .eql("Disease Status", `Current header doesn't reflect expected progression page header`);
})
test('Clicking enrollment button puts us in enrollment mode', async t => {
    await t
        .click("#Enrollment")
        .expect(Selector("#shortcut-viewer").find('h1').innerText)
        .eql("Enrollment", `Current header doesn't reflect expected enrollment page header`);
})
test('Clicking unenrolled button puts us in unenrolled mode', async t => {
    await t
        .click("#Unenrolled")
        .expect(Selector("#shortcut-viewer").find('h1').innerText)
        .eql("Unenrolled", `Current header doesn't reflect expected unenrolled page header`);
})
test('Clicking deceased button puts us in deceased mode', async t => {
    await t
        .click("#Deceased")
        .expect(Selector("#shortcut-viewer").find('h1').innerText)
        .eql("Deceased", `Current header doesn't reflect expected deceased page header` );
})
test('Clicking about button puts us back on landing page', async t => {
    await t
        .click("#Toxicity")
        .click("#About\\ Flux\\ Notes™\\ Lite")
        .expect(Selector("#shortcut-viewer").find('h1').innerText)
        .eql("About Flux Notes™ Lite", `Current header doesn't reflect expected landing page header`);
})


// NOTE: Tests for typing in adverse events, for clicking a button to update copy content, and choosing a date have been implemented in backend/views/SlimApp. Use as references.
fixture('Lite Mode - Progression')
    .page(startPage)
    .beforeEach( async t => {
        await t.click("#Disease\\ Status");
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
    .page(startPage)
    .beforeEach( async t => {
        await t.click("#Toxicity");
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

fixture('Lite Mode - Enrollment')
    .page(startPage)
    .beforeEach( async t => {
        await t.click("#Enrollment");
    });
test('Selecting a clinical trial for enrollment updates copy-content', async t => {
    const trialButtons = Selector('.btn-group-trial-clinical-trial').find("span[class^='MuiButton-label']");
    const numButtons = await trialButtons.count;
    const copyButton = Selector("#copy-content");
    for (let i = 0; i < numButtons; i++) {
        await t
            .click(trialButtons.nth(i))
            .expect(copyButton.innerText)
            .contains(await trialButtons.nth(i).innerText);
    }
});

fixture('Lite Mode - Unenrolled')
    .page(startPage)
    .beforeEach( async t => {
        await t.click("#Unenrolled");
    });
test('Selecting a clinical trial for unenrolled updates copy-content', async t => {
    const trialButtons = Selector('.btn-group-trial-clinical-trial').find("span[class^='MuiButton-label']");
    const numButtons = await trialButtons.count;
    const copyButton = Selector("#copy-content");
    for (let i = 0; i < numButtons; i++) {
        await t
            .click(trialButtons.nth(i))
            .expect(copyButton.innerText)
            .contains(await trialButtons.nth(i).innerText);
    }
});
test('Selecting a date for unenrolled updates copy-content', async t => {
    const copyButton = Selector("#copy-content");
    // Date only appears if a trial is selected
    const firstTrial = Selector('.btn-group-trial-clinical-trial').find("span[class^='MuiButton-label']").nth(0);
    await t
        .click(firstTrial)

    const endDatePicker = await Selector("#end-date");
    await t
        .typeText(endDatePicker, '10/06/2017');
    await t
        .expect(copyButton.innerText)
        .contains(`#${await endDatePicker.value}`);
});

fixture('Lite Mode - Deceased')
    .page(startPage)
    .beforeEach( async t => {
       await t.click("#Deceased");
    });
test('Selecting a date of death updates copy-content', async t => {
    const datePicker = Selector("#date-of-death");
    const copyButton = Selector("#copy-content");
    await t
        .typeText(datePicker, '10/01/2017');
    await t
        .expect(copyButton.innerText)
        .contains(await datePicker.value);
});
