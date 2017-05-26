/* eslint-disable import/prefer-default-export */
import React, { Component } from 'react';
import { observer } from 'mobx-react';

/**
 * Observer function / decorator
 */
export const presenter = (Presenter, View) => {
  if (Presenter && View) {
    const ViewComp = observer(View);
    class WrappedView extends Component {
      constructor(props) {
        super(props);
        this.pm = new Presenter(this);
      }

      componentDidMount() {
        this.pm.fetch && this.pm.fetch();
      }

      componentWillUnmount() {
        this.pm.dispose && this.pm.dispose();
      }

      render() {
        return (<ViewComp
          {...this.props}
          pm={this.pm}
        />);
      }
    }
    return WrappedView;
  }

  // invoked as a decorator
  return componentClass => presenter.apply(
    null, [Presenter, componentClass]);
};
