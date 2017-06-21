const structuredDataRaw = [
  {
    "label": "staging",
    "firstSelection": "t-staging",
    "block": {
      "nodes": [
        {
          "kind": "block",
          "type": "structured-span",
          "data": {
            "id": "staging",
          },
          "isVoid": false,
          "nodes": [
            {
              "kind": "text",
              "ranges": [
                {
                  "text": "Staging "
                }
              ]
            },
            {
              "kind": "inline",
              "type": "structured-span",
              "data": {
                "id": "t-staging",
              },
              "nodes": [
                {
                  "kind": "text",
                  "ranges": [
                    {
                      "text": "T_ "
                    }
                  ]
                }
              ]
            }, 
            {
              "kind": "inline",
              "type": "structured-span",
              "data": {
                "id": "n-staging",
              },
              "nodes": [
                {
                  "kind": "text",
                  "ranges": [
                    {
                      "text": "N_ "
                    }
                  ]
                }
              ]
            }, 
            {
              "kind": "inline",
              "type": "structured-span",
              "data": {
                "id": "m-staging",
              },
              "nodes": [
                {
                  "kind": "text",
                  "ranges": [
                    {
                      "text": "M_ "
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    } 
  }, {
    "label": "stage",
    "firstSelection": "stage-value",
    "block": {
      "nodes": [
        {
          "kind": "block",
          "type": "structured-span",
          "data": {
            "id": "stage",
          },
          "isVoid": false,
          "nodes": [
            {
              "kind": "text",
              "ranges": [
                {
                  "text": "Stage"
                }
              ]
            },
            {
              "kind": "inline",
              "type": "structured-span",
              "data": {
                "id": "stage-value",
              },
              "nodes": [
                {
                  "kind": "text",
                  "ranges": [
                    {
                      "text": "_ "
                    }
                  ]
                }
              ]
            } 
          ]
        }
      ]
    }
  }, {
    "label": "er-receptor-status",
    "firstSelection": "er-value",
    "block": {
      "nodes": [
        {
          "kind": "block",
          "type": "structured-span",
          "data": {
            "id": "er-receptor-status",
          },
          "isVoid": false,
          "nodes": [
            {
              "kind": "text",
              "ranges": [
                {
                  "text": "ER"
                }
              ]
            },
            {
              "kind": "inline",
              "type": "structured-span",
              "data": {
                "id": "er-value",
              },
              "nodes": [
                {
                  "kind": "text",
                  "ranges": [
                    {
                      "text": "_ "
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
]

export default structuredDataRaw;
