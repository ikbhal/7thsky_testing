const assert = require('chai').assert;
const sayHello = require('../app').sayHello;

describe('App', function(){
    it('sayHello should return hello', function() {
        let result = sayHello();
        assert.equals(result, 'hello');
    });
    
});