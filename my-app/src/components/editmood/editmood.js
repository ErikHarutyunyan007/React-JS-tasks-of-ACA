import { useState } from "react"

function Editmood(props){
    let [state, setState] = useState([props.todo])
    let [newTodo, setNewTodo] = useState('')

    console.log(props.editTodo)
    return(
        <div className="editmood">
           <input onChange={(e) => {setNewTodo(e.target.value)}} type="text" value={newTodo?newTodo:state} className="editmoodinput" maxLength={60}></input> 
           {newTodo.length ? <button onClick={(e) => props.edit([state,newTodo])} className="editmoodsavebutton">Save</button> : <></>}
           <button onClick={() => props.edit('cancel')} className="editmoodcancelbutton">Cancel</button>
           <button value={state} onClick={(e) => props.edit(['delete',e.target.value])} className="editmooddeletebutton">Delete</button>
        </div>
    )
}


export default Editmood