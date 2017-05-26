
// Our first simple test.  Assert that the string "hello" is indeed a string.
// Tests should be wrapped in a 'describe' block.  Give it a descriptive name
// so we know what this test relates to.  If this test is testing a ceertain class,
// use the full class path so we can easily identify whats being tested and track it
// down should errors need to be rectified or modifications made

xdescribe('Our first test', () => {
  it('should run outside describe block', () => {
    expect("hello").to.be.a('string');
  })
})
