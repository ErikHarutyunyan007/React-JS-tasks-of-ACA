import { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { initialTodos } from "../../utils/constants";

import Editmood from "../editmood/editmood";

function Todo (props) {
    const [toDos, setToDos] = useState(initialTodos);
    const [newTodo, setNewTodo] = useState('');
    const [editingId, setEditingId] = useState(null);

    const isEditing = useMemo(() => !!editingId, [editingId]);

    function handleInputChange (e){
         setNewTodo(e);
    };

    function addNewTodo(value){
        setToDos((oldValue) =>  {
            const id = uuidv4();
            return {
                ...oldValue,
                [id]: {
                    isDone: false,
                    value,
                    id,
                }
            }
        });
        setNewTodo('');
    };

    function deleteTodo (id) {
        setToDos((oldValue) => {
            const newValue = { ...oldValue };
            delete newValue[id];
            return newValue;
        });
    };

    function editTodo(value){
        setToDos((oldValue) => ({
            ...oldValue,
            [editingId]: {
                ...oldValue[editingId],
                value
            }
        }));
    }

    return (
        <div className="todopage">
            <button onClick={() => props.back()} className="back">back</button>
            {isEditing ? (
                <Editmood
                    onSave={editTodo}
                    onCancel={() => setEditingId(null)}
                    onDelete={() => deleteTodo(editingId)}
                    editingValue={toDos[editingId]?.value || ''}
                />
            ) : (
                <div className="toDosContainer">
                    <input maxLength={60} placeholder="you can maximum write 60 symbol" value={newTodo} onChange={(e) => handleInputChange(e.target.value)} className="inputOfAdd"/>
                    <button onClick={() => addNewTodo(newTodo)} className="buttonOfAdd" disabled={!newTodo}>Add</button>
                    {Object.keys(toDos).map((id) => (
                        <div className="todo">
                            <p className="todotext">
                                {toDos[id].value}
                            </p>
                            <button className="done">Done</button>
                            <button onClick={() => setEditingId(id)} className="edit">Edit</button>
                            <button onClick={() => deleteTodo(id)} className="delete">Delete</button>
                        </div>
                    ))}
                </div>
            )
        }
        </div>
    )
}

export default Todo