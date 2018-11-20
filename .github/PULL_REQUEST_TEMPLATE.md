_Pull requests into Flux require the following. Submitter should :white_check_mark: when done. For items that are not-applicable, note it's not-applicable (**N/A**) and :white_check_mark:. Reviewers should complete every item on the bulleted list when reviewing._


## Submitter:

**Running the Application**

- [ ] Manually tested in Chrome (primary browser for testing)
- [ ] Manually tested in IE/Safari (verify app loads and basic feature testing)
- [ ] Manually tested in Chrome in iPad mode (at minimum, viewing patient record)

**Task**

- [ ] Branch implements task as expected
- [ ] Key application features are updated as needed for task and tested (see: [Key Application Features](https://github.com/FluxNotes/flux/wiki/Key-Application-Features))
- [ ] Task specific definition of done (as described in the Jira task) is met, if applicable.

**Documentation**

- [ ] This pull request describes why these changes were made
- [ ] Recognizes any potential shortcomings/bugs in the description 
- [ ] Pre release script is updated on the [Pre Release Testing Script wiki page](https://github.com/FluxNotes/flux/wiki/Pre-Release-Testing-Script) (add/remove single features to test, do not run through full script)
- [ ] Update the list of key features with new features on the [Key Application Features wiki page](https://github.com/FluxNotes/flux/wiki/Key-Application-Features)
- [ ] Document any new APIs/extension points
- [ ] Additional technical components and libraries are documented and added to [wiki](https://github.com/FluxNotes/flux/wiki/About-Flux-Notes) as needed

**Code Quality**

- [ ] Code style guide is followed (see: [Code Style Guide](https://github.com/FluxNotes/flux/wiki/JavaScript-and-HTML-Code-Style-Guide))
- [ ] Code is commented

**Tests**

- [ ] Existing tests passed
- [ ] Added backend tests for new functionality added


## Reviewers:

- Check that code is maintainable and reusable. Code reuses existing code and infrastructure where appropriate.
- Check the PR and code accomplishes the task's purpose.
- Check that new tests appropriately test the new code, including edge cases. Other existing tests pass.
- Verify Pull Request checklist is correctly completed by submitter.
- Try to break the code
