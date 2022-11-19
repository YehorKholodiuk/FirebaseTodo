
import CreateTaskForm from "./CreateTaskForm";
import TaskList from "./TaskList";
import {useState} from "react";
import EditTaskForm from "./EditTaskForm";

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
        <div className="App">
            <CreateTaskForm/>
            <TaskList onEdit={onEdit}/>
            {editTaskId && <EditTaskForm id={editTaskId} onCancel={onEditCancel}/>}
        </div>
    );
}

export default App;
