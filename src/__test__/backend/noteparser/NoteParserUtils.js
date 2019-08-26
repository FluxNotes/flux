import moment from 'moment';

import * as EntryMapper from '../../../dataaccess/McodeV05EntryMapper';

const today = new moment().format("D MMM YYYY");

const map = EntryMapper.mapEntries;

export const stagingJSON = {
    "EntryId": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/EntryId"
        }
    },
    "ShrId": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/ShrId"
        }
    },
    "EntryType": {
        "Value": "http://standardhealthrecord.org/spec/onco/core/TNMClinicalStageGroup"
    },
    "Metadata": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/Metadata"
        }
    },
    "RelevantTime": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/RelevantTime"
        }
    },
    "Status": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/Status"
        }
    },
    "Code": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/Code"
        }
    },
    "Method": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/Method"
        }
    },
    "DataValue": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/DataValue"
        },
        "Value": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
            },
            "Coding": [
                {
                    "EntryType": {
                        "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                    },
                    "CodeSystem": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/CodeSystem"
                        },
                        "Value": "urn:oid:2.16.840.1.113883.6.96"
                    },
                    "DisplayText": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                        },
                        "Value": "IIA"
                    },
                    "CodeValue": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/CodeValue"
                        },
                        "Value": "52774001"
                    }
                }
            ],
            "DisplayText": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                },
                "Value": "IIA"
            }
        }
    }
}

export const diseaseStatusJSON = {
    "EntryId": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/EntryId"
        }
    },
    "ShrId": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/ShrId"
        }
    },
    "EntryType": {
        "Value": "http://standardhealthrecord.org/spec/onco/core/CancerDiseaseStatus"
    },
    "DataValue": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/DataValue"
        },
        "Value": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
            },
            "Coding": [
                {
                    "EntryType": {
                        "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                    },
                    "CodeSystem": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/CodeSystem"
                        },
                        "Value": "http://ncimeta.nci.nih.gov"
                    },
                    "DisplayText": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                        },
                        "Value": "Stable"
                    },
                    "CodeValue": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/CodeValue"
                        },
                        "Value": "C0205360"
                    }
                }
            ],
            "DisplayText": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                },
                "Value": "Stable"
            }
        }
    },
    "EvidenceType": [
        {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/onco/core/EvidenceType"
            },
            "Value": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
                },
                "Coding": [
                    {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                        },
                        "CodeSystem": {
                            "EntryType": {
                                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeSystem"
                            },
                            "Value": "http://ncimeta.nci.nih.gov"
                        },
                        "DisplayText": {
                            "EntryType": {
                                "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                            },
                            "Value": "Imaging"
                        },
                        "CodeValue": {
                            "EntryType": {
                                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeValue"
                            },
                            "Value": "C0011923"
                        }
                    }
                ],
                "DisplayText": {
                    "EntryType": {
                        "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                    },
                    "Value": "Imaging"
                }
            }
        },
        {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/onco/core/EvidenceType"
            },
            "Value": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
                },
                "Coding": [
                    {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                        },
                        "CodeSystem": {
                            "EntryType": {
                                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeSystem"
                            },
                            "Value": "http://ncimeta.nci.nih.gov"
                        },
                        "DisplayText": {
                            "EntryType": {
                                "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                            },
                            "Value": "Physical exam"
                        },
                        "CodeValue": {
                            "EntryType": {
                                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeValue"
                            },
                            "Value": "C0031809"
                        }
                    }
                ],
                "DisplayText": {
                    "EntryType": {
                        "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                    },
                    "Value": "Physical exam"
                }
            }
        }
    ]
}

