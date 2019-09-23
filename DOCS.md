# getir-case-study v0.0.0



- [Record](#record)
	- [Query on record](#query-on-record)
	- [Retrieve records](#retrieve-records)
	


# Record

## Query on record



	POST /records


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| startDate			| 			|  <p>Minimum value (inclusive) for 'createdAt' field of Record</p>							|
| endDate			| 			|  <p>Maximum value (exclusive) for 'createdAt' field of Record</p>							|
| minCount			| 			|  <p>Minimum value (inclusive) for sum of 'counts' field of Record</p>							|
| maxCount			| 			|  <p>Maximum value (exclusive) for sum of 'counts' field of Record</p>							|

## Retrieve records



	GET /records



