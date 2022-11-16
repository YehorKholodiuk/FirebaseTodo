import db from './connectDB'
import {collection, getDocs} from 'firebase/firestore'
import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
            const getTasks = async () => {
                const tasksCol = collection(db, 'tasks');
                const tasksSnapshot = await getDocs(tasksCol);
                const tasksList = tasksSnapshot.docs.map(doc => doc.data());
                console.log(tasksList)
                setTasks(tasksList)
            }
            getTasks()
        }
    )
    return (
        <div className="App">
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
