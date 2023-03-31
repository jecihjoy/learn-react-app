import Task from './Task'

const Tasks = ({ tasks, onDelete }) => {
    return (
        <div>
            {
                tasks.map((task) => (
                    <Task key={task.id} text={task.text} onDelete={() => onDelete(task.id)} />
                ))
            }
        </div>
    )
}


export default Tasks
