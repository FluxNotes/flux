import {expect} from 'chai';
import staging from '../../../src/lib/staging.jsx';
import lookup from '../../../src/lib/staging_lookup.jsx';

//Helpers
function metastaticPermute(ts, ns) {
    let values = [];
    ts.forEach((t) => {
        ns.forEach((n) => {
            values.push([t.name, n.name, 'M1']);
        });
    });
    return values;
}


describe('breastCancerPrognosticStage', () => {

    it('should compute valid prognostic stages given T, N, M', () => {
        expect(staging.breastCancerPrognosticStage('Tis','N0','M0'))
            .to.be.a('string')
            .and.to.equal('0');
        expect(staging.breastCancerPrognosticStage('T0','N0','M0'))
            .to.be.a('string')
            .and.to.equal('0');
        expect(staging.breastCancerPrognosticStage('T1','N1mi','M0'))
            .to.be.a('string')
            .and.to.equal('IB');
        expect(staging.breastCancerPrognosticStage('T3','N2','M0'))
            .to.be.a('string')
            .and.to.equal('IIIA');
        expect(staging.breastCancerPrognosticStage('T1','N2','M1'))
            .to.be.a('string')
            .and.to.equal('IV');
    });

    it('should return null for invalid T, N, M values', () => {
        expect(staging.breastCancerPrognosticStage(1,2,0))
            .to.be.null;
        expect(staging.breastCancerPrognosticStage('foo','bar',11.5))
            .to.be.null;
    });

    it('should return null for undefined staging given T, N, M', () => {
        expect(staging.breastCancerPrognosticStage('T4','N1mi','M0'))
            .to.be.null;
        expect(staging.breastCancerPrognosticStage('Tis','N1','M0'))
            .to.be.null;
    });

    it('should be case-insensitive', () => {
        expect(staging.breastCancerPrognosticStage('Tis','N0','M0'))
            .to.be.a('string')
            .and.to.equal('0');
        expect(staging.breastCancerPrognosticStage('TIS','n0','M0'))
            .to.be.a('string')
            .and.to.equal('0');
        expect(staging.breastCancerPrognosticStage('T1','N1mi','m0'))
            .to.be.a('string')
            .and.to.equal('IB');
        expect(staging.breastCancerPrognosticStage('t0','n1mI','M0'))
            .to.be.a('string')
            .and.to.equal('IB');
    });

    it('should reject invalid M values', () => {
        expect(staging.breastCancerPrognosticStage('T1', 'N1', 'M?'))
            .to.be.null;
    });
});


describe('breastCancerPossibleTNM', () => {

    it('should return a list of possible T, N, M tuples given a prognostic stage', () => {
        // 5th edition, stage 'IIB'
        let expected = [
            ['T2','N1','M0'],
            ['T3','N0','M0']
        ];
        expect(staging.breastCancerPossibleTNM('IIB', 5))
            .to.be.an('array')
            .and.to.eql(expected);
    
        // 6th edition, stage 'IIA'
        expected = [
            ['T0','N1','M0'],
            ['T1','N1','M0'],
            ['T2','N0','M0']
        ];
        expect(staging.breastCancerPossibleTNM('IIA', 6))
            .to.be.an('array')
            .and.to.eql(expected);
    
        // 7th edition, stage 'IB'
        expected = [
            ['T0','N1mi','M0'],
            ['T1','N1mi','M0']
        ];
        expect(staging.breastCancerPossibleTNM('IB', 7))
            .to.be.an('array')
            .and.to.eql(expected);
    });

    it('should return all permutations of T and N for stage IV', () => {
        expect(staging.breastCancerPossibleTNM('IV', 5))
            .to.be.an('array')
            .and.to.eql(metastaticPermute(lookup.getTsForEdition(5), lookup.getNsForEdition(5)));
    
        expect(staging.breastCancerPossibleTNM('IV', 6))
            .to.be.an('array')
            .and.to.eql(metastaticPermute(lookup.getTsForEdition(6), lookup.getNsForEdition(6)));
    
        expect(staging.breastCancerPossibleTNM('IV', 7))
            .to.be.an('array')
            .and.to.eql(metastaticPermute(lookup.getTsForEdition(7), lookup.getNsForEdition(7)));
    });

    it('should return an empty list for an invalid staging edition', () => {
        expect(staging.breastCancerPossibleTNM('IIB', 3))
            .to.be.an('array')
            .and.to.be.empty;
        expect(staging.breastCancerPossibleTNM('IIB', 'foo'))
            .to.be.an('array')
            .and.to.be.empty;
    });
  
    it('should return an empty list for an unknown prognostic stage', () => {
        // these two are valid in other editions:
        expect(staging.breastCancerPossibleTNM('I', 5))
            .to.be.an('array')
            .and.to.be.empty;
        expect(staging.breastCancerPossibleTNM('IA', 6))
            .to.be.an('array')
            .and.to.be.empty;
        // there is no stage 'V' cancer
        expect(staging.breastCancerPossibleTNM('V', 7))
            .to.be.an('array')
            .and.to.be.empty;
    });
  
    it('should default to the 7th edition if none is specified', () => {
        // 7th edition, stage 'IA'
        const expected = [
            ['T1','N0','M0']
        ];
        expect(staging.breastCancerPossibleTNM('IA'))
            .to.be.an('array')
            .and.to.eql(expected);
    });
  
    it('should be case-insensitive', () => {
        expect(staging.breastCancerPossibleTNM('IIIB'))
            .to.eql(staging.breastCancerPossibleTNM('iiib'));
        expect(staging.breastCancerPossibleTNM('iA'))
            .to.eql(staging.breastCancerPossibleTNM('Ia'));
        expect(staging.breastCancerPossibleTNM('N1mi'))
            .to.eql(staging.breastCancerPossibleTNM('N1MI'));
    });
});
