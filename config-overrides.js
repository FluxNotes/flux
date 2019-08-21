const CopyWebpackPlugin = require('copy-webpack-plugin');
const {
    override,
    useEslintRc,
    addWebpackExternals,
    addWebpackPlugin
} = require("customize-cra");


module.exports = override( 
    useEslintRc(),
    addWebpackExternals({
        'fhir-mapper': "Mapper",
        'babel-polyfill': "_babelPolyfill"
      }),
      addWebpackPlugin(new CopyWebpackPlugin([
        { context:'node_modules/fhir-mapper/dist/', from: 'app.bundle.js*', to: 'static/js/fhir-mapper' }
    ]))
);
