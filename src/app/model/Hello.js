class Hello {
  firstName: '';
  surName: '';

  constructor(firstName, surName) {
    this.firstName = firstName;
    this.surName = surName;
  }

  get name() {
    return `${this.firstName} ${this.surName}`;
  }
}

export default Hello;
