import React, { Component } from 'react';
import GetImageForm from './GetImageForm.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div>
            <h1>Mars</h1>
          </div>
          <div className='subtitle'>
            <h3>Rover</h3>
            <h3>Camera</h3>
            <h3>Viewer</h3>
          </div>
        </div>
        <GetImageForm />
      </div>
    )
  }
}
