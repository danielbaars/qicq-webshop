import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import App from './App';

import axios from 'axios';
const DATA_URL = '../data/qicqData.json';

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  componentDidMount() {
    var _this = this;
    axios.get(DATA_URL).then(response => {
      _this.setState({
        data: response.data
      });
    });
  }
  render() {
    const { store, history } = this.props;
    const dataLength = Object.keys(this.state.data).length;
    if (dataLength > 0) {
      return (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <App data={this.state.data} />
          </ConnectedRouter>
        </Provider>
      );
    } else {
      return null;
    }

  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
