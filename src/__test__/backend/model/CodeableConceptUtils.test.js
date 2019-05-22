import {expect} from 'chai';
import * as  codeableConceptUtils from '../../../model/CodeableConceptUtils.jsx';

describe('getCodeableConceptFromTuple', function() {
    const tuple = {
        value: 'test',
        codeSystem: '1234',
        displayText: 'display!'
    };
    const concept = codeableConceptUtils.getCodeableConceptFromTuple(tuple);

    it('should return CodeableConcept object with corresponding code, codeySystem, and displayText', function() {
        expect(concept)
            .to.be.an('object');
        expect(concept.displayText.value)
            .to.be.a('string')
            .eql(tuple.displayText);
        expect(concept.coding)
            .to.be.an('array')
            .that.is.not.empty;
        expect(concept.coding[0].code.value)
            .to.be.a('string')
            .eql(tuple.value);
        expect(concept.coding[0].codeSystem.value)
            .to.be.a('string')
            .eql(tuple.codeSystem);
    });
});
