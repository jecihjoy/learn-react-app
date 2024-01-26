import { FaTimes } from 'react-icons/fa'
import { useTodosContext } from '../context/TodosContext';

const Task = ({ task }) => {
  const { deleteTask, toggleReminder} = useTodosContext()
  const {id, text, day} = task;
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(id)}>
      <h3>{text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => deleteTask(id)} /> </h3>
      <p>{day}</p>
    </div>
  )
}

export default Task
