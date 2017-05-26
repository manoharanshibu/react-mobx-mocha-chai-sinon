import React from 'react';
import { observer } from 'mobx-react';
import AppPM from './AppPM';

const App = props => {
  return (
    <div className="container">
      <header>
        <h1>Hello World</h1>
      </header>
      <div className="main">
        <div>
          <input
            defaultValue={props.firstName}
            ref={ref => (props.pm.firstName = ref)}
            placeholder="First name"
          />
          <input
            defaultValue={props.surName}
            ref={ref => (props.pm.surName = ref)}
            placeholder="Surname"
          />
          <button id="add" onClick={props.pm.onAddHello}>Add Hello</button>
          <button id="reset" onClick={props.pm.onResetHellos}>Reset</button>
          <button id="delay" onClick={props.pm.onDelayHello}>Delay</button>
        </div>
        <ul>
          {props.pm.hellos.map((hello, i) => (
            <li key={i}>{`Hello ${hello.name}`}</li>
          ))}
        </ul>
      </div>
    </div>
  )
};

App.defaultProps = {
  pm: new AppPM(),
  firstName: '',
  surName: '',
};

export const Class = App;
export default observer(App);
