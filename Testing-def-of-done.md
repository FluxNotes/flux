When completing an assigned JIRA task or sub-task involving coding, the following checklist must all be complete in order to move the item to done in JIRA.

1. JIRA item moved to In Progress when started
2. Coded within feature branch
3. Tested: Make sure unit testing is done with browser console open and resolve any warnings/errors that appear. In order for your code to be tested, and before it can be accepted in a pull request, the following must be done: 
   1. Define backend tests for any functions your code defines or relies on. Right now, testing React behaviors isn't fully supported on the backend, but can be cursorily achieved by testing the components rendered. Back-end tests are found in `projectDirectory/test/backend`, are titled with the pattern `<fileToTest>.test.js`, and are organized in directories identically to the source files. That is, if you're testing a function found in `projectDirectory/src/patient/Patient.jsx`, you will define your test in a file found at `projectDirectory/test/backend/patient/Patient.test.js`.  If there is no file, you need to make one.
   2. Define front-end tests for any new ui-components you define, as well as any components you rely on in your new feature. Front-end tests are found in `projectDirectory/test/ui` and are titled with the pattern `<viewToTest>.js`. That is, if you're testing a ui-component displayed when using the view `projectDirectory/src/view/SlimApp.jsx`, you will define your test in a file found at `projectDirectory/test/ui/SlimApp.js`. If there is no file, you need to make one.
      *  **Do not add `.test` to the filename**. This will make the backend test script try to run this file, which will fail and make it look like your tests don't work
4. Demonstration script updated and fully tested with changes in place
5. Documented (comments in code, separate documentation on approach/api if will be reused). **N.B.** Cheat sheets should be updated if a structured phrase is changed
6. Feature branch pushed to github and pull request issued and reviewers recommended or assigned.
7. Git pull request reviewed, all issues identified have been addressed, and pull request merged (after rebasing if master has changed) by a reviewer
8. Additional technical components/libraries pulled in are documented on wiki (https://github.com/standardhealth/flux/wiki/Flux-Capture-Prototype-%28Flux-Notes%29 under Technologies Used)
9. Note parsing updated if structured phrases change. Note parsing should always be tested if shortcut classes changed at all
10. Make sure all date formatting and parsing is done using moment library instead of custom formatting functions. If you see any legacy cases of this in code you are editing, please replace them or add a JIRA to do it at least.