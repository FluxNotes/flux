// Generated by CoffeeScript 1.12.7
(function() {
  module.exports = {
    "library": {
      "identifier": {
        "id": "gender",
        "version": "1"
      },
      "schemaIdentifier": {
        "id": "urn:hl7-org:elm",
        "version": "r1"
      },
      "usings": {
        "def": [
          {
            "localIdentifier": "System",
            "uri": "urn:hl7-org:elm-types:r1"
          }, {
            "localIdentifier": "FHIR",
            "uri": "http://hl7.org/fhir",
            "version": "1.0.2"
          }
        ]
      },
      "includes": {
        "def": [
          {
            "localIdentifier": "FHIRHelpers",
            "path": "FHIRHelpers",
            "version": "1.0.2"
          }
        ]
      },
      "statements": {
        "def": [
          {
            "name": "Patient",
            "context": "Patient",
            "expression": {
              "type": "SingletonFrom",
              "operand": {
                "dataType": "{http://hl7.org/fhir}Patient",
                "type": "Retrieve"
              }
            }
          }, {
            "name": "Is Female",
            "context": "Patient",
            "accessLevel": "Public",
            "expression": {
              "type": "Equal",
              "operand": [
                {
                  "path": "value",
                  "type": "Property",
                  "source": {
                    "path": "gender",
                    "type": "Property",
                    "source": {
                      "name": "Patient",
                      "type": "ExpressionRef"
                    }
                  }
                }, {
                  "valueType": "{urn:hl7-org:elm-types:r1}String",
                  "value": "female",
                  "type": "Literal"
                }
              ]
            }
          }
        ]
      }
    }
  };

}).call(this);

//# sourceMappingURL=gender.js.map
