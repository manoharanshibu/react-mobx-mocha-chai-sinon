import Hello from '../../app/model/Hello'

describe('app/model/Hello', () => {
  let hello;

  it('constructor - should store args upon instantiation', () => {
    hello = new Hello('Frank', 'Bruno');
    hello.firstName.should.equal('Frank');
    hello.surName.should.equal('Bruno');
  });

  it('get name - should return full name', () => {
    hello = new Hello('Frank', 'Bruno');
    hello.name.should.equal('Frank Bruno');
  });
});
