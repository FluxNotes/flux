import Lang from 'lodash'
import moment from 'moment';

class Patient {
	hardCodedPatient = [
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "1",
			entryType: 	[ 	"http://standardhealthrecord.org/demographics/PersonOfRecord",
							"http://standardhealthrecord.org/actor/Person" ],
			value: { value: "Debra Hernandez672" },
			dateOfBirth: "05 APR 1966",
			placeOfBirth: { country: "US" },
			birthSex: {coding: {value: "F", displayText: "Female"}},
			administrativeGender: "female",
			race: { coding: { value: "white"}},
			ethnicity: { coding: { value: "2186-5", displayText: "Non Hispanic or Latino"}},
			maritalStatus: { coding: { value: "M", codeSystem: "http://hl7.org/fhir/v3/MaritalStatus", displayText: "Married"}},
			mothersMaidenName: { value: "Himinez221" },
			fathersName: { value: "Jose Hernandez672" },
			addressUsed: [{ value: {addressLine: [ "123 Main Street"], city: "Boston", state: "MA", country: "US"}, addressUse: { coding: { value: "primary_residence" }}}],
			telecom: [{ value: "999-555-5555", telecomType: "phone", telecomQualifier: "home"}, { value: "999-555-4444", telecomType: "phone", telecomQualifier: "mobile"}],
			languageUsed: [{ value: {coding: { value: "en-US", displayText: "English (United States)"}}}],
			originalCreationDate: "13 JAN 2012",
			lastUpdateDate: "13 JAN 2012"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "2",
			entryType:	[ "http://standardhealthrecord.org/demographics/Photograph" ],
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			when: "01 JAN 2014",
			filePath: "./DebraHernandez672.jpg",
			originalCreationDate: "13 JAN 2012",
			lastUpdateDate: "01 JAN 2014"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "3",
			entryType:	[ "http://standardhealthrecord.org/base/PatientIdentifier" ],
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			organization: { value: "MITRE"},
			identifierType: "MRN",
			value: "026-DH-678944",
			originalCreationDate: "13 JAN 2012",
			lastUpdateDate: "13 JAN 2012"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "4",
			entryType: 	[ "http://standardhealthrecord.org/core/ClinicalNote" ],
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			date: "02 AUG 2015",
			subject: "Clinical follow-up",
			hospital: "Dana Farber Cancer Institute",
			clinician: "Dr. Smith",
			content: "@NAME:'Debra Hernandez672' is a @AGE:'51 year old' @GENDER:'female' presenting with @DIAGNOSIS[Lobular carcinoma of the breast]:'Lobular carcinoma of the breast'.\nDisease #progression[Stable based on physical exam at 02.AUG.2015].",
			originalCreationDate: "02 AUG 2015",
			lastUpdateDate: "02 AUG 2015"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "5",
			entryType: 	[ "http://standardhealthrecord.org/core/ClinicalNote" ],
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			date: "12 JUL 2012",
			subject: "Consult",
			hospital: "Dana Farber Cancer Institute",
			clinician: "Dr. Zheng",
			originalCreationDate: "12 JUL 2012",
			lastUpdateDate: "12 JUL 2012"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "6",
			entryType: 	[ "http://standardhealthrecord.org/core/ClinicalNote" ],
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			date: "20 JUN 2012",
			subject: "Clinical post-op",
			hospital: "Brigham and Women's Hospital",
			clinician: "Dr. Smith",
			originalCreationDate: "20 JUN 2012",
			lastUpdateDate: "20 JUN 2012"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "7",
			entryType: 	[ "http://standardhealthrecord.org/core/ClinicalNote" ],
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			date: "16 MAY 2012",
			subject: "Clinical follow-up",
			hospital: "Dana Farber Cancer Institute",
			clinician: "Dr. Strauss",
			originalCreationDate: "16 MAY 2012",
			lastUpdateDate: "16 MAY 2012"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "8",
			entryType: 	[	"http://standardhealthrecord.org/oncology/BreastCancer",
							"http://standardhealthrecord.org/condition/Condition" ],
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			value: {coding: {value: "254837009", codeSystem: "http://snomed.info/sct", displayText: "Malignant tumor of breast"}},
			specificType: {coding: {value: "C1334276", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Invasive Ductal and Invasive Lobular Breast Carcinoma"}},
			category: {coding: {value: "#disease"}},
			clinicalStatus: "recurrence",
			includeOnProblemList: true,
			whenClinicallyRecognized: "13 JAN 2012",
			breastCancerHistologicGrade: {coding: {value: "369792005", codeSystem: "http://snomed.info/sct", displayText: "High grade or poorly differentiated"}},
			observation: [
				{
					entryType:	[	"http://standardhealthrecord.org/oncology/TumorSize",
									"http://standardhealthrecord.org/observation/Observation",
									"http://standardhealthrecord.org/base/Action" ],
					value: {value: 30.0, units: {value: "mm"}},
					specificType: {coding: {value: "C0475440", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Tumor Size"}},
					status: "final",
					_issue: "stricly speaking, the observations in this list are elements and not entries so entryType shouldn't exist but how would you know which concrete type this represents otherwise? Problem is bigger for choices where some or all choices are just elements"
				},
				{
					entryType:	[	"http://standardhealthrecord.org/oncology/BreastCancerReceptorStatus",
									"http://standardhealthrecord.org/observation/Panel",
									"http://standardhealthrecord.org/observation/Observation",
									"http://standardhealthrecord.org/base/Action" ],
					panelMembers: [
						{	value: {coding: {value: "C1446409", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Positive"}},
													receptorType: {coding: {value: "23307004", codeSystem: "http://snomed.info/sct", displayText: "Estrogen Receptor Family"}},
													specificType: {coding: {value: "16112-5", codeSystem: "http://loinc.org", displayText: "Estrogen receptor:Imp:Pt:Tiss:Nom"}},
													status: "final"},
						{	value: {coding: {value: "C1446409", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Positive"}},
													receptorType: {coding: {value: "C0034833", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Progesterone Receptor"}},
													specificType: {coding: {value: "16113-3", codeSystem: "http://loinc.org", displayText: "Progesterone receptor:Imp:Pt:Tiss:Nom"}},
													status: "final"}
					]
				}
			],
			_issue: "where capture recurrence date of 2013-10-12?",
			originalCreationDate: "13 JAN 2012",
			lastUpdateDate: "01 FEB 2012"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "9",
			entryType:	[	"http://standardhealthrecord.org/medication/MedicationPrescription",
							"http://standardhealthrecord.org/base/Request",
							"http://standardhealthrecord.org/base/Action" ],
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			medication: { value: {coding: {value: "42512", displayText: "Adriamycin"}}},
			dosage: { 	amountPerDose: {value: 60, units: {coding: {value: "mg/m2"}}},
						timingOfDoses: {value: 6, units: {coding: {value: "cycles"}}},
						doseAsNeededIndicato: false},
			status: "completed",
			requestedPerformanceTime: {	timePeriodStart: "10 FEB 2012", 
										timePeriodEnd: "20 AUG 2012"},
			reason: {entryType: "http://standardhealthrecord.org/condition/Condition", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "8"},
			originalCreationDate: "01 DEC 2013",
			lastUpdateDate: "01 DEC 2013"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "10",
			entryType:	[	"http://standardhealthrecord.org/medication/MedicationPrescription",
							"http://standardhealthrecord.org/base/Request",
							"http://standardhealthrecord.org/base/Action" ],
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			medication: { value: {coding: {value: "3002", displayText: "Cyclophosphamide"}}},
			dosage: { 	amountPerDose: {value: 10, units: {coding: {value: "mg/kg"}}},
						timingOfDoses: {value: 6, units: {coding: {value: "cycles"}}},
						doseAsNeededIndicato: false},
			status: "completed",
			requestedPerformanceTime: {	timePeriodStart: "10 FEB 2012", 
										timePeriodEnd: "20 AUG 2012"},
			reason: {entryType: "http://standardhealthrecord.org/condition/Condition", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "8"},
			originalCreationDate: "01 FEB 2012",
			lastUpdateDate: "01 FEB 2012"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "11",
			entryType:	[	"http://standardhealthrecord.org/medication/MedicationPrescription",
							"http://standardhealthrecord.org/base/Request",
							"http://standardhealthrecord.org/base/Action" ],
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			medication: { value: {coding: {value: "10324", displayText: "Tamoxifen"}}},
			dosage: { 	amountPerDose: {value: 20, units: {coding: {value: "mg"}}},
						timingOfDoses: {value: 1, units: {coding: {value: "per day"}}},
						doseAsNeededIndicato: false},
			status: "completed",
			requestedPerformanceTime: {	timePeriodStart: "01 NOV 2013", 
										timePeriodEnd: "13 AUG 2016"},
			reason: {entryType: "http://standardhealthrecord.org/condition/Condition", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "8"},
			originalCreationDate: "01 NOV 2013",
			lastUpdateDate: "01 NOV 2013"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "12",
			entryType:	[	"http://standardhealthrecord.org/medication/MedicationPrescription",
							"http://standardhealthrecord.org/base/Request",
							"http://standardhealthrecord.org/base/Action" ],
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			medication: { value: {coding: {value: "72965", displayText: "Letrozole"}}},
			dosage: { 	amountPerDose: {value: 2.5, units: {coding: {value: "mg"}}},
						timingOfDoses: {value: 1, units: {coding: {value: "per day"}}},
						doseAsNeededIndicato: false},
			status: "completed",
			requestedPerformanceTime: {	timePeriodStart: "10 JAN 2015", 
										timePeriodEnd: "10 JAN 2016"},
			reason: {entryType: "http://standardhealthrecord.org/condition/Condition", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "8"},
			originalCreationDate: "09 JAN 2015",
			lastUpdateDate: "09 JAN 2015"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "13",
			entryType:	[	"http://standardhealthrecord.org/medication/MedicationPrescription",
							"http://standardhealthrecord.org/base/Request",
							"http://standardhealthrecord.org/base/Action" ],
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			medication: { value: {coding: {value: "202421", displayText: "Coumadin"}}},
			dosage: { 	amountPerDose: {value: 2, units: {coding: {value: "mg"}}},
						timingOfDoses: {value: 1, units: {coding: {value: "per day"}}},
						doseAsNeededIndicato: false},
			status: "completed",
			requestedPerformanceTime: {	timePeriodStart: "05 SEP 2015", 
										timePeriodEnd: "01 JUN 2017"},
			reason: {entryType: "http://standardhealthrecord.org/condition/Condition", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "8"},
			originalCreationDate: "05 SEP 2015",
			lastUpdateDate: "05 SEP 2015"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "14",
			entryType:	[	"http://standardhealthrecord.org/medication/MedicationPrescription",
							"http://standardhealthrecord.org/base/Request",
							"http://standardhealthrecord.org/base/Action" ],
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			medication: { value: {coding: {value: "262105", displayText: "Aromasin"}}},
			dosage: { 	amountPerDose: {value: 25, units: {coding: {value: "mg"}}},
						timingOfDoses: {value: 1, units: {coding: {value: "per day"}}},
						doseAsNeededIndicato: false},
			status: "active",
			requestedPerformanceTime: {	timePeriodStart: "05 JUN 2017", 
										timePeriodEnd: "01 JAN 2018"},
			reason: {entryType: "http://standardhealthrecord.org/condition/Condition", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "8"},
			originalCreationDate: "05 JUN 2017",
			lastUpdateDate: "05 JUN 2017"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "15",
			entryType:	[	"http://standardhealthrecord.org/procedure/Procedure",
							"http://standardhealthrecord.org/base/Intervention",
							"http://standardhealthrecord.org/base/Action" ],
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			specificType: { coding: { value: "C0024671", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Mammography"}},
			status: "completed",
			occurrenceTime: "13 JAN 2012",
			reason: {entryType: "http://standardhealthrecord.org/condition/Condition", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "8"},
			originalCreationDate: "13 JAN 2012",
			lastUpdateDate: "13 JAN 2012"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "16",
			entryType:	[	"http://standardhealthrecord.org/procedure/Procedure",
							"http://standardhealthrecord.org/base/Intervention",
							"http://standardhealthrecord.org/base/Action" ],
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			specificType: { coding: { value: "C0454059", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Radiation therapy procedure or service"}},
			status: "completed",
			occurrenceTime: {	timePeriodStart: "12 JUL 2012", 
								timePeriodEnd: "16 AUG 2012"},
			reason: {entryType: "http://standardhealthrecord.org/condition/Condition", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "8"},
			originalCreationDate: "02 JUL 2012",
			lastUpdateDate: "02 JUL 2012"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "17",
			entryType:	[	"http://standardhealthrecord.org/procedure/Procedure",
							"http://standardhealthrecord.org/base/Intervention",
							"http://standardhealthrecord.org/base/Action" ],
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			specificType: { coding: { value: "C0851238", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Lumpectomy"}},
			status: "completed",
			occurrenceTime: "20 SEP 2012",
			reason: {entryType: "http://standardhealthrecord.org/condition/Condition", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "8"},
			originalCreationDate: "20 SEP 2012",
			lastUpdateDate: "20 SEP 2012"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "18",
			entryType:	[	"http://standardhealthrecord.org/procedure/Procedure",
							"http://standardhealthrecord.org/base/Intervention",
							"http://standardhealthrecord.org/base/Action" ],
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			specificType: { coding: { value: "C0796693", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Sentinel Lymph Node Biopsy"}},
			status: "completed",
			occurrenceTime: "20 SEP 2012",
			reason: {entryType: "http://standardhealthrecord.org/condition/Condition", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "8"},
			originalCreationDate: "20 SEP 2012",
			lastUpdateDate: "20 SEP 2012"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "19",
			entryType:	[	"http://standardhealthrecord.org/procedure/Procedure",
							"http://standardhealthrecord.org/base/Intervention",
							"http://standardhealthrecord.org/base/Action" ],
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			specificType: { coding: { value: "C0024671", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Mammography"}},
			status: "completed",
			occurrenceTime: "04 OCT 2013",
			reason: {entryType: "http://standardhealthrecord.org/condition/Condition", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "8"},
			originalCreationDate: "04 OCT 2013",
			lastUpdateDate: "04 OCT 2013"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "20",
			entryType:	[	"http://standardhealthrecord.org/oncology/Progression",
							"http://standardhealthrecord.org/assessment/Assessment" ],			
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			value: { coding: { value: "C1272745", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Improving, responding to treatment"}},
			focalCondition: {entryType: "http://standardhealthrecord.org/condition/Condition", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "8"},
			clinicallyRelevantTime: "13 JUN 2012",
			evidence: [ 	{ coding: { value: "C0031809", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "physical examination"}} ],
			assessmentType: { coding: { value: "#progression"}},
			status: "completed",
			originalCreationDate: "13 JUN 2012",
			lastUpdateDate: "13 JUN 2012"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "21",
			entryType:	[	"http://standardhealthrecord.org/oncology/Progression",
							"http://standardhealthrecord.org/assessment/Assessment" ],			
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			value: { coding: { value: "C0677874", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Complete response or remission; no measurable or observable evidence of cancer."}},
			focalCondition: {entryType: "http://standardhealthrecord.org/condition/Condition", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "8"},
			clinicallyRelevantTime: "01 NOV 2012",
			evidence: [ 	{ coding: { value: "C0011923", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "imaging"}},
							{ coding: { value: "C0031809", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "physical examination"}} ],
			assessmentType: { coding: { value: "#progression"}},
			status: "completed",
			originalCreationDate: "01 NOV 2012",
			lastUpdateDate: "01 NOV 2012"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "22",
			entryType:	[	"http://standardhealthrecord.org/oncology/Progression",
							"http://standardhealthrecord.org/assessment/Assessment" ],			
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			value: { coding: { value: "C1546960", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Worsening, disease progressing"}},
			focalCondition: {entryType: "http://standardhealthrecord.org/condition/Condition", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "8"},
			clinicallyRelevantTime: "17 APR 2014",
			evidence: [ 	{ coding: { value: "C0011923", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "imaging"}} ],
			assessmentType: { coding: { value: "#progression"}},
			status: "completed",
			originalCreationDate: "17 APR 2014",
			lastUpdateDate: "17 APR 2014"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "23",
			entryType:	[	"http://standardhealthrecord.org/oncology/Progression",
							"http://standardhealthrecord.org/assessment/Assessment" ],			
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			value: { coding: { value: "C1272745", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Improving, responding to treatment"}},
			focalCondition: {entryType: "http://standardhealthrecord.org/condition/Condition", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "8"},
			clinicallyRelevantTime: "03 JUL 2014",
			evidence: [ 	{ coding: { value: "C0030664", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "pathology"}} ],
			assessmentType: { coding: { value: "#progression"}},
			status: "completed",
			originalCreationDate: "03 JUL 2014",
			lastUpdateDate: "03 JUL 2014"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "24",
			entryType:	[	"http://standardhealthrecord.org/oncology/Progression",
							"http://standardhealthrecord.org/assessment/Assessment" ],			
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			value: { coding: { value: "C0205360", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Stable, neither improving nor worsening"}},
			focalCondition: {entryType: "http://standardhealthrecord.org/condition/Condition", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "8"},
			clinicallyRelevantTime: "14 JUN 2015",
			evidence: [ 	{ coding: { value: "C0030664", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "pathology"}},
							{ coding: { value: "C1457887", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "symptoms"}} ],
			assessmentType: { coding: { value: "#progression"}},
			status: "completed",
			originalCreationDate: "14 JUN 2015",
			lastUpdateDate: "14 JUN 2015"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "25",
			entryType:	[	"http://standardhealthrecord.org/oncology/Progression",
							"http://standardhealthrecord.org/assessment/Assessment" ],			
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			value: { coding: { value: "C0205360", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Stable, neither improving nor worsening"}},
			focalCondition: {entryType: "http://standardhealthrecord.org/condition/Condition", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "8"},
			clinicallyRelevantTime: "11 AUG 2016",
			evidence: [ 	{ coding: { value: "C0031809", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "physical examination"}},
							{ coding: { value: "C1457887", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "symptoms"}} ],
			assessmentType: { coding: { value: "#progression"}},
			status: "completed",
			originalCreationDate: "11 AUG 2016",
			lastUpdateDate: "11 AUG 2016"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "26",
			entryType:	[	"http://standardhealthrecord.org/oncology/Progression",
							"http://standardhealthrecord.org/assessment/Assessment" ],			
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			value: { coding: { value: "C1546960", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Worsening, disease progressing"}},
			focalCondition: {entryType: "http://standardhealthrecord.org/condition/Condition", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "8"},
			clinicallyRelevantTime: "15 MAY 2017",
			evidence: [ 	{ coding: { value: "C0030664", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "pathology"}},
							{ coding: { value: "C0011923", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "imaging"}},
							{ coding: { value: "C1457887", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "symptoms"}} ],
			assessmentType: { coding: { value: "#progression"}},
			status: "completed",
			originalCreationDate: "15 MAY 2017",
			lastUpdateDate: "15 MAY 2017"
		},
		{
			shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d",
			entryId: "27",
			entryType: 	[	"http://standardhealthrecord.org/condition/Injury",
							"http://standardhealthrecord.org/condition/Condition" ],
			focalSubject: {entryType: "http://standardhealthrecord.org/demographics/PersonOfRecord", shrId: "788dcbc3-ed18-470c-89ef-35ff91854c7d", entryId: "1"},
			specificType: {coding: {value: "C0016658", codeSystem: "http://ncimeta.nci.nih.gov", displayText: "Fracture"}},
			category: {coding: {value: "#structural_abnormality"}},
			clinicalStatus: "active",
			includeOnProblemList: true,
			whenClinicallyRecognized: "13 JUN 2017",
			originalCreationDate: "13 JUN 2017",
			lastUpdateDate: "13 JUN 2017"
		},
	];

	constructor() {
		this.patient = this.hardCodedPatient;
    }
	
	getName() {
		//console.log("*** START getName");
		let personOfRecord = this.getPersonOfRecord();
		if (Lang.isNull(personOfRecord)) return null;
		//console.log("PersonOfRecord = " + personOfRecord);
		//console.log("*** DONE getName");
		return personOfRecord.value.value;
	}
	
	getPersonOfRecord() {
		return this.getMostRecentEntryOfType("http://standardhealthrecord.org/demographics/PersonOfRecord");
	}
	
	getMRN() {
		let list = this.patient.filter((item) => { return item.entryType[0] === "http://standardhealthrecord.org/base/PatientIdentifier" && item.identifierType === "MRN" });
		let identifierEntry = this.getMostRecentEntryFromList(list);
		if (Lang.isNull(identifierEntry)) return null;
		return identifierEntry.value;
	}
	
	getMostRecentPhoto() {
		let photoEntry = this.getMostRecentEntryOfType("http://standardhealthrecord.org/demographics/Photograph");
		if (Lang.isNull(photoEntry)) return null;
		return photoEntry.filePath;
	}
	
	getCurrentHomeAddress() {
		let personOfRecord = this.getPersonOfRecord();
		if (Lang.isNull(personOfRecord)) return null;
		let addressUsed = personOfRecord.addressUsed.filter((item) => { return item.addressUse.coding.value === "primary_residence" });
		if (addressUsed.length === 0) return null;
		return addressUsed[0].value;
	}
	
	getConditions() {
		let result = this.getEntriesIncludingType("http://standardhealthrecord.org/condition/Condition");
		//console.log("# conditions = " + result.length);
		return result;
	}
	
	getNotes() {
		return this.getEntriesOfType("http://standardhealthrecord.org/core/ClinicalNote");
	}
	
	getKeyEventsChronologicalOrder() {
		let conditions = this.getConditions();
		let result = [];
		conditions.forEach((c, i) => {
			result.push({name: "diagnosis date - " + c.specificType.coding.displayText, start_time: c.whenClinicallyRecognized});
		});
		result.sort(this._eventTimeSorter);
		return result;
	}
	
	getMedications() {
		return this.getEntriesOfType("http://standardhealthrecord.org/medication/MedicationPrescription");
	}
	
	getMedicationsChronologicalOrder() {
		let list = this.getMedications();
		list.sort(this._medsTimeSorter);
		return list;
	}
	
	getProcedures() {
		return this.getEntriesOfType("http://standardhealthrecord.org/procedure/Procedure");
	}
	
	getProceduresChronologicalOrder() {
		let list = this.getProcedures();
		list.sort(this._proceduresTimeSorter);
		return list;
	}
	
	getProceduresForCondition(condition) {
		return this.patient.filter((item) => { 
			return item.entryType[0] === "http://standardhealthrecord.org/procedure/Procedure" && item.reason.entryId === condition.entryId;
		});
	}
	
	getProceduresForConditionChronologicalOrder(condition) {
		let list = this.getProceduresForCondition(condition);
		list.sort(this._proceduresTimeSorter);
		return list;
	}

	getObservationsForCondition(condition, type) {
		return condition.observation.filter((item) => { 
			return item.entryType[0] === type;
		});
	}
	
	getReceptorStatus(condition, receptorType) {
		let listObs = this.getObservationsForCondition(condition, "http://standardhealthrecord.org/oncology/BreastCancerReceptorStatus");
		let obs = listObs[0];
		let list = obs.panelMembers.filter((item) => {
			return item.receptorType.coding.value === receptorType;
		});
		if (list.length === 0) return null; else return list[0];
	}
	
	getProgressionsChronologicalOrder() {
		let progressions = this.getProgressions();
		progressions.sort(this._progressionTimeSorter);
		return progressions;
	}
	
	getProgressions() {
		return this.getEntriesOfType("http://standardhealthrecord.org/oncology/Progression");
	}
	
	getProgressionsForCondition(condition) {
		return this.patient.filter((item) => { 
			return item.entryType[0] === "http://standardhealthrecord.org/oncology/Progression" && item.focalCondition.entryId === condition.entryId;
		});
	}
	
	getFocalConditionForProgression(progression) {
		//console.log("focalCondition id = " + progression.focalCondition.entryId);
		let result = this.patient.filter((item) => { return item.entryType.some((t) => { return t === "http://standardhealthrecord.org/condition/Condition"; }) && item.entryId === progression.focalCondition.entryId});
		//console.log(result[0]);
		return result[0];
	}
	
    getMostRecentProgressionForCondition(condition, sinceDate = null) {
		let progressionList = this.getProgressionsForCondition(condition);
        const sortedProgressionList = progressionList.sort(this._progressionTimeSorter);
        const length = sortedProgressionList.length;
        let p = (sortedProgressionList[length - 1]);
		if (Lang.isNull(sinceDate)) return p;
		const startTime = new moment(p.clinicallyRelevantTime);
		if (startTime < sinceDate) {
			return null;
		} else {
			return p;
		}
    }
/*
	getEvents() {
	//        const timelineEvents = this.state.keyDates.concat(this.state.progression).sort(this._timeSorter);
		let result = [];
		result.push()
		
		// TODO
		//return result.sort(this._timeSorter);
		return result;
	}
	*/
	_medsTimeSorter(a, b) {
		const a_startTime = new moment(a.requestedPerformanceTime.timePeriodStart);
		const b_startTime = new moment(b.requestedPerformanceTime.timePeriodStart);
		if (a_startTime < b_startTime) { return -1; }
		if (a_startTime > b_startTime) { return 1; }
		return 0;
	}
	_progressionTimeSorter(a, b) {
		const a_startTime = new moment(a.clinicallyRelevantTime);
		const b_startTime = new moment(b.clinicallyRelevantTime);
		if (a_startTime < b_startTime) { return -1; }
		if (a_startTime > b_startTime) { return 1; }
		return 0;
	}
	_proceduresTimeSorter(a, b) {
		const a_startTime = new moment(a.occurrenceTime);
		const b_startTime = new moment(b.occurrenceTime);
		if (a_startTime < b_startTime) { return -1; }
		if (a_startTime > b_startTime) { return 1; }
		return 0;
	}
	_eventTimeSorter(a, b) {
		const a_startTime = new moment(a.start_time);
		const b_startTime = new moment(b.start_time);
		if (a_startTime < b_startTime) { return -1; }
		if (a_startTime > b_startTime) { return 1; }
		return 0;
	}

	// generic methods
	getEntriesIncludingType(type) {
		return this.patient.filter((item) => { return item.entryType.some((t) => { return t === type; }) });
	}
	
	getEntriesOfType(type) {
		return this.patient.filter((item) => { return item.entryType[0] === type });
	}
	
	getMostRecentEntryOfType(type) {
		let list = this.getEntriesOfType(type);
		//console.log(list);
		return this.getMostRecentEntryFromList(list);
	}
	
	getMostRecentEntryFromList(list) {
		if (list.length === 0) return null;
		let maxDate = Math.max.apply(null, list.map(function(o) { return new Date(o.lastUpdateDate);}));
		//console.log("maxDate = " + new Date(maxDate));
		//console.log("1st record date = " + new Date(list[0].lastUpdateDate));
		let result = list.filter((item) => { return new Date(item.lastUpdateDate).getTime() === new Date(maxDate).getTime() });
		if (Lang.isUndefined(result) || Lang.isNull(result) || result.length === 0) return null;
		//console.log("getMostRecentEntryFromList = " + result[0]);
		return result[0];
	}
}

export default Patient;
