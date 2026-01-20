import { useState } from 'react'
import type { Task } from './types/task'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState<Task[]>([]) 
  
  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),  
      title,
      completed: false
    }
    setTasks(prev => [...prev, newTask]) 
  }

  
  const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed } 
          : task
      )
    )
  }

  
  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id)) 
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  )
}

export default App
