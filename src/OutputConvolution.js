import React from 'react';
import {InputSection} from './InputSection'

export class OutputConvolution extends React.Component{

constructor(props){

super(props);
this.state={
imDD: 'hi',
};
this.getData = this.getData.bind(this);

    this.conv = this.conv.bind(this);

}

componentDidMount(){
  

alert("rendered outputi" + this.state.imDD)

//this.conv(this.);
}

getData(val){


//this.setState({imDD: val})
this.conv(val);

}
  

_getPicMatrix(d){
  var ar = d.getContext("2d").getImageData(0,0,300,300).data;
  
  var can =[];
  var tempcan = [];
var ind = 0;
  for(var i =0; i < 300 ; i++){
    can[i] = []
    tempcan[i] =[]
    for(var j = 0; j < 300*4; j++){
        
      can[i][j] = ar[ind]
      tempcan[i][j]=0;
                                ind++;

        }
        
        }

        return [can, tempcan]

}

_unfoldBack(tempcan){

  var unfolded =[];
  var index = 0;
     
   for(var i =0; i < 300 ; i++){

for(var j = 0; j < ((300)*4); j++){
   
unfolded[index] =  tempcan[i][j];
                           index++;

   }

   }

   return unfolded;

}

conv(d){

  var  matrix = {tpl:0,tpm:1, tpr:0,mdl:0,mdm:0,mdr:0,btl:0,btm:-1,btr:0} 

     var editim = this.refs.ouputCanvas.getContext('2d').getImageData(0,0,300,300);

var arrays = this._getPicMatrix(d);

var can = arrays[0];

var tempcan = arrays[1];

 var i =0;
 var topLeftR
 var topLeftG
 var topLeftB
  
 var topMidR 
  var topMidG
  var topMidB
   
var topRightR 
var topRightG
var topRightB

var midLeftR
var midLeftG
var midLeftB

var middleR
var middleG
var middleB

var midRightR
var midRightG
var midRightB

var botLeftR
var botLeftG
var botLeftB

var botMidR
var botMidG
var botMidB

var botRightR 
var  botRightG
var botRightB 

for( var x = 0; x < 300-1 ; x+=1){
  for(var y = 0; y < (300*4); y+=4){
    
      if(x > 0 && y > 0){
 
 
      
      
         topLeftR = can[x-1][y-4]
         topLeftG = can[x-1][y-3];
         topLeftB = can[x-1][y-2];
      
          
         
         topMidR = can[x-1][y];
         topMidG = can[x-1][y+1];
         topMidB = can[x-1][y+2];
 
      
     topRightR = can[x-1][y+4]; 
      topRightG = can[x-1][y+5]; 
      topRightB = can[x-1][y+6];
          
      
      
      //mid
      
      midLeftR = can[x][y-4];
      midLeftG = can[x][y-3];
      midLeftB = can[x][y-2];
 
      
      middleR = can[x][y];
      middleG = can[x][y+1];
      middleB = can[x][y+2];
          
      
      midRightR = can[x][y+4];
      midRightG = can[x][y+5];
      midRightB = can[x][y+6];
 
      
      
      
      //bottom
      
      botLeftR = can[x+1][y-4];
      botLeftG = can[x+1][y-3];
      botLeftB = can[x+1][y-2];
      
      botMidR = can[x+1][y];
      botMidG = can[x+1][y+1];
      botMidB = can[x+1][y+2];
 
      
      botRightR = can[x+1][y+4];
      botRightG = can[x+1][y+5];
      botRightB = can[x+1][y+6];
 
      
      
      
      
      var newRed = (topLeftR * matrix.tpl ) + (topMidR * matrix.tpm) + (topRightR * matrix.tpr) + (midLeftR * matrix.mdl) + (middleR * matrix.mdm) + (midRightR * matrix.mdr) + (botLeftR * matrix.btl) + (botMidR * matrix.btm) + (botRightR * matrix.btr);
 
 
 var newGreen = (topLeftG * matrix.tpl) + (topMidG * matrix.tpm) + (topRightG * matrix.tpr) + (midLeftG * matrix.mdl) + (middleG * matrix.mdm) + (midRightG * matrix.mdr) + (botLeftG * matrix.btl) + (botMidG * matrix.btm) + (botRightG * matrix.btr);
 
 var newBlue = (topLeftB * matrix.tpl) + (topMidB * matrix.tpm) + (topRightB * matrix.tpr) + (midLeftB * matrix.mdl) + (middleB * matrix.mdm) + (midRightB * matrix.mdr) + (botLeftB * matrix.btl) + (botMidB * matrix.btm) + (botRightB * matrix.btr);
      
          tempcan[x][y] = newRed;
          tempcan[x][y+1] = newGreen;
          tempcan[x][y+2] = newBlue;
          tempcan[x][y+3] = 255;
      // console.log(middleR + ' index' + x + ' '+y  );
    
 
      
      }
   
  
  }
     
//alert("finished")


    var unfolded = this._unfoldBack(tempcan);
    editim.data.set(unfolded);
    
	this.refs.ouputCanvas.getContext('2d').putImageData(editim,0,0);

};

}

render(){

var canvasStyle = {
height: '400px',
width:  '400px',
background: 'blue'
};

return(
<div>

<InputSection ref="inputS" ImD={this.getData} />
<canvas ref='ouputCanvas' width={300} height={300} > 


</canvas>
</div>
);

}

}