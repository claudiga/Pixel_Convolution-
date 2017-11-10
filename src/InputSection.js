import React from 'react';
import pic from './cube.jpg';
export class InputSection extends React.Component{

constructor(props){
super(props);

this.state = {
width: 300,
height: 300,
imageURL: pic

}
};

componentDidMount(){
	
	  
alert("rendered input")

}

_onImageChanged(){

this.setState({imageURL: this.refs.image.src});


this._imageToCanvas();


var imageData = this.refs.inputCanvas;
this.props.ImD(imageData)
}

_imageToCanvas(){
	var ctx = this.refs.inputCanvas.getContext('2d');

	ctx.drawImage(this.refs.image,0,0,this.state.width,this.state.height);
}


render(){

var style = {
width: '400px',
height: '500px',
background: 'red'
};

return(
<div style={style}>

<h1> Input image </h1>
<br/>

<img  ref="image" src={this.state.imageURL} onLoad={this._onImageChanged.bind(this)} />
<canvas style={{display:'none'}}width={300} height={300} ref="inputCanvas" >

</canvas>
</div>
);

}

}