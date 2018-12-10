const LTS_VERSION = "v10.14.1"

if (process.version !== LTS_VERSION) {
    console.log(`
**********
* WARNING: Your version of node doesn't match our LTS: Expected ${LTS_VERSION}, got ${process.version}
**********
`);
} else {
    console.log("Version of Node checks out");
}
