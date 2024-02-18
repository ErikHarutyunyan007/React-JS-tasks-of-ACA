import { useState } from "react"

function Editmood({ editingValue, onSave, onCancel, onDelete }){
    const [value, setValue] = useState(editingValue);

    return(
        <div className="editmood">
           <input
                onChange={(e) => {setValue(e.target.value)}}
                type="text"
                value={value}
                className="editmoodinput"
                maxLength={60}
                autoFocus
            />
           {!!value.length && (
                <button
                    onClick={() => {
                        onSave(value);
                        onCancel();
                    }}
                    className="editmoodsavebutton"
                >
                        Save
                </button>
            )}
           <button onClick={onCancel} className="editmoodcancelbutton">
                Cancel
            </button>
           <button
                onClick={() => {
                    onDelete();
                    onCancel();
                }}
                className="editmooddeletebutton"
            >
                Delete
            </button>
        </div>
    )
}

export default Editmood;
