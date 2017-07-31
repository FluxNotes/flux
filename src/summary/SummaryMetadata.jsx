import Lang from 'lodash'
import moment from 'moment';

class SummaryMetadata {
	hardCodedMetadata = { "http://ncimeta.nci.nih.gov/C1334276" :	{ sections: [	{ 	name: "Current Diagnosis",
																							items:	[	{ name: "Name", value: (patient, currentConditionEntry) => { return currentConditionEntry.specificType.coding.displayText; }},
																										{ name: "Stage", value: (patient, currentConditionEntry) => { if (Lang.isUndefined(currentConditionEntry.staging)) { return null; } else { return "T" + currentConditionEntry.staging.tumorSize + "N" + currentConditionEntry.staging.nodeMetastasis + "M" + currentConditionEntry.staging.metastasis } }}
																								    ]},
																						{	name: "Progression",
																							items:	[	{ name: "Current Progression", value: (patient, currentConditionEntry) => { let p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months')); if (Lang.isNull(p)) return null; else return p.value.coding.displayText; }},
																										{ name: "Progression Date", value: (patient, currentConditionEntry) => { let p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months')); if (Lang.isNull(p)) return null; else return p.clinicallyRelevantTime; }},
																										{ name: "Progression Basis", value: (patient, currentConditionEntry) => { let p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months')); if (Lang.isNull(p)) return null; else return p.evidence.map(function(ev){ return ev.coding.displayText; }).join(); }}
																									]},
																						{ 	name: "Key Dates",
																							items:	[	{ name: "Diagnosis", value: (patient, currentConditionEntry) => { return currentConditionEntry.whenClinicallyRecognized }},
																										{ name: "Recurence", value: (patient, currentConditionEntry) => { return null; }}
																									]},
																						{ 	name: "Procedures", itemsFunction: this.getItemListForProcedures },
																						{ 	name: "Pathology Results (Initial Diagnosis)",
																							items:	[	{ name: "Color", value: null },
																										{ name: "Weight", value: null },
																										{ name: "Size", value: (patient, currentConditionEntry) => { let list = patient.getObservationsForCondition(currentConditionEntry, "http://standardhealthrecord.org/oncology/TumorSize"); return list[0].value.value + " " + list[0].value.units.value; }},
																										{ name: "Tumor Margins", value: null },
																										{ name: "Histological Grade", value: (patient, currentConditionEntry) => { return currentConditionEntry.breastCancerHistologicGrade.coding.displayText; }},
																										{ name: "Receptor Status ER", value: (patient, currentConditionEntry) => { let er = patient.getReceptorStatus(currentConditionEntry, "23307004"); if (Lang.isNull(er)) { return null; } else { return er.value.coding.displayText; } }},
																										{ name: "Receptor Status PR", value: (patient, currentConditionEntry) => { let pr = patient.getReceptorStatus(currentConditionEntry, "C0034833"); if (Lang.isNull(pr)) { return null; } else { return pr.value.coding.displayText; } }},
																										{ name: "Receptor Status HER2", value: (patient, currentConditionEntry) => { let her2 = patient.getReceptorStatus(currentConditionEntry, "C0069515"); if (Lang.isNull(her2)) { return null; } else { return her2.value.coding.displayText; } }}
																									]},
																						{ 	name: "Genetics",
																							items:	[	{ name: "Oncotype DX Recurrence Score", value: null},
																										{ name: "Genetic Testing", value: null }
																									]}
																					]},
								  "default":								{ sections: [	{	name: "Current Diagnosis",
																							items:	[	{ name: "Name", value: (patient, currentConditionEntry) => { return currentConditionEntry.specificType.coding.displayText; }}
																									]},
																							{ 	name: "Key Dates",
																							items:	[	{ name: "Diagnosis", value: (patient, currentConditionEntry) => { return currentConditionEntry.whenClinicallyRecognized }}
																									]},
																							{ 	name: "Procedures", itemsFunction: this.getItemListForProcedures },
																						]}
								};
	constructor() {
		this.metadata = this.hardCodedMetadata;
	}
	
	getMetadata() {
		return this.metadata;
	}

	getItemListForProcedures(patient, currentConditionEntry) {
		let procedures = patient.getProceduresForConditionChronologicalOrder(currentConditionEntry);
		return procedures.map((p, i) => {
			if (Lang.isObject(p.occurrenceTime)) {
				return {name: p.specificType.coding.displayText, value: p.occurrenceTime.timePeriodStart + " to " + p.occurrenceTime.timePeriodEnd};
			} else {
				return {name: p.specificType.coding.displayText, value: p.occurrenceTime };
			}
		});
	}
}

export default SummaryMetadata;