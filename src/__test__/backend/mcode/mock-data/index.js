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

export const similarPatientTreatmentsData = [
    {
        "id": "row_2",
        "displayName": "hormonal therapy",
        "totalPatients": 12,
        "deathsPerYear":[2,0,2,0,6,0],
        "sideEffects": {
            "totalReporting": 12,
            "effects": {
                "Hot Flashes": 10,
                "Decreased Libido": 9,
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
        "deathsPerYear":[0,0,0,0,6,0],
        "sideEffects": {
            "totalReporting": 82,
            "effects": {
                "Nausea/Vomiting": 77,
                "Fatigue": 70,
                "Anemia": 48,
                "Weight Loss": 42,
                "Bowel Dysfunction": 1,
                "Hot Flashe Caused By Medication": 1
            }
        }
    },
    {
        "id": "row_4",
        "displayName": "test therapy",
        "totalPatients": 10,
        "deathsPerYear":[1,0,0,0,-1,0],
        "sideEffects": {
            "totalReporting": 9,
            "effects": {
                "Nausea/Vomiting": 7,
                "Fatigue": 7,
                "Anemia": 6,
                "Weight Loss": 2,
                "Bowel Dysfunction": 1,
                "Hot Flashes": 1
            }
        }
    }
];
