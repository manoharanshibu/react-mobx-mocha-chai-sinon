import service from '../../service/SomeService';

xdescribe('Sinon stubs', () => {

  // A useful tool for faking and returning data when otherwise not available is Sinon.
  // It has three core components.
  // * Stubbing - providing fake data when needed
  // * Mocking - Provide alternative implementations to existing functionality, and
  // * Spying - Listening to side-effects on objects, as a result of some action

  // Sinon is configured as part of the mocha setup process, and provides a 'sandbox'
  // global object, that clears up after it self when the tests have run

  it('should return stubbed data', () => {
    sandbox.stub(service, 'getThings').callsFake(() => 'myThings');
    service.getThings().should.equal('myThings');
  })
});
