import React from 'react';
import { Class as App } from '../../App';
import AppPM from '../../AppPM';

describe('Sinon Spies', () => {

  // A test spy is a function that records arguments, return value,
  // the value of this and exception thrown (if any) for all its calls.
  // Useful for asserting specific side effects have happened.

  it('should spy on click handlers', () => {
    const pm = new AppPM();
    const wrapper = mount(<App pm={pm} />);
    const spy = sandbox.spy(pm, 'onAddHello');

    wrapper.find('#add').simulate('click');
    spy.should.have.been.called;
  })
});
