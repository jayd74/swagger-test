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
    instance = new SwaggerQuikOpp.Address();
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

  describe('Address', function() {
    it('should create an instance of Address', function() {
      // uncomment below and update the code to test Address
      //var instane = new SwaggerQuikOpp.Address();
      //expect(instance).to.be.a(SwaggerQuikOpp.Address);
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instane = new SwaggerQuikOpp.Address();
      //expect(instance).to.be();
    });

    it('should have the property province (base name: "province")', function() {
      // uncomment below and update the code to test the property province
      //var instane = new SwaggerQuikOpp.Address();
      //expect(instance).to.be();
    });

    it('should have the property street (base name: "street")', function() {
      // uncomment below and update the code to test the property street
      //var instane = new SwaggerQuikOpp.Address();
      //expect(instance).to.be();
    });

    it('should have the property streetNumber (base name: "streetNumber")', function() {
      // uncomment below and update the code to test the property streetNumber
      //var instane = new SwaggerQuikOpp.Address();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postalCode")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instane = new SwaggerQuikOpp.Address();
      //expect(instance).to.be();
    });

    it('should have the property longtitude (base name: "longtitude")', function() {
      // uncomment below and update the code to test the property longtitude
      //var instane = new SwaggerQuikOpp.Address();
      //expect(instance).to.be();
    });

    it('should have the property latitude (base name: "latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instane = new SwaggerQuikOpp.Address();
      //expect(instance).to.be();
    });

  });

}));
