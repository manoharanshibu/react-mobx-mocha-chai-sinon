import React from 'react';
import App from './App';
import AppPM from './AppPM';
describe('app/App', () => {

  let wrapper;
  let pm;

  const create = () => {
    pm = new AppPM();
    wrapper = mount(<App pm={pm} firstName="Shibu" surName="Manoharan" />);
    return wrapper;
  };

  describe('has PM', () => {
    beforeEach(create);

    it('should have an AppPM instance as the pm prop', ()=> {
      pm.should.exist;
    });
  });

  describe('stores input refs on PM', () => {
    beforeEach(create);

    const wrapper = mount(<App />);
    wrapper.props().pm.should.exist;
    it('should store ref to firstName input on PM', ()=> {
      pm.firstName.value.should.equal('Shibu')
    });

    it('should store ref to surName input on PM', ()=> {
      pm.surName.value.should.equal('Manoharan')
    });
  });

  describe('handles button clicks', () => {

    it('should call pm.onAddHello when add button clicked', ()=> {
      const spy = sandbox.spy(AppPM.prototype, 'onAddHello');
      create().find('#add').simulate('click');
      spy.should.have.been.called;
    });

    it('should call pm.onResetHellos when reset button clicked', ()=> {
      const spy = sandbox.spy(AppPM.prototype, 'onResetHellos');
      create().find('#reset').simulate('click');
      spy.should.have.been.called;
    });

    it('should call pm.onDelayHello when delay button clicked', ()=>{
      const spy = sandbox.spy(AppPM.prototype, 'onDelayHello');
      create().find('#delay').simulate('click');
      spy.should.have.been.called;
    });
  });

  describe('renders hellos', () => {

    it('should not have any hellos initially', ()=> {
      const list = wrapper.find('ul');
      list.should.be.empty;
    });

    it('should render a hello after first button click', () => {
      const list = wrapper.find('ul');
      wrapper.find('#add').simulate('click');
      list.should.have.exactly(1).descendants('li');
    });

    it('should render 5 hellos after 5 button clicks', ()=>{
      const list = wrapper.find('ul');
      wrapper.find('#add').simulate('click');
      wrapper.find('#add').simulate('click');
      wrapper.find('#add').simulate('click');
      wrapper.find('#add').simulate('click');
      list.should.have.exactly(5).descendants('li');
    });

    it('should not have any hellos after reset clicked', ()=> {
      const list = wrapper.find('ul');
      wrapper.find('#add').simulate('click');
      wrapper.find('#add').simulate('click');
      list.should.have.exactly(7).descendants('li');
      wrapper.find('#reset').simulate('click');
      list.should.be.empty;
    });
  })
});
