import Hello from './Hello';

describe('app/model/Hello', () => {
  let hello;

  it('constructor - should store args upon instantiation', ()=>{
    hello = new Hello('Shibu', 'Manoharan');
    hello.firstName.should.equal('Shibu');
    hello.surName.should.equal('Manoharan');
  });

  it('get name - should return full name', ()=> {
    hello = new Hello('Shibu', 'Manoharan');
    hello.name.should.equal('Shibu Manoharan');
  });
});
