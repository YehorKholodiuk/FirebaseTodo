import {useState} from "react";
import {collection, addDoc, Timestamp, doc} from 'firebase/firestore';
import db from './connectDB'
function EditTaskForm (props){

    const [title,setTitle] = useState('');

//hide form if id null
    if (!props.id) return null;
    //get task form from the firestore
    const tascDoc = doc (db,"tasks",props.id)
    console.log(tascDoc)
    const handleSubmit = (e) => {
        e.preventDefault();

        setTitle('')
    }


    return (
        <form>
            <input type = "text" placeholfer = "Enter task title" value = {title}
            onChange = { e => setTitle(e.target.value)}
            />
            <button type= "submit" onClick={handleSubmit}>Submit</button>
            <button type="submit" onClick={props.onCancel}>Cancel</button>
        </form>
    );
}
export default EditTaskForm;
