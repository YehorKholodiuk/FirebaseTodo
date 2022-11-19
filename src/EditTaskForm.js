
import {collection, addDoc, Timestamp, doc, getDoc, updateDoc} from 'firebase/firestore';
import {useEffect, useState} from "react";
import db from './connectDB'
function EditTaskForm (props){

    const [title,setTitle] = useState('');
    useEffect ( () => {
        if (!props.id) return null;
        getDoc (doc (db,"tasks",props.id)).then(doc => {
            console.log(doc.data());
            setTitle(doc.data().title);
        });
    }, [props.id]);

    //hide form if id null


    //get task form from the firestore


    const handleSubmit = (e) => {
        e.preventDefault();
        updateDoc(doc(db, 'tasks', props.id), {title})
            .then(r => console.log(r))
            .catch(err => console.log(err));

        props.onCancel();
        setTitle('')
    }

    const handleCancel = () => {
        props.onCancel();
        setTitle('')
    }
    //hide form if id null
    if (!title ) return null;

    return (
        <form>
            <input type = "text" placeholfer = "Enter task title" value = {title}
                   onChange = { e => setTitle(e.target.value)}
            />
            <button type= "submit" onClick={handleSubmit}>Submit</button>
            <button type="submit" onClick={handleCancel}>Cancel</button>
        </form>
    );
}
export default EditTaskForm;
