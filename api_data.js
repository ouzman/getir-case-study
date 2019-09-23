define({ "api": [
  {
    "type": "post",
    "url": "/records",
    "title": "Query on record",
    "name": "Query",
    "group": "Record",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "startDate",
            "description": "<p>Minimum value (inclusive) for 'createdAt' field of Record</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "endDate",
            "description": "<p>Maximum value (exclusive) for 'createdAt' field of Record</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "minCount",
            "description": "<p>Minimum value (inclusive) for sum of 'counts' field of Record</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "maxCount",
            "description": "<p>Maximum value (exclusive) for sum of 'counts' field of Record</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "record",
            "description": "<p>Record's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/record/index.js",
    "groupTitle": "Record"
  },
  {
    "type": "get",
    "url": "/records",
    "title": "Retrieve records",
    "name": "RetrieveRecords",
    "group": "Record",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "records",
            "description": "<p>List of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/record/index.js",
    "groupTitle": "Record"
  }
] });
