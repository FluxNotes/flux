export const similarPatientTreatments = [
    {
        "key": "chemotherapy",
        "name": "chemotherapy"
    },
    {
        "key": "hormonal",
        "name": "hormonal therapy"
    },
    {
        "key": "noTreatment",
        "name": "none (actively monitoring)"
    },
    {
        "key": "radiation",
        "name": "radiation therapy"
    },
    {
        "key": "surgery",
        "name": "surgery"
    }
];

export const includedTreatmentData = [
    {
        "id": "row_1",
        "displayName": "surgery & radiation therapy",
        "totalPatients": 10,
        "oneYrSurvival": 6,
        "threeYrSurvival": 4,
        "fiveYrSurvival": 2,
        "sideEffects": {
            "totalReporting": 8,
            "effects": {
                "Decreased Libido": 4,
                "Fatigue": 8,
                "Weight Loss": 6,
                "Urinary Dysfunction": 3,
                "Erectile Dysfunction": 1,
                "Anemia": 1
            }
        }
    }
];

export const comparedTreatmentData = [
    {
        "id": "row_2",
        "displayName": "hormonal therapy",
        "totalPatients": 12,
        "oneYrSurvival": 10,
        "threeYrSurvival": 8,
        "fiveYrSurvival": 2,
        "sideEffects": {
            "totalReporting": 170,
            "effects": {
                "Hot Flashes": 150,
                "Decreased Libido": 148,
                "Urinary Dysfunction": 4,
                "Erectile Dysfunction": 2,
                "Anemia": 3,
                "Weight Loss": 4,
                "Nausea/Vomiting": 1,
                "Bowel Dysfunction": 1
            }
        }
    },
    {
        "id": "row_3",
        "displayName": "chemotherapy",
        "totalPatients": 20,
        "oneYrSurvival": 20,
        "threeYrSurvival": 20,
        "fiveYrSurvival": 14,
        "sideEffects": {
            "totalReporting": 82,
            "effects": {
                "Nausea/Vomiting": 77,
                "Fatigue": 70,
                "Anemia": 48,
                "Weight Loss": 42,
                "Bowel Dysfunction": 1,
                "Hot Flashes": 1
            }
        }
    }
];
