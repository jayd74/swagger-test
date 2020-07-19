# SwaggerQuikOpp.CompanyApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companyCompanyIdDelete**](CompanyApi.md#companyCompanyIdDelete) | **DELETE** /company/{companyId} | Delete company
[**companyCompanyIdGet**](CompanyApi.md#companyCompanyIdGet) | **GET** /company/{companyId} | Get company by companyId
[**companyCompanyIdPost**](CompanyApi.md#companyCompanyIdPost) | **POST** /company/{companyId} | Register New Company
[**companyCompanyIdPut**](CompanyApi.md#companyCompanyIdPut) | **PUT** /company/{companyId} | Updated company

<a name="companyCompanyIdDelete"></a>
# **companyCompanyIdDelete**
> companyCompanyIdDelete(companyId)

Delete company

This can only be done by the user of the company.

### Example
```javascript
import SwaggerQuikOpp from 'swagger_quik_opp';

let apiInstance = new SwaggerQuikOpp.CompanyApi();
let companyId = "companyId_example"; // String | The name that needs to be deleted

apiInstance.companyCompanyIdDelete(companyId, (error, data, response) => {
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
 **companyId** | **String**| The name that needs to be deleted | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="companyCompanyIdGet"></a>
# **companyCompanyIdGet**
> Company companyCompanyIdGet(companyId)

Get company by companyId

### Example
```javascript
import SwaggerQuikOpp from 'swagger_quik_opp';

let apiInstance = new SwaggerQuikOpp.CompanyApi();
let companyId = "companyId_example"; // String | The name that needs to be fetched. Use company for testing. 

apiInstance.companyCompanyIdGet(companyId, (error, data, response) => {
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
 **companyId** | **String**| The name that needs to be fetched. Use company for testing.  | 

### Return type

[**Company**](Company.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="companyCompanyIdPost"></a>
# **companyCompanyIdPost**
> companyCompanyIdPost(companyId)

Register New Company

This only called after verification of the company registration

### Example
```javascript
import SwaggerQuikOpp from 'swagger_quik_opp';

let apiInstance = new SwaggerQuikOpp.CompanyApi();
let companyId = new SwaggerQuikOpp.Company(); // Company | Created company object

apiInstance.companyCompanyIdPost(companyId, (error, data, response) => {
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
 **companyId** | [**Company**](.md)| Created company object | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="companyCompanyIdPut"></a>
# **companyCompanyIdPut**
> companyCompanyIdPut(companyId, opts)

Updated company

This can only be done by the user of the company.

### Example
```javascript
import SwaggerQuikOpp from 'swagger_quik_opp';

let apiInstance = new SwaggerQuikOpp.CompanyApi();
let companyId = "companyId_example"; // String | name that need to be updated
let opts = { 
  'body': new SwaggerQuikOpp.Company() // Company | 
};
apiInstance.companyCompanyIdPut(companyId, opts, (error, data, response) => {
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
 **companyId** | **String**| name that need to be updated | 
 **body** | [**Company**](Company.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: body
 - **Accept**: Not defined

