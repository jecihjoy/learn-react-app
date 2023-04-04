import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./templates/Header";
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from "./templates/Footer"
import About from "./templates/About"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": false
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": false
    },
    {
      "id": 3,
      "text": "CV Writting",
      "day": "Feb 6th at 1:30pm",
      "reminder": false
    }
  ])

  //Add task
  const addTask = ({ text, day, reminder }) => {
    const id = tasks.length + 1;
    setTasks([...tasks, { id, text, day, reminder }])
  }

  //Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  //Toggle reminder
  const toggleReminder = (id) =>
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    ))

  const onAddToggle = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <Router>
      <div className='container'>
        <Header title="Task Tracker" onAddToggle={onAddToggle} showAddTask={showAddTask} />
        <Routes>
          <Route exact path="/" element={
            <div>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? <Tasks tasks={tasks}
                onDelete={deleteTask} onToggle={toggleReminder} /> : "No tasks to show"}
            </div>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
