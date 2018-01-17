exports.getRangeValues = (medication) => {
    if (typeof(medication) !== 'string') {return null;}
    switch(medication.toLowerCase()) {
        case "adriamycin":
            return {
                lowerValue: 10,
                upperValue: 80,
                typicalValue: 70
            };

        case "cyclophosphamide":
            return {
                lowerValue: 5,
                upperValue: 30,
                typicalValue: 11
            };

        case "tamoxifen":
            return {
                lowerValue: 5,
                upperValue: 30,
                typicalValue: 10
            };

        case "letrozole":
            return {
                lowerValue: 1,
                upperValue: 7,
                typicalValue: 2
            };

        case "coumadin":
            return {
                lowerValue: 1,
                upperValue: 6,
                typicalValue: 3
            };

        case "aromasin":
            return {
                lowerValue: 10,
                upperValue: 40,
                typicalValue: 30
            };

        default:
            return null;

    }
}

