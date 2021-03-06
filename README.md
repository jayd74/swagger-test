# swagger_quik_opp

SwaggerQuikOpp - JavaScript client for swagger_quik_opp
This is the swagger API for QuikOpp
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install swagger_quik_opp --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SwaggerQuikOpp = require('swagger_quik_opp');

var api = new SwaggerQuikOpp.AuthApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.authGet(callback);
```

## Documentation for API Endpoints

All URIs are relative to */*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SwaggerQuikOpp.AuthApi* | [**authGet**](docs/AuthApi.md#authGet) | **GET** /auth | Logs out current logged in user session
*SwaggerQuikOpp.AuthApi* | [**authPost**](docs/AuthApi.md#authPost) | **POST** /auth | Logs user into the system
*SwaggerQuikOpp.CompanyApi* | [**companyCompanyIdDelete**](docs/CompanyApi.md#companyCompanyIdDelete) | **DELETE** /company/{companyId} | Delete company
*SwaggerQuikOpp.CompanyApi* | [**companyCompanyIdGet**](docs/CompanyApi.md#companyCompanyIdGet) | **GET** /company/{companyId} | Get company by companyId
*SwaggerQuikOpp.CompanyApi* | [**companyCompanyIdPost**](docs/CompanyApi.md#companyCompanyIdPost) | **POST** /company/{companyId} | Register New Company
*SwaggerQuikOpp.CompanyApi* | [**companyCompanyIdPut**](docs/CompanyApi.md#companyCompanyIdPut) | **PUT** /company/{companyId} | Updated company
*SwaggerQuikOpp.JobApi* | [**jobsJobIdDelete**](docs/JobApi.md#jobsJobIdDelete) | **DELETE** /jobs/job/{id} | Delete Job Post
*SwaggerQuikOpp.JobApi* | [**jobsJobIdGet**](docs/JobApi.md#jobsJobIdGet) | **GET** /jobs/job/{id} | Get job by ID
*SwaggerQuikOpp.JobApi* | [**jobsJobIdPut**](docs/JobApi.md#jobsJobIdPut) | **PUT** /jobs/job/{id} | Updated Job
*SwaggerQuikOpp.JobApi* | [**jobsPost**](docs/JobApi.md#jobsPost) | **POST** /jobs | post New Job
*SwaggerQuikOpp.UserApi* | [**usersUserUserIdDelete**](docs/UserApi.md#usersUserUserIdDelete) | **DELETE** /users/user/{userId} | Delete user
*SwaggerQuikOpp.UserApi* | [**usersUserUserIdGet**](docs/UserApi.md#usersUserUserIdGet) | **GET** /users/user/{userId} | Get user by user name
*SwaggerQuikOpp.UserApi* | [**usersUserUserIdPost**](docs/UserApi.md#usersUserUserIdPost) | **POST** /users/user/{userId} | Register New User
*SwaggerQuikOpp.UserApi* | [**usersUserUserIdPut**](docs/UserApi.md#usersUserUserIdPut) | **PUT** /users/user/{userId} | Updated user

## Documentation for Models

 - [SwaggerQuikOpp.Address](docs/Address.md)
 - [SwaggerQuikOpp.ApiResponse](docs/ApiResponse.md)
 - [SwaggerQuikOpp.Body](docs/Body.md)
 - [SwaggerQuikOpp.Candidate](docs/Candidate.md)
 - [SwaggerQuikOpp.Company](docs/Company.md)
 - [SwaggerQuikOpp.History](docs/History.md)
 - [SwaggerQuikOpp.Job](docs/Job.md)
 - [SwaggerQuikOpp.User](docs/User.md)

## Documentation for Authorization

 All endpoints do not require authorization.

