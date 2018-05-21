# Convert CQL To Compiled Javascript to be used by CQLExecutionEngine

There are several steps involved to execute CQL.  First, you must create a JSON representation of the ELM.
For easiest integration, we will generate a coffee file using cql-to-elm:

1. Install the [Java 8 SDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
2. Clone the [cql-execution](https://github.com/cqframework/cql-execution) repository to a location of your choice
    1. Install [CoffeeScript](http://coffeescript.org/)
    2. Run `yarn install` in the root directory
3. Clone the [clinical_quality_language](https://github.com/cqframework/clinical_quality_language) repository to a location of your choice
4. `cd ${path_to_clinical_quality_language}/Src/java` (replacing `${path_to_clinical_quality_language}` with the path to the local clone)
5. `./gradlew :cql-to-elm:installDist`
    * If you get a connection timeout warning, create a `gradle.properties` file in your `GRADLE_USER_HOME` directory(default is the `~/.gradle` directory) with your proxy settings.
6. `./cql-to-elm/build/install/cql-to-elm/bin/cql-to-elm --format=COFFEE --input ${path_to_cql_file} --output ${path_to_cql-execution}/src/`

We will now have a JSON ELM coffeescript file for the measure in the `src` directory of the `cql-execution` repository.  Now we must compile it to javascript in the `lib` directory.  There is a simple Cakefile build script for this (cake is installed with coffeescript):
1. `cd ${path_to_cql-execution}`
2. `cake build`
3. There will now be a compiled javascript file of our measure in the `${path_to_cql-execution}/lib` directory.
4. Copy the `.js` file into Flux Notes and the compiled javascript file can be passed into the `getCQLResults` function as the measure parameter. 
