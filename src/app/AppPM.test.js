import React from 'react';
import AppPM from './AppPM';
import App from './App';
import Hello from './model/Hello';


describe('app/AppPM', () => {
  let wrapper;
  let pm;

  beforeEach(() => {
    pm = new AppPM();
    wrapper = mount(
      <App pm={pm}
           firstName="Frank"
           surName="Bruno"
      />
    );
  });

  describe('hellos', () => {
    it('should have zero Hellos initially', ()=> {
      pm.hellos.length.should.equal(0);
    });

    it('should add Hellos to hello array', ()=>{
      wrapper.find('#add').simulate('click');
      pm.hellos.length.should.equal(1);
    });

    it('should create Hello instances', ()=>{
      wrapper.find('#add').simulate('click');
      const hello = pm.hellos[0];
      hello.should.be.an.instanceOf(Hello);
    });

    it('should create Hello instances with name props', ()=>{
      wrapper.find('#add').simulate('click');
      const hello = pm.hellos[0];
      hello.firstName.should.equal('Frank');
      hello.surName.should.equal('Bruno');
    });

    it('should clear the hellos array', ()=>{
      wrapper.find('#add').simulate('click');
      pm.hellos.length.should.equal(1);
      wrapper.find('#reset').simulate('click');
      pm.hellos.length.should.equal(0);
    });

  });

  describe('onDelayHello', () => {
    it('should call onAddHello after 2000 ms', (done)=>{
      sandbox.stub(pm, 'onAddHello').callsFake(done);
      pm.onDelayHello();
    });
  });
});
