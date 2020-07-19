# SwaggerQuikOpp.JobApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jobsJobIdDelete**](JobApi.md#jobsJobIdDelete) | **DELETE** /jobs/job/{id} | Delete Job Post
[**jobsJobIdGet**](JobApi.md#jobsJobIdGet) | **GET** /jobs/job/{id} | Get job by ID
[**jobsJobIdPut**](JobApi.md#jobsJobIdPut) | **PUT** /jobs/job/{id} | Updated Job
[**jobsPost**](JobApi.md#jobsPost) | **POST** /jobs | post New Job

<a name="jobsJobIdDelete"></a>
# **jobsJobIdDelete**
> jobsJobIdDelete(id)

Delete Job Post

Remove Job Post and archive it.

### Example
```javascript
import SwaggerQuikOpp from 'swagger_quik_opp';

let apiInstance = new SwaggerQuikOpp.JobApi();
let id = "id_example"; // String | job id to be removed

apiInstance.jobsJobIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| job id to be removed | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="jobsJobIdGet"></a>
# **jobsJobIdGet**
> User jobsJobIdGet(id)

Get job by ID

### Example
```javascript
import SwaggerQuikOpp from 'swagger_quik_opp';

let apiInstance = new SwaggerQuikOpp.JobApi();
let id = "id_example"; // String | The name that needs to be fetched. Use user1 for testing. 

apiInstance.jobsJobIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The name that needs to be fetched. Use user1 for testing.  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="jobsJobIdPut"></a>
# **jobsJobIdPut**
> jobsJobIdPut(id, opts)

Updated Job

Update Job Post

### Example
```javascript
import SwaggerQuikOpp from 'swagger_quik_opp';

let apiInstance = new SwaggerQuikOpp.JobApi();
let id = "id_example"; // String | name that need to be updated
let opts = { 
  'body': new SwaggerQuikOpp.Job() // Job | 
};
apiInstance.jobsJobIdPut(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| name that need to be updated | 
 **body** | [**Job**](Job.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: body
 - **Accept**: Not defined

<a name="jobsPost"></a>
# **jobsPost**
> jobsPost(opts)

post New Job

This only called after verification of the user registration

### Example
```javascript
import SwaggerQuikOpp from 'swagger_quik_opp';

let apiInstance = new SwaggerQuikOpp.JobApi();
let opts = { 
  'body': new SwaggerQuikOpp.Job() // Job | 
};
apiInstance.jobsPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Job**](Job.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: body
 - **Accept**: Not defined

