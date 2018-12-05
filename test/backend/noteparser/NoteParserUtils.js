import moment from 'moment';
const today = new moment().format("D MMM YYYY");

export const stagingJSON = {
    "EntryType": {
        "Value": "http://standardhealthrecord.org/spec/shr/oncology/TNMStage"
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
              "Value": "52774001",
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
  },
  "ObservationComponent": [
      {
          "EntryType": {
              "Value": "http://standardhealthrecord.org/spec/shr/oncology/T_Stage"
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
                      "Value": "369900003",
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
                          "Value": "T2"
                      }
                  }
              ],
              "DisplayText": {
                  "EntryType": {
                      "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                  },
                  "Value": "T2"
              }
          }
      },
      {
          "EntryType": {
              "Value": "http://standardhealthrecord.org/spec/shr/oncology/N_Stage"
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
                      "Value": "436311000124105",
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
                          "Value": "N0"
                      }
                  }
              ],
              "DisplayText": {
                  "EntryType": {
                      "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                  },
                  "Value": "N0"
              }
          }
      },
      {
          "EntryType": {
              "Value": "http://standardhealthrecord.org/spec/shr/oncology/M_Stage"
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
                      "Value": "433581000124101",
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
                          "Value": "M0"
                      }
                  }
              ],
              "DisplayText": {
                  "EntryType": {
                      "Value": "http://standardhealthrecord.org/spec/shr/core/DisplayText"
                  },
                  "Value": "M0"
              }
          }
      }
  ]
}

export const diseaseStatusJSON = {
    "EntryType": {
        "Value": "http://standardhealthrecord.org/spec/shr/condition/DiseaseProgression"
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
                "Value": "C0205360",
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
    "FocalSubjectReference": null,
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
                        "Value": "C0011923",
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
                        "Value": "C0031809",
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
        "Value": "http://standardhealthrecord.org/spec/shr/condition/DiseaseProgression"
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
                "Value": "C0205360",
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
    "FocalSubjectReference": null,
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
                        "Value": "C0011923",
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
                        "Value": "C0031809",
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
    "ClinicallyRelevantTime": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/finding/ClinicallyRelevantTime"
        },
        "Value": "7 Jun 2017"
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
                "Value": "10028813",
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
                    "Value": "C1513374",
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
                    "Value": "#Treatment",
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
        "Value": "http://standardhealthrecord.org/spec/shr/entity/Deceased"
    },
    "Value": true,
    "DateOfDeath": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/entity/DateOfDeath"
        },
        "Value": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/GeneralizedDateTime"
            },
            "Value": "1 Oct 2017"
        }
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
            "Value": "http://standardhealthrecord.org/spec/shr/base/ClinicalStatus"
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
                    "Value": "enrolled",
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
            "Value": "http://standardhealthrecord.org/spec/shr/base/ClinicalStatus"
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
                    "Value": "enrolled",
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
            "Value": "http://standardhealthrecord.org/spec/shr/base/ClinicalStatus"
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
                    "Value": "completed",
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
   
    
    "Type": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/entity/Type"
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
                    "Value": "stop",
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
    "MedicationBeforeChange": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/medication/MedicationBeforeChange"
        }             
    },
    "ActionContext": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/action/PerformedContext"
        },
        "Reason": [
            {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/Reason"
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
                            "Value": "side_effect",
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
                "Value": "http://standardhealthrecord.org/spec/shr/action/Status"
            },
            "Value": "completed"
        }
    }
}

export const reduceMedicationJSON = {
    "EntryType": {
        "Value": "http://standardhealthrecord.org/spec/shr/medication/MedicationChange"
    },
    "Type": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/entity/Type"
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
                    "Value": "reduced",
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
    "MedicationBeforeChange": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/medication/MedicationBeforeChange"
        }
    },
    "MedicationAfterChange": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/medication/MedicationAfterChange"
        }
    },
    "ActionContext": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/action/PerformedContext"
        },
        "Reason": [
            {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/Reason"
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
                            "Value": "side_effect",
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
                "Value": "http://standardhealthrecord.org/spec/shr/action/Status"
            },
            "Value": "completed"
        }
    }
}
