import React from 'react'
import Child from './Child'
import ContextAPIStore from './ContextAPI/ContextAPIStore';
import SubChild from './SubChild'

const Parent = () => {
    let [name, setName] = React.useState("Rakesh");
    let [age, setAge] = React.useState(15);
    let [id, setId] = React.useState(56);
    let [ph, setPh] = React.useState(105060);
    let [Sal, setSal] = React.useState(895623);
    let myNameis = "Srinu"
    console.log(useState)
    return (
        <div>

            <ContextAPIStore.Provider value={{
                Nmae: name,
                Age: age,
                Id: id,
                Phone: ph,
                slaary: Sal,
                myNameis,
            }

            }>
                <h1> This is Parent Component</h1>
                <h1> {name}</h1>
                <SubChild />
                <Child name={name} />
                {/* these must be consuming components i.e those are in  the wrapper  */}
            </ContextAPIStore.Provider>
        </div >
    )
}

export default Parent