import React, { Component } from 'react';
import {connect} from 'react-redux';

class NextStep extends Component {
  render() {
    console.log('Props are:', this.props);
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="small-12 medium-7 cell">
            <h1>Something</h1>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userinfo: state.form
  };
};



export default connect(mapStateToProps)(NextStep);
