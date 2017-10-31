# Architecture of View-Based Components 

So that we may be more precise in our descriptions of FluxNotes' many components, I propose the following ontology of visual components on a given FluxNotes Application in Patient mode: 

![Overview of visual ontology](C:\Users\dphelan\Desktop\FY17\SHR\Flux\design\personal-mockups\flux-ontology-img.png)

1. "Views" are collections of one or more "panels" organized and displayed to the user based on:
   1. The selected clinical event (e.g. pre-encounter, encounter, post-encounter, etc...)
   2. The user's role (e.g. surgical oncologist, nurse practitioner, etc...)
2. "Panels" are collections of one or more "sections" grouped together to enhance user experience. Originally many of our panels contained only one "section", and our original implementation blurred the line between these. 
3. "Sections" are collections one or more web elements grouped together due to their functional and/or ontological similarities. For example, our context tray is an example of a "section" that is grouped together due to their functional similarity (i.e. our inserter buttons are all the same "section"), and our data summary component is an example of a "section" that groups web elements due to their ontological similarities (i.e. we group the clinician I.D.'ed "top-ten elements" together, we will eventually group all lab tests together, etc...).

When creating a new component, ask yourself whether or not the component can be broken down into a view, panel and section. This encapsulation will help our ability to modularize our components as the code-base matures and facilitate iteration on our design approach as time progresses.