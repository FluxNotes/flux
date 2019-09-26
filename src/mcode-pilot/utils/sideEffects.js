export default function getSideEffects(similarPatientTreatmentsData) {
    const allTreatmentData = [...similarPatientTreatmentsData];
    const allEffects = allTreatmentData.map(effect => Object.keys(effect.sideEffects.effects));

    return allEffects.reduce((p, c) => {
        // concat the arrays, filter out duplicate entries
        return p.concat(c.filter(cx => p.indexOf(cx) < 0));
    }, []).sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
};
