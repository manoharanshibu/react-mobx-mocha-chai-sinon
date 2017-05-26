xdescribe('Async tests', () => {

  // Often the code you need to test, is asynchronously in nature.
  // Mocha can handle this using the 'done' callback method.  'done'
  // should be invoked when the async test completes.

  it('should complete asynchronously', (done) => {
    setTimeout(() => {
      expect("hello").to.be.a('string');
      done();
    }, 1000);
  })
});
