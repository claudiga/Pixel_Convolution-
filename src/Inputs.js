import React, { Component } from 'react';

export class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      convolution: 0,
    };
  }

  _onValueChanged(e){

    //alert(e.target.value);
    this.setState({convolution: e.target.value});
  }
  
render() {

        var style = {
            width: '200px',
            height: '200px',
            backgroundColor: 'red'
        };
          return (
      <div style={style}>
        
                <input type="number" name="quantity" value={this.state.convolution} onChange={this._onValueChanged.bind(this)}/> 
                <input type="number" name="quantity" value={this.state.convolution} /> 
                <input type="number" name="quantity" value={this.state.convolution} /> 
                <input type="number" name="quantity" value={this.state.convolution} /> 



      </div>
    );
    }
}