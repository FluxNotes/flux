import DashboardViewManager from '../../../src/dashboard/DashboardViewManager';
import {expect} from 'chai'

// Create one das
const emptyDashboardViewManager = new DashboardViewManager([]);
const dashboardViewManager = new DashboardViewManager();

describe("getPossibleSuperRoles", function () { 
    it('should return an empty list if there are no defined superRoles', function () {
        const allRoles = emptyDashboardViewManager.getPossibleSuperRoles();
        expect(allRoles)
            .to.be.an("array")
            .and.to.be.empty;
    });

    it('should return a list containing Clinician and Patient as default superRoles', function () { 
        const expectedRoles = ['Clinician', 'Patient'];
        const actualRoles = dashboardViewManager.getPossibleSuperRoles();
        expect(actualRoles).
            to.have.same.members(expectedRoles);
    })
});

// describe("getDashboardForSuperRole", function () { 
    
// });