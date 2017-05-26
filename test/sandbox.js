import sinon from 'sinon';

//
// Sinon sandbox
//
beforeEach(() => {
  global.sandbox = sinon.sandbox.create();
});

afterEach(() => {
  global.sandbox.restore();
});


