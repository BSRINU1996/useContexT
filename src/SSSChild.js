import React from 'react'
import ContextAPIStore from './ContextAPI/ContextAPIStore';

const SSSChild = (props) => {

    let Store = React.useContext(ContextAPIStore);



    return (
        <div>
            <h1> This is SSSChild Component</h1>
            <h1>{props.name}</h1>
            <h1>{Store.childState}</h1>
            <h1>{Store.ph} this is from Store Without using propsss </h1>
        </div>
    )
}

export default SSSChild;