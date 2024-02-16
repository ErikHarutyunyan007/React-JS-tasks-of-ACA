import { useEffect, useState } from "react"
import Editmood from "../editmood/editmood";

function Todo (props) {
    let defaultState = [
        'Learn React-JS',
        'always be motivated',
        ' Actively look for new opportunities'
    ]
    let [toDos,setToDos] = useState(defaultState);
    let [inputValue, setInputValue] = useState('');
    let [editMood, setEditMood] = useState([false,'']);

    function handleInputChange (e){
        return setInputValue(e);
    };
    function addNewTodo(inputvalue){
        setToDos([...toDos, inputvalue]);
        setInputValue('')
    };
    function deleteTodo (value) {
        setToDos(toDos.filter((item) => item !== value));
    };
    function editTodo(result){
        if(result === 'cancel'){
            setEditMood([false,''])
        } else if(result[0] === 'delete'){
            deleteTodo(result[1]);
            setEditMood([false,''])
        } else {
            setToDos(toDos.reduce((acc,item) => {
                item != result[0] ? acc.push(item) : acc.push(result[1])
                return acc
            },[]));
            setEditMood([false,''])
        }
    }
    return(
        <div className="todopage">
            <button onClick={() => props.back()} className="back">back</button>
            {editMood[0] === true ? <Editmood edit={editTodo} todo={editMood[1]}/> :
            <div className="toDosContainer">
                <input maxLength={60} placeholder="you can maximum write 60 symbol" value={inputValue} onChange={(e) => handleInputChange(e.target.value)} className="inputOfAdd"/>
                <button onClick={() => addNewTodo(inputValue)} className="buttonOfAdd" disabled={inputValue? false :true}>Add</button>
                {toDos.map((item) => {
                   return <div value={item} className="todo">
                        <div value={item} className="todotext">
                            {item}
                        </div>
                        <button className="done">Done</button>
                        <button value={item} onClick={(e) => setEditMood([true,e.target.value])} className="edit">Edit</button>
                        <button onClick={(e) => deleteTodo(e.target.value)} value={item} className="delete">Delete</button>
                    </div>
                })}
            </div>
        }
        </div>
    )
}

export default Todo