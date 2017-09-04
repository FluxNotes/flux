import { Selector } from 'testcafe';
import ProgressionLookup from "../src/lib/progression_lookup.jsx"
fixture('Lite Mode - Progression') 
    .page('http://localhost:3000')
    .beforeEach( async t => { 
        await t.click("#Progression");
    });

// Progression tests
test('All Possible Statuses have corresponding buttons', async t => {
    const possibleStatuses = ProgressionLookup.getStatusOptions();
    const displayedStatusButtons = Selector('.btn-group-status-progression').child("span[class^='MuiButton-label']");
    console.log(displayedStatusButtons.length)
});