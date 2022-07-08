

/**
 * REACT API KEY FEATURE
 *
 *
 */

import React from "react";


export class TheoA extends React.Component{

    // count = 0;
    state = {
        count:0
    }

    // LifeCycle
    constructor(props:any){
        super(props);
        console.log('constructor')
        // this.handleClick = this.handleClick.bind(this);
    }

    handleGlobalEvent = ( evt:any ) => {
        console.log(evt)
    }

    handleClick = () => {
        console.log(this)
        // this.setState(  (prevState:any) => ({ count: prevState.count+1 }) )
    }

    componentDidMount(){
        console.log('componentDidMount')
        window.addEventListener('keydown', this.handleGlobalEvent)

    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
        window.removeEventListener('keydown', this.handleGlobalEvent)
    }

    render() {
        console.log('render')
        return(
            <>
                TheoA
                <button onClick={ this.handleClick }>Update Me - {this.state.count} - {JSON.stringify(this.state)}</button> 
            </>
        )
    }
}


export const TheoB = (props:any)=>{

    //Functionnal Hooks
    const [count,setCount] = React.useState(0);

    const init = () => {
        console.log('component did mount')
        window.addEventListener('keydown', handleGlobalEvent)
        return () =>{
            console.log('component will unmount')
            window.removeEventListener('keydown', handleGlobalEvent)
        }
    }

    React.useEffect(init,[] /* condition to retrigger effect */)

    const handleClick = React.useCallback( (evt:any) => setCount( prevCount => prevCount+1 ) , [] );

    const handleGlobalEvent = React.useCallback( (evt:any) => console.log(evt) , [] );


    return(
        <>
            TheoB
            <button onClick={handleClick }>Update Me - {count} - {}</button> 
        </>
    )
}

const useCount = ( value = 0) => {

    const [count,setCount] = React.useState(value);

    const handleClick:any = React.useCallback( (evt:any) => setCount( prevCount => prevCount+1 ) , [] );

    return [ count, handleClick ];
}

const useGlobalKeyStroke = ( callback:any) => {


    const init = () => {
        console.log('component did mount')
        window.addEventListener('keydown', callback)
        return () =>{
            console.log('component will unmount')
            window.removeEventListener('keydown', callback)
        }
    }

    React.useEffect(init,[] /* condition to retrigger effect */)
}

export const TheoC = (props:any) => {

    const [count,handleClick] = useCount();

    // const handleGlobalEvent = React.useCallback( (evt:any) => console.log(evt) , [] );
    
    const handleGlobalEvent = (evt:any) => console.log(evt) 

    useGlobalKeyStroke(handleGlobalEvent);

    return(
        <>
            TheoC
            <button onClick={handleClick }>Update Me - {count} - {}</button> 
        </>
    )
}
