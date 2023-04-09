import React, { useContext } from 'react'
import { useState } from 'react';

const TodosContext = React.createContext(null);

//context hook
export function useTodosContext() {
    return useContext(TodosContext);
}

const TodosContextProvider = ({children}) => {
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
        <TodosContext.Provider value={{
            showAddTask, setShowAddTask, tasks, setTasks,
            addTask, deleteTask, toggleReminder, onAddToggle
        }}>
            {children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider
