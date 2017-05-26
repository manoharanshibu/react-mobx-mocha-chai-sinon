xdescribe('Exclusive tests', () => {
// describe.only('Exclusive tests', () => {

  // When writing tests, it's sometimes useful, to only
  // run the test you're working on rather than the entire suite.
  // The 'describe' declaration above, can be appended with '.only'
  // which will mark this test to be run on it's own.  Comment out
  // the describe above, and uncomment the only version ...

  it('should only run this test', () => {
    expect("hello").to.be.a('string');
  })
});
