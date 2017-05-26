import { add, subtract } from '../../util/maths';

describe('Describe blocks', () => {

  // In order to better visualise whats being tested and encapsulate
  // different areas/methods that you're testing, use 'describe' blocks.
  // These can be nested as much as you like.

  describe('util/maths', () => {

    describe('add', () => {
      it('should add 2 + 2', () => {
        expect(add(2, 2)).to.equal(4);
      })
      it('should add 4 + 2', () => {
        expect(add(4, 2)).to.equal(6);
      })
    })

    describe('subtract', () => {
      it('should subtract 1 from 2', () => {
        expect(subtract(2, 1)).to.equal(1);
      })
      it('should subtract 3 from 4', () => {
        expect(subtract(4, 3)).to.equal(1);
      })
    })
  });
});
