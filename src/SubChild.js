import React from 'react'
import SSSChild from './SSSChild'
import ContextAPIStore from './ContextAPI/ContextAPIStore';


const SubChild = (props) => {
    let storeValues = React.useContext(ContextAPIStore);
    return (
        <div>
            <hr />
            <h1> This is SubChild Component</h1>

            <p>we are using the state values of the Parent element in the this subChild  element through Context API and react.useContext.....</p>
            <h1>{storeValues.Nmae}</h1>
            <h1>{storeValues.Age}</h1>
            <h1>{storeValues.Id}</h1>
            <h1>{storeValues.Phone}</h1>
            <h1>{storeValues.slaary}</h1>
            <h1>{storeValues.myNameis}</h1>
            <hr />
            <SSSChild />
        </div>
    )
}

export default SubChild;