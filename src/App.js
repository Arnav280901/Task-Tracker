import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doc appointment',
            day : '5 Feb, 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meet at school',
            day : '6 Feb, 1:20 pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food shopping',
            day : '5 Feb, 2:30pm',
            reminder : false,
        }
    ]
)

    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000)+1
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
    }

    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggleReminder = (id) => {
      setTasks(
        tasks.map(
          (task) => task.id === id ? 
          {...task, reminder: !task.reminder} : 
          task
        )
      )
    }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0  
        ? (<Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) 
        : ('No Tasks')
      }
    </div>
  );
}

export default App;
