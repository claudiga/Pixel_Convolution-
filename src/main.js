import React, { Component } from 'react';
import {ControlPane} from './ControlPane'
import {InputSection} from './InputSection'
import {OutputConvolution} from './OutputConvolution'


export class MainDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: 'not rendered yet',
    };



}



render() {

        var style = {
            width: '1000px',
            height: '5000px',
            backgroundColor: 'yellow'
        };
          return (
      <div style={style}>
        <ControlPane />
      
      <OutputConvolution  />
        


        
      </div>
    );
    }
}