import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./templates/Header";
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from "./templates/Footer"
import About from "./templates/About"
import UseMemoExample from "./learn/UseMemo"
import TodosContextProvider from "./context/TodosContext";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const onAddToggle = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <TodosContextProvider>
      <Router>
        <div className='container'>
          <Header title="Task Tracker" onAddToggle={onAddToggle} showAddTask={showAddTask} />
          <Routes>
            <Route exact path="/" element={
              <div>
                {showAddTask && <AddTask />}
                <Tasks />
              </div>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/learn" element={<UseMemoExample />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </TodosContextProvider>
  );
}

export default App;
