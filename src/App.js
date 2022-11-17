import db from './connectDB'
import {collection, getDocs, query, onSnapshot} from 'firebase/firestore'
import './App.css';
import {useEffect, useState} from "react";
import CreateTaskForm from "./createTaskForm";

function App() {
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
    return (
        <div className="App">
            <CreateTaskForm/>
            <ul>
                {tasks.map(task => (
                        <li key={task.title}> {task.title} </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default App;
