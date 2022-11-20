
import CreateTaskForm from "./CreateTaskForm";
import TaskList from "./TaskList";
import {useState} from "react";
import EditTaskForm from "./EditTaskForm";
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
function App() {
    //state for edit form status visibility
    const [editTaskId, setEditTaskId] = useState(null)
    const onEdit = (id) => {
        console.log(id);
        setEditTaskId(id)
    }

    const onEditCancel = () => {
        setEditTaskId(null)
    }
    return (
        <div className="container">
            <CreateTaskForm/>
            <TaskList onEdit={onEdit}/>
            {editTaskId && <EditTaskForm id={editTaskId} onCancel={onEditCancel}/>}
        </div>
    );
}

export default App;
