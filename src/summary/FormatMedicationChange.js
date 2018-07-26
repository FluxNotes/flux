  /**
     * Formats the medicationChange date for display
     * returns a string for displaying the medChange date
     */
    exports.stringForMedicationChangeDate = (date) => { 
        return ` on ${date}`;
    };

    /**
     * Formats the medicationChange type for display
     * returns a string for displaying the medChange type
     */
    exports.stringForMedicationChangeType = (changeType) => { 
        switch (changeType) {
            case "reduced":
                return 'Reduced';
            case "increased":
                return 'Increased';
            case "temp_stop":
                return 'Temporarily stopped';
            case "swap":
                return 'Swapped';
            case "stop":
                return 'Stopped';
            default:
                console.error('Unsupported medication change type used in medication: ' + changeType)                
                return `${changeType}`;
        }
    };

    /**
     * Formats the medicationChange prior medication for display
     * returns a string for displaying information re: prior medication
     */
    exports.stringForMedicationChangePriorAmount = (changeType, medBefore) => { 
        switch (changeType) {
            case "reduced":
                return ` from ${medBefore.amountPerDose.value}${medBefore.amountPerDose.units} `;
            case "increased":
                return ` from ${medBefore.amountPerDose.value}${medBefore.amountPerDose.units} `;
            case "temp_stop":
                return ``;
            case "swap":
                return `with ${medBefore.medication}}`;
            case "stop":
                return ` (dose was ${medBefore.amountPerDose.value}${medBefore.amountPerDose.units})`;
            default:
                return `${medBefore.amountPerDose.value}${medBefore.amountPerDose.units} `;
        }
    };

    exports.stringForMedicationStoppedDosageBefore = (medBefore) => {
        return ` (dose was ${medBefore.amountPerDose.value}${medBefore.amountPerDose.units})`;
    };
