const lookup = require('./tnmstage_lookup.jsx');
const Lang = require('lodash/lang');

// Computes the prognostic stage of breast cancer given T, N, M.
// Uses the 7th staging edition, see:
// https://cancerstaging.org/references-tools/quickreferences/Documents/BreastMedium.pdf

exports.breastCancerPrognosticStage = (t, n, m) => {
    // Regardless of edition, metastatic cancer is always stage IV

    // if m === M1, return stage IV, n and t values do not need to be set
    if (!Lang.isUndefined(m) && !Lang.isNull(m) && m.length > 0 && m.toUpperCase() === 'M1') return 'IV';

    // 7th edition staging, lookup[T][N]
    // null return values mean the staging is undefined for those T,N,M values
    if (Lang.isUndefined(n) || Lang.isUndefined(t) || Lang.isNull(n) || Lang.isNull(t) || n.length === 0 || t.length === 0) return '';
    const ni = (lookup.getNsNamesForEdition(7)).indexOf(titlecase(n.toString()));
    const ti = (lookup.getTsNamesForEdition(7)).indexOf(titlecase(t.toString()));
    if (ti === -1 || ni === -1) {
        // Unrecognized T or N value
        return '';
    }

    return lookup.getTableForEdition(7)[ti][ni];
}


// Converts a prognostic stage (e.g. 'IIIA') into a list of possible T,N,M
// values based on the specified staging edition. If none specified, defaults
// to the 7th edition.
exports.breastCancerPossibleTNM = (prognosticStage, edition = 7) => {
    let values = [];

    // Lookup the needed values for the specified edition
    const ed = parseInt(edition, 10);
    const ts = lookup.getTsForEdition(ed);
    const ns = lookup.getNsForEdition(ed);
    const table = lookup.getTableForEdition(ed);

    // Regardless of edition, stage IV is handled the same way
    const stage = prognosticStage.toString().toUpperCase();

    if (stage === 'IV') {
        ts.forEach((t) => {
            ns.forEach((n) => {
                values.push([t.name, n.name, 'M1']);
            });
        });
        return values;
    }

    // No lookup means an invalid or unsupported edition
    if (!table) {
        return [];
    }

    // Find all T,N,M matches for the prognostic stage specified
    table.forEach((row, t) => {
        row.forEach((el, n) => {
            if (el === stage) {
                values.push([ts[t].name, ns[n].name, 'M0']);
            }
        });
    });
    return values;
}

function titlecase(label) {
    return label.toLowerCase().split(' ').map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}