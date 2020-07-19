/**
 * Swagger QuikOpp
 * This is the swagger API for QuikOpp
 *
 * OpenAPI spec version: 1.0.0
 * Contact: qreateinc@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwaggerQuikOpp);
  }
}(this, function(expect, SwaggerQuikOpp) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SwaggerQuikOpp.User();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('User', function() {
    it('should create an instance of User', function() {
      // uncomment below and update the code to test User
      //var instane = new SwaggerQuikOpp.User();
      //expect(instance).to.be.a(SwaggerQuikOpp.User);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new SwaggerQuikOpp.User();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new SwaggerQuikOpp.User();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new SwaggerQuikOpp.User();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new SwaggerQuikOpp.User();
      //expect(instance).to.be();
    });

    it('should have the property contactEmail (base name: "contactEmail")', function() {
      // uncomment below and update the code to test the property contactEmail
      //var instane = new SwaggerQuikOpp.User();
      //expect(instance).to.be();
    });

    it('should have the property contactPhone (base name: "contactPhone")', function() {
      // uncomment below and update the code to test the property contactPhone
      //var instane = new SwaggerQuikOpp.User();
      //expect(instance).to.be();
    });

    it('should have the property profileType (base name: "profileType")', function() {
      // uncomment below and update the code to test the property profileType
      //var instane = new SwaggerQuikOpp.User();
      //expect(instance).to.be();
    });

    it('should have the property photoUrls (base name: "photoUrls")', function() {
      // uncomment below and update the code to test the property photoUrls
      //var instane = new SwaggerQuikOpp.User();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new SwaggerQuikOpp.User();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new SwaggerQuikOpp.User();
      //expect(instance).to.be();
    });

    it('should have the property candidateInfo (base name: "candidateInfo")', function() {
      // uncomment below and update the code to test the property candidateInfo
      //var instane = new SwaggerQuikOpp.User();
      //expect(instance).to.be();
    });

    it('should have the property companyId (base name: "companyId")', function() {
      // uncomment below and update the code to test the property companyId
      //var instane = new SwaggerQuikOpp.User();
      //expect(instance).to.be();
    });

    it('should have the property history (base name: "history")', function() {
      // uncomment below and update the code to test the property history
      //var instane = new SwaggerQuikOpp.User();
      //expect(instance).to.be();
    });

  });

}));