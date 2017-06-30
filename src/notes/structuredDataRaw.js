const structuredDataRaw = [
  {
    "label": "staging",
    "firstSelection": "t-staging",
    "selectionAnchorOffset": 1,
    "selectionFocusOffset": -1,
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
                  "text": "#staging["
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
            }, 
            {
              "kind": "text",
              "ranges": [
                {
                  "text": "]"
                }
              ]
            },
          ]
        }
      ]
    } 
  }, {
    "label": "stage",
    "firstSelection": "stage-value",
    "selectionAnchorOffset": 0,
    "selectionFocusOffset": 0,
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
                      "text": "__"
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
    "selectionAnchorOffset": 0,
    "selectionFocusOffset": 0,
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
  }, {
    "label": "progression-status",
    "firstSelection": "progression-value",
    "selectionAnchorOffset": 0,
    "selectionFocusOffset": 0,
    "block": {
      "nodes": [
        {
          "kind": "block",
          "type": "structured-span",
          "data": {
            "id": "progression-status",
          },
          "isVoid": false,
          "nodes": [
            {
              "kind": "text",
              "ranges": [
                {
                  "text": "#progression["
                }
              ]
            },
            {
              "kind": "inline",
              "type": "structured-span",
              "data": {
                "id": "progression-value",
              },
              "nodes": [
                {
                  "kind": "text",
                  "ranges": [
                    {
                      "text": "__"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "text",
              "ranges": [
                {
                  "text": " based on "
                }
              ]
            },
            {
              "kind": "inline",
              "type": "structured-span",
              "data": {
                "id": "progression-cause",
              },
              "nodes": [
                {
                  "kind": "text",
                  "ranges": [
                    {
                      "text": "__"
                    }
                  ]
                }
              ]
            }, 
            {
              "kind": "text",
              "ranges": [
                {
                  "text": "]"
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
