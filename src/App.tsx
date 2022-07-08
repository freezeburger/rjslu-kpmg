import React,{FC} from 'react';

import './App.scss';

import {ViewLogin} from './views';

/* 
import { getMessages } from './core/services/message.service';
getMessages().then(data => console.log(data)) 
*/


const App:FC<{}> = () => {
  return  (

    <React.Fragment>
      <h1>App Title</h1>
      <ViewLogin></ViewLogin>
    </React.Fragment>
  ) 
}



export default App;