export const diseaseStatus2JSON = {
    "EntryId": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/EntryId"
        }
    },
    "ShrId": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/ShrId"
        }
    },
    "EntryType": {
        "Value": "http://standardhealthrecord.org/spec/onco/core/CancerDiseaseStatus"
    },
    "DataValue": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/DataValue"
        },
        "Value": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
            },
            "Coding": [
                {
                    "EntryType": {
                        "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                    },
                    "CodeSystem": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/CodeSystem"
                        },
                        "Value": "http://ncimeta.nci.nih.gov"
                    },
                    "DisplayText": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                        },
                        "Value": "Stable"
                    },
                    "CodeValue": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/CodeValue"
                        },
                        "Value": "C0205360"
                    }
                }
            ],
            "DisplayText": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                },
                "Value": "Stable"
            }
        }
    },
    "StatementDateTime": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/StatementDateTime"
        },
        "Value": "5 Oct 2017"
    },
    "RelevantTime": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/RelevantTime"
        },
        "Value": "7 Jun 2017"
    },
    "EvidenceType": [
        {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/onco/core/EvidenceType"
            },
            "Value": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
                },
                "Coding": [
                    {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                        },
                        "CodeSystem": {
                            "EntryType": {
                                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeSystem"
                            },
                            "Value": "http://ncimeta.nci.nih.gov"
                        },
                        "DisplayText": {
                            "EntryType": {
                                "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                            },
                            "Value": "Imaging"
                        },
                        "CodeValue": {
                            "EntryType": {
                                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeValue"
                            },
                            "Value": "C0011923"
                        }
                    }
                ],
                "DisplayText": {
                    "EntryType": {
                        "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                    },
                    "Value": "Imaging"
                }
            }
        },
        {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/onco/core/EvidenceType"
            },
            "Value": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
                },
                "Coding": [
                    {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                        },
                        "CodeSystem": {
                            "EntryType": {
                                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeSystem"
                            },
                            "Value": "http://ncimeta.nci.nih.gov"
                        },
                        "DisplayText": {
                            "EntryType": {
                                "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                            },
                            "Value": "Physical exam"
                        },
                        "CodeValue": {
                            "EntryType": {
                                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeValue"
                            },
                            "Value": "C0031809"
                        }
                    }
                ],
                "DisplayText": {
                    "EntryType": {
                        "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                    },
                    "Value": "Physical exam"
                }
            }
        }
    ]
}

export const toxicityJSON = {
    "EntryId": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/EntryId"
        }
    },
    "ShrId": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/ShrId"
        }
    },
    "EntryType": {
        "Value": "http://standardhealthrecord.org/spec/shr/core/AdverseDrugReaction"
    },
    "Metadata": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/Metadata"
        }
    },
    "Type": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/Type"
        },
        "Value": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
            },
            "Coding": [
                {
                    "EntryType": {
                        "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                    },
                    "CodeSystem": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/CodeSystem"
                        },
                        "Value": "https://www.meddra.org/"
                    },
                    "DisplayText": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                        },
                        "Value": "Nausea"
                    },
                    "CodeValue": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/CodeValue"
                        },
                        "Value": "10028813"
                    }
                }
            ],
            "DisplayText": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                },
                "Value": "Nausea"
            }
        }
    },
    "Seriousness": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/Seriousness"
        },
        "Value": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
            },
            "Coding": [
                {
                    "EntryType": {
                        "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                    },
                    "CodeSystem": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/CodeSystem"
                        },
                        "Value": "http://ncimeta.nci.nih.gov"
                    },
                    "DisplayText": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                        },
                        "Value": "Grade 2"
                    },
                    "CodeValue": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/CodeValue"
                        },
                        "Value": "C1513374"
                    }
                }
            ],
            "DisplayText": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                },
                "Value": "Grade 2"
            }
        }
    },
    "CausalAttribution": [
        {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/CausalAttribution"
            },
            "PossibleCause": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/PossibleCause"
                },
                "Value": {
                    "_ShrId": "test-id",
                    "_EntryId": 2,
                    "_EntryType": "http://standardhealthrecord.org/spec/shr/medication/MedicationRequested"
                }
            },
            "CauseCategory": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/CauseCategory"
                },
                "Value": {
                    "EntryType": {
                        "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
                    },
                    "Coding": [
                        {
                            "EntryType": {
                                "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                            },
                            "CodeSystem": {
                                "EntryType": {
                                    "Value": "http://standardhealthrecord.org/spec/shr/core/CodeSystem"
                                },
                                "Value": "https://www.meddra.org/"
                            },
                            "DisplayText": {
                                "EntryType": {
                                    "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                                },
                                "Value": "Treatment"
                            },
                            "CodeValue": {
                                "EntryType": {
                                    "Value": "http://standardhealthrecord.org/spec/shr/core/CodeValue"
                                },
                                "Value": "#Treatment"
                            }
                        }
                    ],
                    "DisplayText": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                        },
                        "Value": "Treatment"
                    }
                }
            }
        }
    ]
}

 // TODO! review these more closely
