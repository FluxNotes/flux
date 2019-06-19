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
        // 4 people die year 0, so the oneYrSurvival is 6.  This is how the numbers are calculated.  
        // Years 1,3,5 are set to 0 to make things easier, but could be any number.
        "survivalYears":[4,0,2,0,2,0],
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
        "survivalYears":[2,0,2,0,6,0],
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
        "survivalYears":[0,0,0,0,6,0],
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
    },
    {
        "id": "row_4",
        "displayName": "test therapy",
        "totalPatients": 10,
        "survivalYears":[1,0,0,0,-1,0],
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
