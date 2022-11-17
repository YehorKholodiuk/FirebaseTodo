import {useState} from "react";
import {collection, addDoc, Timestamp} from 'firebase/firestore';
import db from './connectDB'
function CreateTaskForm (){
    const [title,setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title);
        addDoc ( collection(db, 'tasks'),{
            title,
            created: Timestamp.now()
        }).then (r => console.log(r))
            .catch(err => console.log(err))
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
export default CreateTaskForm;