export const deceasedJSON = { };

const deceasedJSONV01 = {
    "EntryType": {
        "Value": "http://standardhealthrecord.org/spec/shr/entity/DeathInformation"
    },
    "IsDeceased": {
        "Value": true,
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/entity/IsDeceased"
        }
    },
    "DateOfDeath": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/entity/DateOfDeath"
        },
        "Value": "1 Oct 2017"
    }
};

export const clinicalTrialEnrollmentJSON = {};

export const clinicalTrialEnrollmentMinimalJSON = {};

export const clinicalTrialUnenrolledJSON = {};


const clinicalTrialEnrollmentJSONV05 = {
    "EntryType": {
        "Value": "http://standardhealthrecord.org/spec/shr/research/ResearchSubject"
    },
    "Metadata": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/Metadata"
        }
    },
    "Study": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/research/Study"
        },
        "Title": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/Title"
            },
            "Value": "PATINA"
        }
    },
    "Status": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/Status"
        },
        "Value": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
            },
            "Coding": [
                {
                    "EntryType": {
                        "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                    },
                    "Code": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/Code"
                        },
                        "Value": "enrolled"
                    },
                    "CodeSystem": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/CodeSystem"
                        },
                        "Value": "http://hl7.org/fhir/research-subject-status"
                    },
                    "DisplayText": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                        },
                        "Value": "Enrolled"
                    }
                }
            ],
            "DisplayText": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                },
                "Value": "Enrolled"
            }
        }
    },
    "ParticipationPeriod": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/ParticipationPeriod"
        },
        "Value": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/TimePeriod"
            },
            "BeginDateTime": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/BeginDateTime"
                },
                "Value": "4 Sep 2017"
            }
        }
    }
}

const clinicalTrialEnrollmentMinimalJSONV05 = {
    "EntryType": {
        "Value": "http://standardhealthrecord.org/spec/shr/research/ResearchSubject"
    },
    "Metadata": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/Metadata"
        }
    },
    "Study": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/research/Study"
        },
        "Title": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/Title"
            }
        }
    },
    "Status": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/Status"
        },
        "Value": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
            },
            "Coding": [
                {
                    "EntryType": {
                        "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                    },
                    "Code": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/Code"
                        },
                        "Value": "enrolled"
                    },
                    "CodeSystem": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/CodeSystem"
                        },
                        "Value": "http://hl7.org/fhir/research-subject-status"
                    },
                    "DisplayText": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                        },
                        "Value": "Enrolled"
                    }
                }
            ],
            "DisplayText": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                },
                "Value": "Enrolled"
            }
        }
    },
    "ParticipationPeriod": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/ParticipationPeriod"
        },
        "Value": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/TimePeriod"
            },
            "BeginDateTime": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/BeginDateTime"
                },
                "Value": "23 Aug 2019"
            }
        }
    }
}

