import db from './connectDB'
import {collection, getDocs, query, onSnapshot, deleteDoc,doc, updateDoc} from 'firebase/firestore'
import './App.css';
import {useEffect, useState} from "react";


function TaskList(props) {
    const [tasks, setTasks] = useState([])
    // useEffect(() => {
    // const getTasks = async () => {
    // const tasksCol = collection(db, 'tasks');
    // const tasksSnapshot = await getDocs(tasksCol);
    // const tasksList = tasksSnapshot.docs.map(doc => doc.data());
    // console.log(tasksList)
    // setTasks(tasksList)
    // }
    //  getTasks()
    //  }
    // )

    useEffect(() => {
        const taskColRef = query (collection(db,'tasks'));
        onSnapshot ( taskColRef, (snapshot) => {
            setTasks (snapshot.docs.map(doc => ({
                id:doc.id,
                ...doc.data()
            })))

        });
    }, [])
    console.log(tasks)
    const onDeleteTask = (id) => {
        deleteDoc( doc(db,'tasks',id))
            .then(r => console.log(r))
            .catch(err => console.log(err));


    }
//onToggle function to edit task status in firestore
    const onToggleDone = (id) => {
        const task = tasks.find(task => task.id === id);
        const updatedTask = {...task, completed: !task.completed}
        //update task in firestore
        updateDoc(doc(db, 'tasks', id), updatedTask)
            .then(r => console.log(r))
            .catch(err => console.log(err));

    }

    return (

        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    {task.completed ? <s>{task.title}</s>:task.title}
                    <button onClick={() => onDeleteTask(task.id)}>Delete</button>
                    <button onClick={()=> onToggleDone(task.id)}>Done</button>
                    <button onClick={()=> props.onEdit(task.id)}>Edit</button>
                </li>
            ))
            }
        </ul>

    );
}

export default TaskList;
