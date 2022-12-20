import React from 'react'
import SubChild from './SubChild.js'
import ContextAPIStore from './ContextAPI/ContextAPIStore.js'

const Child = (props) => {
    let [childState, setChildState] = React.useState("Insta")

    let storeValues = React.useContext(ContextAPIStore);
    // storeValues.RakeshState = childState; // alia key
    // storeValues.childState = childState;

    console.log(storeValues.age)

    return (
        <div>
            <hr />
            <h1> This is Child Component</h1>

            <p>we are using the state values of the Parent element in the this child element through Context API and react.useContext.....</p>

            <h1>{storeValues.Nmae}</h1>
            <h1>{storeValues.Age}</h1>
            <h1>{storeValues.Id}</h1>
            <h1>{storeValues.Phone}</h1>
            <h1>{storeValues.slaary}</h1>
            <h1>{storeValues.myNameis}</h1>
            <hr />


            <SubChild name={props.name} />
        </div>
    )
}

export default Child