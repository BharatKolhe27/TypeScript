import { useState } from 'react'

interface TaskFormProps {
  onAddTask: (title: string) => void
}

function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    onAddTask(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
      />
      <button>Add</button>
    </form>
  )
}

export default TaskForm
