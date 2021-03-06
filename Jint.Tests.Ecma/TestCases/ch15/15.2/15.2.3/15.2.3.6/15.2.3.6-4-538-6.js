/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-538-6.js
 * @description ES5 Attributes - Updating an indexed accessor property 'P' whose [[Configurable]] attribute is true to a data property is successful, 'O' is an Arguments object
 */


function testcase() {
        var obj = (function () {
            return arguments;
        }());

        obj.verifySetFunc = "data";
        var getFunc = function () {
            return obj.verifySetFunc;
        };

        var setFunc = function (value) {
            obj.verifySetFunc = value;
        };

        Object.defineProperty(obj, "0", {
            get: getFunc,
            set: setFunc,
            enumerable: true,
            configurable: true
        });
        var desc1 = Object.getOwnPropertyDescriptor(obj, "0");

        Object.defineProperty(obj, "0", {
            value: 1001
        });
        var desc2 = Object.getOwnPropertyDescriptor(obj, "0");

        return desc1.hasOwnProperty("get") && desc2.hasOwnProperty("value") &&
            typeof desc2.get === "undefined" && typeof desc2.get === "undefined" &&
            dataPropertyAttributesAreCorrect(obj, "0", 1001, false, true, true);
    }
runTestCase(testcase);
