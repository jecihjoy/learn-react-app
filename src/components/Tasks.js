import { useTodosContext } from '../context/TodosContext'
import Task from './Task'

const Tasks = () => {
    const { tasks } = useTodosContext()

    return (
        <div>
            {tasks.length > 0 ?
                <div>
                    {tasks.map((task) => (
                        <Task key={task.id} task={task} />
                    ))}
                </div> : "No tasks to show"
            }
        </div>
    )
}


export default Tasks
