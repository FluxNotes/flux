import AppManager from '../../../src/apps/AppManager';
import {expect} from 'chai'

const AppManagerObj = new AppManager();


describe('getSupportedApps', function() { 

    it("should return an array", function () { 
        const apps = AppManagerObj.getSupportedApps();
        
        expect(apps)
            .to.be.an('array');
    });

    it("should return manager's apps", function () { 
        const apps = AppManagerObj.getSupportedApps();
        const expectedApps = AppManagerObj.apps;
        expect(apps)
            .to.equal(expectedApps);
    });

    it("should return manager's apps, and each app should have a path", function () { 
        const apps = AppManagerObj.getSupportedApps();
        const expectedApps = AppManagerObj.apps;
        expect(apps)
            .to.not.be.empty;

        for(const app of apps) { 
            expect(app)
                .to.have.property('path');
        }
    });

    it("should return manager's apps, and each app should have display text", function () { 
        const apps = AppManagerObj.getSupportedApps();
        const expectedApps = AppManagerObj.apps;
        expect(apps)
            .to.not.be.empty;

        for(const app of apps) { 
            expect(app)
                .to.have.property('display');
        }
    });
});