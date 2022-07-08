# ReactJS

> Is a library so code structure is OPENED and NEEDEDs


# ReactJS Tooling
* NodeJS + NPM
* generate-react-cli
* Chromuim Base Browser
    * React-Devtools
* Doucmentation
    * MDN
    * Compatibilty Tables (kangax)

# ReactJS Component

> Component smallest unit of UI - Structure Application
* Should NOT contain logic
* Could (should) interact with the logic layer via a bridge (eg. state,action)

## ReactJS Component Create

* Class Component
* Functional Component 
    * Less Code
    * Easier Code Split
    * More ReUsability
    * Need Classification

## Component Classification

> Create Component Roles : implying the type of programmation hosted in each type

* Domain
    * Features
* Base
* Views


## JSX

```jsx

const Comp = () =>{

    const handleClick = () => alert('click')
    const title = "Something"
    const quotes = [
        'Keep component small',
        'Refactor hooks'
    ]

    const [val,setVal] = React.useState('');
    const handleChange = newVal => setVal(newVal);

    const fieldRef = React.useRef();
    const handleKey = evt => {
        console.log(fieldRef.current.value)
    }

    return(
        <>
            <h1>{ title.toUpperCase() }</h1>

            <input name="uncontrolled" ref={fieldRef} onKeydown={handleKey}>

            <input name="controlled" value={val} onChange={handleChange}>

            <ul>
                {
                    quotes.map( (item,idx,collection) => <li key={idx}>{item}</li> )
                }
            </ul>
            
            <button onClick={handleClick}>Go</button>
        </>
    )
}

```