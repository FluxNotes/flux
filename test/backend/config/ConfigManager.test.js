import ConfigManager from '../../../src/config/ConfigManager';
import {expect} from 'chai'
const nock = require('nock');

describe("ConfigManager", function () {
    it('should aquire defaults from global.CONFIG object if available', function () {
        global.CONFIG = {foo:"bar"}
        let cm = new ConfigManager();

        expect(cm.config)
            .to.deep.equal(global.CONFIG);
    });

    it('should be able to load a config file from a url', function () {
      let config = {foo: 'BAR'};
      const scope = nock('http://localhost/')
        .get('/config.json')
        .reply(200, config)

        global.CONFIG = {}
        let cm = new ConfigManager();
        expect(cm.config)
            .to.deep.equal(global.CONFIG);
        cm.loadConfiguration("/config.json").then(()=> {
        expect(cm.config)
            .to.deep.equal(config);
        })
    });
});
