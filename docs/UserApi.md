# SwaggerQuikOpp.UserApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersUserUserIdDelete**](UserApi.md#usersUserUserIdDelete) | **DELETE** /users/user/{userId} | Delete user
[**usersUserUserIdGet**](UserApi.md#usersUserUserIdGet) | **GET** /users/user/{userId} | Get user by user name
[**usersUserUserIdPost**](UserApi.md#usersUserUserIdPost) | **POST** /users/user/{userId} | Register New User
[**usersUserUserIdPut**](UserApi.md#usersUserUserIdPut) | **PUT** /users/user/{userId} | Updated user

<a name="usersUserUserIdDelete"></a>
# **usersUserUserIdDelete**
> usersUserUserIdDelete(userId)

Delete user

This can only be done by the logged in user.

### Example
```javascript
import SwaggerQuikOpp from 'swagger_quik_opp';

let apiInstance = new SwaggerQuikOpp.UserApi();
let userId = "userId_example"; // String | The name that needs to be deleted

apiInstance.usersUserUserIdDelete(userId, (error, data, response) => {
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
 **userId** | **String**| The name that needs to be deleted | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersUserUserIdGet"></a>
# **usersUserUserIdGet**
> User usersUserUserIdGet(userId)

Get user by user name

### Example
```javascript
import SwaggerQuikOpp from 'swagger_quik_opp';

let apiInstance = new SwaggerQuikOpp.UserApi();
let userId = "userId_example"; // String | The name that needs to be fetched. Use user1 for testing. 

apiInstance.usersUserUserIdGet(userId, (error, data, response) => {
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
 **userId** | **String**| The name that needs to be fetched. Use user1 for testing.  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersUserUserIdPost"></a>
# **usersUserUserIdPost**
> usersUserUserIdPost(userId)

Register New User

This only called after verification of the user registration

### Example
```javascript
import SwaggerQuikOpp from 'swagger_quik_opp';

let apiInstance = new SwaggerQuikOpp.UserApi();
let userId = new SwaggerQuikOpp.User(); // User | Created user object

apiInstance.usersUserUserIdPost(userId, (error, data, response) => {
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
 **userId** | [**User**](.md)| Created user object | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usersUserUserIdPut"></a>
# **usersUserUserIdPut**
> usersUserUserIdPut(userId, opts)

Updated user

This can only be done by the logged in user.

### Example
```javascript
import SwaggerQuikOpp from 'swagger_quik_opp';

let apiInstance = new SwaggerQuikOpp.UserApi();
let userId = "userId_example"; // String | name that need to be updated
let opts = { 
  'body': new SwaggerQuikOpp.User() // User | 
};
apiInstance.usersUserUserIdPut(userId, opts, (error, data, response) => {
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
 **userId** | **String**| name that need to be updated | 
 **body** | [**User**](User.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: body
 - **Accept**: Not defined

