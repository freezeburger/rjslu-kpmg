import React,{FC} from 'react';

import './App.scss';
import { TheoA, TheoB } from './Theory';

interface HeaderProps{
  title:string
}
const Header:FC<HeaderProps> = (props) =>{
    return(
      <h1>{props.title}</h1>
    )
}


/* 
const Header = (props) =>{
  const {title} = props;
  return(
    <h1>{props.title}</h1>
  )
}

const Header = ({title}) => <h1>{title}</h1> 
*/

const Button:FC<{}> = () => {
  const [time,setTime] = React.useState(true);
  return(
    <>
    <button onClick={()=> setTime( false )}>Click</button>
    { time && 'You clicked'}
    </>
  )
}


const App:FC<{}> = () => {

  //Component Render State
  const [time,setTime] = React.useState(true);

  return  (

    <React.Fragment>
      My App
    </React.Fragment>
  ) 
}



export default App;
