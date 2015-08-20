var assert = require('assert');

var Hw = require('../index.js');  // our module

describe('Handwriting', function(){
  describe('Module Hw', function(){
  	var hw = new Hw({
  		apiKey: '',
  		apiSecret: ''
  	});
    it('should be object', function(){
    	assert.equal(typeof hw, 'object');
    });
    it('should have a getPng Method', function(){
      assert.equal(typeof hw.getPng, 'function');
    });
    it('should have a getPdf Method', function(){
      assert.equal(typeof hw.getPdf, 'function');
    });
    it('should have a getAllHandwritings Method', function(){
      assert.equal(typeof hw.getAllHandwritings, 'function');
    });
    it('getAllHandwritings should return json', function(){
    	hw.getAllHandwritings(function(err, handwritings){
    		assert.equal(handwritings.isArray(), true);
    	});
    });
    it('should have a getHandwriting Method', function(){
      assert.equal(typeof hw.getHandwriting, 'function');
    });
    it('getHandwriting should return json', function(){
    	hw.getAllHandwritings('2D5QW0F80001', function(err, handwriting){
    		assert.equal(typeof handwriting, 'object');
    		assert.equal(typeof handwriting.id, 'string');
    	});
    });
  })
}); 