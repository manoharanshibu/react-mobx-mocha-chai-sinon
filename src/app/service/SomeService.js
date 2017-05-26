// a mock service
const service = {
  loadThings: () => 'things',
};

class SomeService {
  constructor() {
    this.things = null;
    this.history = [];
  }

  /**
   *
   */
  loadThings() {
    this.things = service.loadThings();
  }

  /**
   * @returns {T|*|string}
   */
  getThings() {
    if (!this.things) {
      this.loadThings();
    }
    return this.things;
  }
}

let inst = new SomeService();
export default inst;
