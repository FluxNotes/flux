import { Selector } from 'testcafe';

const pageDomain = "http://localhost";
const pagePort = "3000";
const pageRoute = "/"

const landingPage = `${pageDomain}:${pagePort}`;

fixture('Landing Page')
    .page(landingPage);

test('Links on landing page work', async t => {
    // const liteModeLink = Selector('#link-to-lite');
    const fullModeLink = Selector('#link-to-full');
    const patinaLink = Selector('#link-to-patina');
    let pathname;

    await t
        .click(Selector('#link-to-lite'));
    pathname = await t.eval(() => window.location).pathname ;
    await t
        .expect(pathname === '/patina');

    await t
        .navigateTo(landingPage);

    await t
        .click(fullModeLink);
    pathname = await t.eval(() => window.location).pathname ;
    await t
        .expect(pathname === '/demo2');

    await t
        .navigateTo(landingPage);

    await t
        .click(patinaLink);
    pathname = await t.eval(() => window.location).pathname ;
    await t
        .expect(pathname === '/patina');
});
