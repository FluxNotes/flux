exports.getRangeValues = (medication) => {
    if (typeof(medication) !== 'string') {return null;}

    switch(medication) {
        case "42512":
            return {
                lowerValue: 1,
                upperValue: 10,
                typicalValue: 8
            };

        case "3002":
            return {
                lowerValue: 5,
                upperValue: 30,
                typicalValue: 11
            };

        case "10324":
            return {
                lowerValue: 1,
                upperValue: 5,
                typicalValue: 2
            };

        case "72965":
            return {
                lowerValue: 1,
                upperValue: 7,
                typicalValue: 2
            };

        case "202421":
            return {
                lowerValue: 1,
                upperValue: 6,
                typicalValue: 3
            };

        case "262105":
            return {
                lowerValue: 1,
                upperValue: 1.5,
                typicalValue: 1.3
            };

        default:
            return null;

    }
}

