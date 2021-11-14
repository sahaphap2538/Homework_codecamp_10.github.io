import React, {useState} from "react"
import arrow from './arrow.png'

const TodoList = () => {
    const [text, textUpdate] = useState('');
    const [list, listUpdate] = useState([]);
    const [done, doneUpdate] = useState([]);

    const addTextToList = () => {
        listUpdate([...list,text])
        textUpdate('')
    }
    const listToDone = (index) => {
        let data = [...list];
        let move = data.splice(index, 1);
        doneUpdate([...done,...move]);
        listUpdate(data);
    }
    const deleteDone = (index) => {
        let data = [...done];
        data.splice(index, 1);
        doneUpdate(data);
    }
    const doneBackToList = (index) =>{
        let data = [...done];
        let back = data.splice(index, 1);
        doneUpdate(data);
        listUpdate([...list,...back]);
    }

    return (
        <div style = {{display :'grid', gridTemplateColumns : '300px 300px', justifyItems : 'center', gap : '10px'}}>
            {/* ฝั่งซ้ายเป็น Todolist */}
            <div>
                <h1>TodoList</h1>
                <ul style = {{listStyle : "none"}}>
                    {list.map( (text, index) => 
                    <li>{text} 
                        <span onClick={() => listToDone(index) }> 
                            <img src={arrow} style={{width:'15px',verticalAlign:'bottom'}}/>
                        </span> 
                    </li> )}
                </ul>
                <div>
                    <input type = 'text' value = {text} onChange = {(e) => textUpdate(e.target.value)}/>
                    <button onClick = { () => addTextToList()}>add text</button>
                </div>
            </div>
            {/* ฝั่งขวาเป็น Done */}
            <div>
                <h1>Done</h1>
                <ul style = {{listStyle : "none"}}>
                    {done.map((text, index) => 
                    <li>
                        {text}
                        <span>
                            <button onClick={()=> deleteDone(index)}>delete</button>
                            <button onClick={()=> doneBackToList(index)}>back</button>
                        </span>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export { TodoList };




















