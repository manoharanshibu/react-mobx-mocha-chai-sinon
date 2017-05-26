xdescribe('Pending tests', () => {

  // Sometimes you may want to not have an individual tests
  // run as part of the suite.  Perhaps it or the code it's testing
  // is unfinished.  Prepend the 'it' with 'x' to exclude it from the runner

  xit('should only run this test', () => {
    expect("hello").to.be.a('string');
  })

  // It's also a good habit to remind yourself that a test needs to be written
  // at a later date, by adding empty 'it' blocks to fill in later ...

  it('should be completed when I can be bothered')
});
