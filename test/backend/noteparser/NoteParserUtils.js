import moment from 'moment';
const today = new moment().format("D MMM YYYY");

export const stagingJSON = {
    "EntryType": {
        "Value": "http://standardhealthrecord.org/spec/mcode/CancerStageInformation"
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
                    "Value": "52774001"
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

export const diseaseStatusJSON = {
    "EntryType": {
        "Value": "http://standardhealthrecord.org/spec/mcode/CancerProgression"
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
                    "Value": "C0205360"
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
                }
            }
        ],
        "DisplayText": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
            },
            "Value": "Stable"
        }
    },
    "SpecificFocusOfFinding": null,
    "Evidence": [
        {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/finding/Evidence"
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
                            "Value": "C0011923"
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
                "Value": "http://standardhealthrecord.org/spec/shr/finding/Evidence"
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
                            "Value": "C0031809"
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
    "EntryType": {
        "Value": "http://standardhealthrecord.org/spec/mcode/CancerProgression"
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
                    "Value": "C0205360"
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
                }
            }
        ],
        "DisplayText": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
            },
            "Value": "Stable"
        }
    },
    "SpecificFocusOfFinding": null,
    "Evidence": [
        {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/finding/Evidence"
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
                            "Value": "C0011923"
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
                "Value": "http://standardhealthrecord.org/spec/shr/finding/Evidence"
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
                            "Value": "C0031809"
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
    ],
    "RelevantTime": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/RelevantTime"
        },
        "Value": "7 Jun 2017"
    },
    "CreationTime": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/CreationTime"
        },
        "Value": "5 Oct 2017"
    }
}

export const toxicityJSON = {
    "EntryType": {
        "Value": "http://standardhealthrecord.org/spec/shr/adverse/ToxicReaction"
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
                    "Value": "10028813"
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
                }
            }
        ],
        "DisplayText": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
            },
            "Value": "Nausea"
        }
    },
    "SpecificFocusOfFinding": null,
    "AdverseEventGrade": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/adverse/AdverseEventGrade"
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
                        "Value": "C1513374"
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
    "CauseCategory": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/adverse/CauseCategory"
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
                        "Value": "#Treatment"
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
    },
    "SpecificFocusOfFinding": null,
    "AdverseEventAttribution": {
        "_ShrId": "test-id",
        "_EntryId": 2,
        // NOTE: The commented out format may be the correct format, but it currently gets parsed as the second format.
        // "_EntryType": {
        //     "Value": "http://standardhealthrecord.org/spec/shr/medication/MedicationRequested"
        // }
        "_EntryType": "http://standardhealthrecord.org/spec/shr/medication/MedicationRequested"
    }
}

export const deceasedJSON = {
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
}

export const clinicalTrialEnrollmentJSON = {
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

export const clinicalTrialEnrollmentMinimalJSON = {
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

export const clinicalTrialUnenrolledJSON = {
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
    "EntryType": {
        "Value": "http://standardhealthrecord.org/spec/shr/medication/MedicationChange"
    },
    "TopicCode": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/TopicCode"
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
                    "Code": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/Code"
                        },
                        "Value": "stop"
                    },
                    "DisplayText": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
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
    "Reason": [
        {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/base/Reason"
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
                            "Value": "side_effect"
                        },
                        "DisplayText": {
                            "EntryType": {
                                "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                            },
                            "Value": "Side Effect"
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
        "Value": "completed"
    }
    
}

export const reduceMedicationJSON = {
    "EntryType": {
        "Value": "http://standardhealthrecord.org/spec/shr/medication/MedicationChange"
    },
    "Status": {
        "Value": "completed",
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/Status"
        }
    },
    "TopicCode": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/TopicCode"
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
                    "Code": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/Code"
                        },
                        "Value": "reduced"
                    },
                    "DisplayText": {
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
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
    "Reason": [
        {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/base/Reason"
            },
            "Value": {
                "Coding": [
                    {
                        "Code": {
                            "EntryType": {
                                "Value": "http://standardhealthrecord.org/spec/shr/core/Code"
                            },
                            "Value": "side_effect"
                        },
                        "EntryType": {
                            "Value": "http://standardhealthrecord.org/spec/shr/core/Coding"
                        },
                        "DisplayText": {
                            "Value": "Side Effect",
                            "EntryType": {
                                "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                            }
                        }
                    }
                ],
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/CodeableConcept"
                }
            }
        }
    ]
}
