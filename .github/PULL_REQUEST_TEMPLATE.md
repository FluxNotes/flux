Pull requests into Flux require the following. Submitter and reviewer should :white_check_mark: when done. For items that are not-applicable, note it's not-applicable (**N/A**) and :white_check_mark:.

##Submitter:##

**Documentation**

- [ ] This pull request describes why these changes were made.
- [ ] Cheat sheet is updated
- [ ] Demo script is updated 
- [ ] Documentation on Wiki has been updated 
- [ ] Additional technical components and libraries are documented and added to wiki as needed. 

**NoteParser**

- [ ] Note parser has been updated if structured phrases change.

**Code Quality**

- [ ] 4-space indents - convert any tabs to spaces
- [ ] Use public class field syntax for binding functions - ex. handleChange = () => { ... };
- [ ] Code is commented

**Tests**

- [ ] Existing tests passed
- [ ] Added UI tests for slim mode 
- [ ] Added UI tests for full mode
- [ ] Added backend tests for fluxNotes code
- [ ] Added note parser examples to test new functionality


##Reviewer 1:##

**Name:**

- [ ] Code is maintainable and reusable, reuses existing code and infrastructure where appropriate, and accomplishes the task’s purpose
- [ ] The tests appropriately test the new code, including edge cases
- [ ] You have tried to break the code


##Reviewer 2:##

**Name:**

- [ ] Code is maintainable and reusable, reuses existing code and infrastructure where appropriate, and accomplishes the task’s purpose
- [ ] The tests appropriately test the new code, including edge cases
- [ ] You have tried to break the code