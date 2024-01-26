import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from "./templates/Header";
// import Tasks from './components/Tasks'
// import AddTask from './components/AddTask'
// import Footer from "./templates/Footer"
// import About from "./templates/About"
// import UseMemoExample from "./learn/UseMemo"
// import TodosContextProvider from "../src-archive/context/TodosContext";
import RegistrationForm from "./registration-form/registration-form.component";
import React from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const onAddToggle = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    // <TodosContextProvider>
      <Router>
        <div className='container'>
          {/* <Header title="Task Tracker" onAddToggle={onAddToggle} showAddTask={showAddTask} /> */}
          <Routes>
            <Route path="/" element={
              <div>
                {/* {showAddTask && <AddTask />} */}
                {/* <Tasks /> */}
              </div>
            } />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/learn" element={<UseMemoExample />} /> */}
            <Route path="/registration" element={<RegistrationForm />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
    // </TodosContextProvider>
  );
}

export default App;
