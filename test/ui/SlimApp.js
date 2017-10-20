import { Selector } from 'testcafe';

const pageDomain = "http://localhost";
const pagePort = "3000";
const pageRoute = "/patina"

const startPage = `${pageDomain}:${pagePort}${pageRoute}`;

fixture('Lite Mode - Landing') 
    .page(startPage);
test('Clicking progression button puts us in progression mode', async t => { 
    await t
        .click("#Disease\\ Status")
        .expect(Selector("#shortcut-viewer").find('h1').innerText)
        .eql("Disease Status", `Current header doesn't reflect expected progression page header`);
})
test('Clicking toxicity button puts us in toxicity mode', async t => { 
    await t
        .click("#Toxicity")
        .expect(Selector("#shortcut-viewer").find('h1').innerText)
        .eql("Toxicity", `Current header doesn't reflect expected toxicity page header`);
})
test('Clicking clinical trial button puts us in clinical trial mode', async t => {
    await t
        .click("#Clinical\\ Trial")
        .expect(Selector("#shortcut-viewer").find('h1').innerText)
        .eql("Clinical Trial", `Current header doesn't reflect expected toxicity page header`);
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
        .click("#About\\ Flux\\ Notes\\ Lite")
        .expect(Selector("#shortcut-viewer").find('h1').innerText)
        .eql("About Flux Notes Lite", `Current header doesn't reflect expected landing page header`);
})


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

fixture('Lite Mode - Clinical Trial')
    .page(startPage)
    .beforeEach( async t => {
        await t.click("#Clinical\\ Trial");
    });
test('Selecting a clinical trial updates copy-content', async t => {
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
test('Selecting the enrollment date choice and a date updates copy-content', async t => {
    const enrollmentDateChoice = Selector("#enrollment-date-choice");
    const copyButton = Selector("#copy-content");
    // Date only appears if a trial is selected
    const firstTrial = Selector('.btn-group-trial-clinical-trial').find("span[class^='MuiButton-label']").nth(0);
    await t
        .click(firstTrial)
        .click(enrollmentDateChoice);
    
    const enrollmentDatePicker = await Selector("#enrollment-date");
    await t 
        .typeText(enrollmentDatePicker, '10/06/2017');
    await t
        .expect(copyButton.innerText)
        .contains(`#enrolled on #${await enrollmentDatePicker.value}`);
});
test('Selecting the end date choice and a date updates copy-content', async t => {
    const endDateChoice = Selector("#end-date-choice");
    const copyButton = Selector("#copy-content");
    // Date only appears if a trial is selected
    const firstTrial = Selector('.btn-group-trial-clinical-trial').find("span[class^='MuiButton-label']").nth(0);
    await t
        .click(firstTrial)
        .click(endDateChoice);

    const endDatePicker = await Selector("#end-date");
    await t 
        .typeText(endDatePicker, '10/06/2017');
    await t
        .expect(copyButton.innerText)
        .contains(await `#ended on #${await endDatePicker.value}`);
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


// Landing Page Tests

const landingPage = `${pageDomain}:${pagePort}`;
fixture('Landing Page')
    .page(landingPage);
test('Links on landing page work', async t => {
    const patinaLink = Selector('#patina-link');
    await t
        .click(patinaLink);
    const pathname = await t.eval(() => window.location).pathname ;
    await t
        .expect(pathname === '/patina');
});
