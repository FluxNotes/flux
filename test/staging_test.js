const assert = require('assert');
const staging = require('../lib/staging');
const lookup = require('../lib/staging_lookup');

describe('breastCancerPrognosticStage', () => {

  it('should compute valid prognostic stages given T, N, M', () => {
    assert.equal(staging.breastCancerPrognosticStage('Tis','N0','M0'), '0');
    assert.equal(staging.breastCancerPrognosticStage('T0','N0','M0'), '0');
    assert.equal(staging.breastCancerPrognosticStage('T1','N1mi','M0'), 'IB');
    assert.equal(staging.breastCancerPrognosticStage('T3','N2','M0'), 'IIIA');
    assert.equal(staging.breastCancerPrognosticStage('T1','N2','M1'), 'IV');
  });

  it('should return null for invalid T, N, M values', () => {
    assert.equal(staging.breastCancerPrognosticStage(1,2,0), null);
    assert.equal(staging.breastCancerPrognosticStage('foo','bar',11.5), null);
  });

  it('should return null for undefined staging given T, N, M', () => {
    assert.equal(staging.breastCancerPrognosticStage('T4','N1mi','M0'), null);
    assert.equal(staging.breastCancerPrognosticStage('Tis','N1','M0'), null);
  });

  it('should be case-insensitive', () => {
    assert.equal(staging.breastCancerPrognosticStage('Tis','N0','M0'), '0');
    assert.equal(staging.breastCancerPrognosticStage('TIS','n0','M0'), '0');
    assert.equal(staging.breastCancerPrognosticStage('T1','N1mi','m0'), 'IB');
    assert.equal(staging.breastCancerPrognosticStage('t0','n1mI','M0'), 'IB');
  });

  it('should reject invalid M values', () => {
    assert.equal(staging.breastCancerPrognosticStage('T1', 'N1', 'M?'), null);
  });
});


describe('breastCancerPossibleTNM', () => {

  it('should return a list of possible T, N, M tuples given a prognostic stage', () => {
    // 5th edition, stage 'IIB'
    let expected = [
      ['T2','N1','M0'],
      ['T3','N0','M0']
    ];
    assert.deepStrictEqual(staging.breastCancerPossibleTNM('IIB', 5), expected);

    // 6th edition, stage 'IIA'
    expected = [
      ['T0','N1','M0'],
      ['T1','N1','M0'],
      ['T2','N0','M0']
    ];
    assert.deepStrictEqual(staging.breastCancerPossibleTNM('IIA', 6), expected);

    // 7th edition, stage 'IB'
    expected = [
      ['T0','N1MI','M0'],
      ['T1','N1MI','M0']
    ];
    assert.deepStrictEqual(staging.breastCancerPossibleTNM('IB', 7), expected);
  });

  it('should return all permutations of T and N for stage IV', () => {
    assert.deepStrictEqual(
      staging.breastCancerPossibleTNM('IV', 5),
      metastaticPermute(lookup.getTsForEdition(5), lookup.getNsForEdition(5))
    );

    assert.deepStrictEqual(
      staging.breastCancerPossibleTNM('IV', 6),
      metastaticPermute(lookup.getTsForEdition(6), lookup.getNsForEdition(6))
    );

    assert.deepStrictEqual(
      staging.breastCancerPossibleTNM('IV', 7),
      metastaticPermute(lookup.getTsForEdition(7), lookup.getNsForEdition(7))
    );
  });

  it('should return an empty list for an invalid staging edition', () => {
    assert.deepStrictEqual(staging.breastCancerPossibleTNM('IIB', 3), []);
    assert.deepStrictEqual(staging.breastCancerPossibleTNM('IIB', 'foo'), []);
  });

  it('should return an empty list for an unknown prognostic stage', () => {
    // these two are valid in other editions:
    assert.deepStrictEqual(staging.breastCancerPossibleTNM('I', 5), []);
    assert.deepStrictEqual(staging.breastCancerPossibleTNM('IA', 6), []);

    // there is no stage 'V' cancer
    assert.deepStrictEqual(staging.breastCancerPossibleTNM('V', 7), []);
  });

  it('should default to the 7th edition if none is specified', () => {
    // 7th edition, stage 'IA'
    const expected = [
      ['T1','N0','M0']
    ];
    assert.deepStrictEqual(staging.breastCancerPossibleTNM('IA'), expected);
  });

  it('should be case-insensitive', () => {
    assert.deepStrictEqual(staging.breastCancerPossibleTNM('IIIB'), staging.breastCancerPossibleTNM('iiib'));
    assert.deepStrictEqual(staging.breastCancerPossibleTNM('iA'), staging.breastCancerPossibleTNM('Ia'));
    assert.deepStrictEqual(staging.breastCancerPossibleTNM('N1mi'), staging.breastCancerPossibleTNM('N1MI'));
  });
});

function metastaticPermute(ts, ns) {
  let values = [];
  ts.forEach((t) => {
    ns.forEach((n) => {
      values.push([t, n, 'M1']);
    });
  });
  return values;
}
