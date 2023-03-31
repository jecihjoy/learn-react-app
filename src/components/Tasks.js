

const Tasks = ({tasks}) => {
    return (
        <div>
            {
                tasks.map((task) => (<h1 key={task.id}>{task.text}</h1>))
            }
        </div>
    )
}


export default Tasks
