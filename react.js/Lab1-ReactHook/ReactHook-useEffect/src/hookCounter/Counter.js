import React, { useState } from 'react'

export const Counter = () => {
    const [count, countUpdate] = useState(0);

    return (
        <div style={{ textAlign: "center" }}>
             <h1 style ={{color : 'orange'}}>{count}</h1>
             <div>
                 <button onClick = {() => countUpdate(count + 1)}>plus</button>
                 <button onClick = {() => countUpdate(count - 1)}>minus</button>
                 <button onClick = {() => countUpdate(0)}>reset</button>
             </div>
        </div>
    )
}


// import React, { Component } from 'react'

// export default class Counter extends Component {
//     state = { count : 0}

//     render() {
//         return (
//             <div style={{ textAlign: "center" }}>
//                 <h1 style ={{color : 'orange'}}>{this.state.count}</h1>
//                 <div>
//                     <button onClick = {() => this.setState({count : this.state.count + 1})}>plus</button>
//                     <button onClick = {() => this.setState({count : this.state.count -1})}>minus</button>
//                     <button onClick = {() => this.setState({count : 0})}>reset</button>
//                 </div>
//             </div>
//         )
//     }
// }




//state class component
// state = {
//     count : 0,
//     age: 0,
//     name: "name"
// }
// compare state
// count == this.state.count
// compare function update state
// counterUpdate("....."), ageUpdate("....."), nameUpdate("....") == this.setState({count : "....", name : "....", age: "...."})