# SwaggerQuikOpp.Job

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobID** | **Number** |  | [optional] 
**companyId** | **String** |  | [optional] 
**headline** | **String** | up to 100 characters | [optional] 
**jobDescription** | **String** | up to 1000 characters | [optional] 
**jobType** | **String** |  | [optional] 
**shiftPeriod** | **String** | Morning, Afternoon, Evening | [optional] 
**shiftStartTime** | **String** | military time | [optional] 
**shiftEndTime** | **String** | military time | [optional] 
**skillCategory** | **[String]** | list from a ref table or enum | [optional] 
**skillSet** | **[String]** | list from a ref table or enum | [optional] 
**status** | **String** |  | [optional] 
**appliedCandidates** | **[String]** |  | [optional] 
**acceptedCandidate** | **String** | userId | [optional] 
**feedback** | **String** |  | [optional] 

<a name="JobTypeEnum"></a>
## Enum: JobTypeEnum

* `PartTime` (value: `"PartTime"`)
* `Contract` (value: `"Contract"`)


<a name="StatusEnum"></a>
## Enum: StatusEnum

* `New` (value: `"New"`)
* `Open` (value: `"Open"`)
* `Filled` (value: `"Filled"`)
* `Canceled` (value: `"Canceled"`)
* `Closed` (value: `"Closed"`)

