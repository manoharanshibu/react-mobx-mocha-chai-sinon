xdescribe('Assertions', () => {

  // Using Chai, we have several assertion methods available to us.
  // Both enable us to make assertions about the unit of code we are testing.
  // The one you use is down to personal preferrence, although they don't both
  // work in all scenarios. Chai enable the chainable syntax, meaning we can
  // write assertions using chainable 'human' language construct.

  // @see http://chaijs.com/guide/styles/ for more info

  describe('using Expect', () => {
    it('should be a string', () => {
      expect("hello").to.be.a('string');
    })

    it('should not be a string', () => {
      expect(1).to.not.be.a('string');
    })
  })

  describe('using Should', () => {
    it('should be a string', () => {
      "hello".should.be.a('string');
    })

    it('should not be a string', () => {
      // this will fail using 'should'
      // 1.to.not.be.a('string');
    })
  })
});
