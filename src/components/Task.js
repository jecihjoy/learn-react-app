import { FaTimes } from 'react-icons/fa'

const Task = ({ text, onDelete }) => {
  return (
    <div className="task">
      <h3>{text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={onDelete} /> </h3>
    </div>
  )
}

export default Task
