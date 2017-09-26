import ViewManager from '../../../src/views/ViewManager';
import {expect} from 'chai'

const ViewManagerObj = new ViewManager();


describe('getSupportedViews', function() { 

    it("should return an array", function () { 
        const views = ViewManagerObj.getSupportedViews();
        
        expect(views)
            .to.be.an('array');
    });

    it("should return manager's views", function () { 
        const views = ViewManagerObj.getSupportedViews();
        const expectedViews = ViewManagerObj.views;
        expect(views)
            .to.equal(expectedViews);
    });

    it("should return manager's views, and each view should have a path", function () { 
        const views = ViewManagerObj.getSupportedViews();
        const expectedViews = ViewManagerObj.views;
        expect(views)
            .to.not.be.empty;

        for(const view of views) { 
            expect(view)
                .to.have.property('path');
        }
    });

    it("should return manager's views, and each view should have display text", function () { 
        const views = ViewManagerObj.getSupportedViews();
        const expectedViews = ViewManagerObj.views;
        expect(views)
            .to.not.be.empty;

        for(const view of views) { 
            expect(view)
                .to.have.property('path');
        }
    });
});