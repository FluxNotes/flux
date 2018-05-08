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
    "CreationTime": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/CreationTime"
        },
        "Value": today
    },
    "LastUpdated": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/LastUpdated"
        },
        "Value": today
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
    "CreationTime": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/core/CreationTime"
        },
        "Value": "5 Oct 2017"
    },
    "LastUpdated": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/base/LastUpdated"
        },
        "Value": today
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
    "ParticipationPeriod": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/action/ParticipationPeriod"
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
    "ParticipationPeriod": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/action/ParticipationPeriod"
        },
        "Value": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/TimePeriod"
            },
            "TimePeriodStart": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/TimePeriodStart"
                },
                "Value": null
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
    "ParticipationPeriod": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/action/ParticipationPeriod"
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

export const clinicalTrialUnenrolledMinimalJSON = {
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
        },
    },
    "ParticipationPeriod": {
        "EntryType": {
            "Value": "http://standardhealthrecord.org/spec/shr/action/ParticipationPeriod"
        },
        "Value": {
            "EntryType": {
                "Value": "http://standardhealthrecord.org/spec/shr/core/TimePeriod"
            },
            "TimePeriodEnd": {
                "EntryType": {
                    "Value": "http://standardhealthrecord.org/spec/shr/core/TimePeriodEnd"
                },
                "Value": null
            }
        }
    }
}
