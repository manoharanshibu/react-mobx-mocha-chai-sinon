import service from '../../service/SomeService';

xdescribe('Sinon Mocks', () => {

  // Mocks should be used when needing to stub more complex objects.  In most scenarios,
  // stubs and spies should do what you need.  But a method that has many side effects,
  // ie. calls a number of other functions as part of it's execution, may be impossible
  // to stub.  With mocks we define upfront, all the things we'd expect from the outcome

  it('should use the mock service rather than the original', () => {

    // mock the service
    const mock = sinon.mock(service);
    // set our expectation that loadThings should be called once
    mock.expects("loadThings").once()

    // call the original
    service.getThings();

    // and verify that the expectation was met
    mock.verify();
    mock.restore();
  })
});
