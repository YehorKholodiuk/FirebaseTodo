import {useState} from "react";
import {collection, addDoc, Timestamp} from 'firebase/firestore';
import db from './connectDB'
function EditTaskForm (props){

    const [title,setTitle] = useState('');

//hide form if id null
    if (!props.id) return null;
    const handleSubmit = (e) => {
        e.preventDefault();

        setTitle('')
    }


    return (
        <form>
            <input type = "text" placeholfer = "Enter task title" value = {title}
            onChange = { e => setTitle(e.target.value)}
            />
            <button type= "submit" onClick={handleSubmit}>Add Task</button>
        </form>
    );
}
export default EditTaskForm;
