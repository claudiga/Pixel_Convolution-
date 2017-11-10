import React from 'react';
import ReactDOM from 'react-dom';
import {MainDiv} from './main'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<div>
    <MainDiv />
 </div>,
 document.getElementById('root')

);
registerServiceWorker();
