/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.3/15.3.4/15.3.4.5/15.3.4.5-2-14.js
 * @description Function.prototype.bind throws TypeError if 'Target' is a string
 */
function testcase() {
        try {
            Function.prototype.bind.call("abc");
            return false;
        } catch (e) {
            return (e instanceof TypeError);
        }
    }
runTestCase(testcase);
