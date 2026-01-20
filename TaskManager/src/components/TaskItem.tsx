import type { Task } from '../types/task'

type TaskItemProps = {
  task: Task  ;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>

      <button onClick={() => onDelete(task.id)}>delete</button>
    </li>
  )
}

export default TaskItem
