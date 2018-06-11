import {expect} from 'chai';
import CQLExecutionEngine from '../../../../src/lib/cql-execution/CQLExecutionEngine.js';
import PALLAScql from '../../../../src/lib/cql-execution/example/cql/PALLASEligibility.json';
import PALLAS_eligiblePatient from '../../../../src/lib/cql-execution/example/patients/PALLASPatient.json';
import PALLAS_ineligiblePatient from '../../../../src/lib/cql-execution/example/patients/PATINAPatient.json';


describe('getPALLASeligibility', function () { 
    it('should return a boolean - true if FHIR patient passes PALLAS eligibility criteria', function () {
        const result = CQLExecutionEngine.getCQLResults(PALLAScql, [PALLAS_eligiblePatient, PALLAS_ineligiblePatient]);
        // console.log(result);
        expect(result.patientResults['93d8b432-f097-4c82-b111-8577e1d9d89f'].meetsInclusionCriteria)
            .to.be.true;
        expect(result.patientResults['3cb09ecb-e927-4946-82b3-89957e193215'].meetsInclusionCriteria)
            .to.be.false;

    });
});
