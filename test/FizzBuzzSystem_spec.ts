import FizzBuzzSystem from "../src/FizzBuzzSystem";
import {expect} from 'chai';

describe('FizzBuzz', () => {
  
  var sut: FizzBuzzSystem;

  beforeEach(function() {
    sut = new FizzBuzzSystem();
  });

  describe('1st feature', () => {
    it('should ', () => {
      //ARANGE
      
      //ACT
      let result:string = sut.Say(0);
      //ASSERT
      expect(result).to.equal("0");
    });
  });
});