const clinicalTrialUnenrolledJSONV05 = {
    "EntryType": {
        "Value": "http://standardhealthrecord.org/spec/shr/research/ResearchSubject"
    },
    "Metadata": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/Metadata"
        }
    },
    "Study": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/research/Study"
        },
        "Title": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/Title"
            },
            "Value": "PATINA"
        }
    },
    "Status": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/Status"
        },
        "Value": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
            },
            "Coding": [
                {
                    "EntryType": {
                        "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                    },
                    "Code": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/Code"
                        },
                        "Value": "completed"
                    },
                    "CodeSystem": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/CodeSystem"
                        },
                        "Value": "http://hl7.org/fhir/research-subject-status"
                    },
                    "DisplayText": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                        },
                        "Value": "Completed"
                    }
                }
            ],
            "DisplayText": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                },
                "Value": "Completed"
            }
        }
    },
    "ParticipationPeriod": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/ParticipationPeriod"
        },
        "Value": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/TimePeriod"
            },
            "EndDateTime": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/EndDateTime"
                },
                "Value": "6 Oct 2017"
            }
        }
    }
}

const clinicalTrialEnrollmentJSONV01 = {
    "EntryType": {
        "Value": "http://standardhealthrecord.org/spec/shr/research/ResearchSubject"
    },
    "Study": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/research/Study"
        },
        "Title": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/Title"
            },
            "Value": "PATINA"
        }
    },
    "Status": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/Status"
        },
        "Value": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
            },
            "Coding": [
                {
                    "EntryType": {
                        "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                    },
                    "Code": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/Code"
                        },
                        "Value": "enrolled"
                    },
                    "CodeSystem": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/CodeSystem"
                        },
                        "Value": "http://hl7.org/fhir/research-subject-status"
                    },
                    "DisplayText": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                        },
                        "Value": "Enrolled"
                    }
                }
            ],
            "DisplayText": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                },
                "Value": "Enrolled"
            }
        }
    },
    "ParticipationPeriod": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/ParticipationPeriod"
        },
        "Value": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/TimePeriod"
            },
            "TimePeriodStart": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/TimePeriodStart"
                },
                "Value": "4 Sep 2017"
            }
        }
    }
}

const clinicalTrialEnrollmentMinimalJSONV01 = {
    "EntryType": {
        "Value": "http://standardhealthrecord.org/spec/shr/research/ResearchSubject"
    },
    "Study": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/research/Study"
        },
        "Title": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/Title"
            },
            "Value": null
        }
    },
    "Status": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/Status"
        },
        "Value": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
            },
            "Coding": [
                {
                    "EntryType": {
                        "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                    },
                    "Code": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/Code"
                        },
                        "Value": "enrolled"
                    },
                    "CodeSystem": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/CodeSystem"
                        },
                        "Value": "http://hl7.org/fhir/research-subject-status"
                    },
                    "DisplayText": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                        },
                        "Value": "Enrolled"
                    }
                }
            ],
            "DisplayText": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                },
                "Value": "Enrolled"
            }
        }
    },
    "ParticipationPeriod": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/ParticipationPeriod"
        },
        "Value": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/TimePeriod"
            },
            "TimePeriodStart": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/TimePeriodStart"
                },
                "Value": today
            }
        }
    }
}

const clinicalTrialUnenrolledJSONV01 = {
    "EntryType": {
        "Value": "http://standardhealthrecord.org/spec/shr/research/ResearchSubject"
    },
    "Study": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/research/Study"
        },
        "Title": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/Title"
            },
            "Value": "PATINA"
        },
    },
    "Status": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/Status"
        },
        "Value": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
            },
            "Coding": [
                {
                    "EntryType": {
                        "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                    },
                    "Code": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/Code"
                        },
                        "Value": "completed"
                    },
                    "CodeSystem": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/CodeSystem"
                        },
                        "Value": "http://hl7.org/fhir/research-subject-status"
                    },
                    "DisplayText": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                        },
                        "Value": "Completed"
                    }
                }
            ],
            "DisplayText": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                },
                "Value": "Completed"
            }
        }
    },
    "ParticipationPeriod": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/ParticipationPeriod"
        },
        "Value": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/TimePeriod"
            },
            "TimePeriodEnd": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/TimePeriodEnd"
                },
                "Value": "6 Oct 2017"
            }
        }
    }
}

