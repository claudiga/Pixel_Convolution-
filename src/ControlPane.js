import React, { Component } from 'react';
import {Inputs} from './Inputs'

export class ControlPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  
render() {

        var style = {
            width: '400px',
            height: '400px',
            backgroundColor: 'grey'
        };
          return (
      <div style={style}>
        
        <Inputs />
            
      </div>
    );
    }
}