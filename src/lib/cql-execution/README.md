# Convert CQL To JSON ELM to be used by CQLExecutionEngine

There are several steps involved to execute CQL.  First, you must create a JSON representation of the ELM.
For easiest integration, we will generate a coffee file using cql-to-elm:

1. Install the [Java 8 SDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
2. Clone the [clinical_quality_language](https://github.com/cqframework/clinical_quality_language) repository to a location of your choice
3. `cd ${path_to_clinical_quality_language}/Src/java` (replacing `${path_to_clinical_quality_language}` with the path to the local clone)
4. `./gradlew :cql-to-elm:installDist`
    * If you get a connection timeout warning, create a `gradle.properties` file in your `GRADLE_USER_HOME` directory(default is the `~/.gradle` directory) with your proxy settings.
5. `./cql-to-elm/build/install/cql-to-elm/bin/cql-to-elm --format=JSON --input ${path_to_cql_file} --output ${outputJSON path}`

We will now have a JSON representation of the ELM for our CQL file in our outputJSON path.  This JSON file can be passed to the `getCQLResults` function as the `cqlLogic` parameter.