export const stopMedicationJSON = {
    "EntryId": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/EntryId"
        }
    },
    "ShrId": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/ShrId"
        }
    },
    "EntryType": {
        "Value": "http://standardhealthrecord.org/spec/shr/core/MedicationStatement"
    },
    "Metadata": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/Metadata"
        }
    },
    "StatementDateTime": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/StatementDateTime"
        }
    },
    "TreatmentIntent": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/TreatmentIntent"
        },
        "Value": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
            },
            "Coding": [
                {
                    "EntryType": {
                        "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                    },
                    "CodeSystem": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/CodeSystem"
                        },
                        "Value": "http://standardhealthrecord.org/spec/shr/medication/cs/#MedicationChangeTypeCS"
                    },
                    "DisplayText": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                        },
                        "Value": "stop"
                    },
                    "CodeValue": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/CodeValue"
                        },
                        "Value": "stop"
                    }
                }
            ],
            "DisplayText": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                },
                "Value": "stop"
            }
        }
    },
    "ReasonCode": [
        {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/ReasonCode"
            },
            "Value": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
                },
                "Coding": [
                    {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                        },
                        "DisplayText": {
                            "EntryType": {
                                "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                            },
                            "Value": "Side Effect"
                        },
                        "CodeValue": {
                            "EntryType": {
                                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeValue"
                            },
                            "Value": "side_effect"
                        }
                    }
                ]
            }
        }
    ],
    "Status": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/Status"
        },
        "Value": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
            },
            "Coding": [
                {
                    "EntryType": {
                        "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                    },
                    "CodeSystem": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/CodeSystem"
                        },
                        "Value": "http://hl7.org/fhir/STU3/valueset-request-status.html"
                    },
                    "CodeValue": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/CodeValue"
                        },
                        "Value": "completed"
                    }
                }
            ],
            "DisplayText": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                },
                "Value": "completed"
            }
        }
    }
}

export const reduceMedicationJSON = {
    "EntryId": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/EntryId"
        }
    },
    "ShrId": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/ShrId"
        }
    },
    "EntryType": {
        "Value": "http://standardhealthrecord.org/spec/shr/core/MedicationStatement"
    },
    "Metadata": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/Metadata"
        }
    },
    "StatementDateTime": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/StatementDateTime"
        }
    },
    "TreatmentIntent": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/TreatmentIntent"
        },
        "Value": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
            },
            "Coding": [
                {
                    "EntryType": {
                        "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                    },
                    "CodeSystem": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/CodeSystem"
                        },
                        "Value": "http://standardhealthrecord.org/spec/shr/medication/cs/#MedicationChangeTypeCS"
                    },
                    "DisplayText": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                        },
                        "Value": "reduced"
                    },
                    "CodeValue": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/CodeValue"
                        },
                        "Value": "reduced"
                    }
                }
            ],
            "DisplayText": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                },
                "Value": "reduced"
            }
        }
    },
    "ReasonCode": [
        {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/ReasonCode"
            },
            "Value": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
                },
                "Coding": [
                    {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                        },
                        "DisplayText": {
                            "EntryType": {
                                "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                            },
                            "Value": "Side Effect"
                        },
                        "CodeValue": {
                            "EntryType": {
                                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeValue"
                            },
                            "Value": "side_effect"
                        }
                    }
                ]
            }
        }
    ],
    "Status": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/Status"
        },
        "Value": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
            },
            "Coding": [
                {
                    "EntryType": {
                        "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                    },
                    "CodeSystem": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/CodeSystem"
                        },
                        "Value": "http://hl7.org/fhir/STU3/valueset-request-status.html"
                    },
                    "CodeValue": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/CodeValue"
                        },
                        "Value": "completed"
                    }
                }
            ],
            "DisplayText": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                },
                "Value": "completed"
            }
        }
    }
}
