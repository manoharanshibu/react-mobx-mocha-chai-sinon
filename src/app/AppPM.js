import { extendObservable } from 'mobx';
import Hello from './model/Hello';

class AppPM {

  delay = 1000;
  firstName = null;
  surName = null;

  constructor() {
    extendObservable(this, {
      hellos: []
    })
    this.onResetHellos = this.onResetHellos.bind(this);
    this.onDelayHello = this.onDelayHello.bind(this);
    this.onAddHello = this.onAddHello.bind(this);
  }

  onAddHello() {
    this.hellos.push(new Hello(
      this.firstName.value,
      this.surName.value
    ));
  }

  onResetHellos() {
    this.hellos = [];
  }

  onDelayHello() {
    setTimeout(() => {
      this.onAddHello();
    }, this.delay);
  }
}

export default AppPM;
