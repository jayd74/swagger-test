# SwaggerQuikOpp.AuthApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authGet**](AuthApi.md#authGet) | **GET** /auth | Logs out current logged in user session
[**authPost**](AuthApi.md#authPost) | **POST** /auth | Logs user into the system

<a name="authGet"></a>
# **authGet**
> authGet()

Logs out current logged in user session

### Example
```javascript
import SwaggerQuikOpp from 'swagger_quik_opp';

let apiInstance = new SwaggerQuikOpp.AuthApi();
apiInstance.authGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="authPost"></a>
# **authPost**
> authPost(opts)

Logs user into the system

### Example
```javascript
import SwaggerQuikOpp from 'swagger_quik_opp';

let apiInstance = new SwaggerQuikOpp.AuthApi();
let opts = { 
  'body': new SwaggerQuikOpp.Body() // Body | 
};
apiInstance.authPost(opts, (error, data, response) => {
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
 **body** | [**Body**](Body.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

