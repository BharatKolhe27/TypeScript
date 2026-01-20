#  Task Manager App

Created with **Vite + React + TypeScript**.

I am learning React and TypeScript, so I created a Task Manager project to practice.

In this project, I learned about basic types like **string** and **number**, and how to create them. I also learned about **interfaces** and **type aliases** in TypeScript.

---

## Task Manager UI

This is how my Task Manager looks:

<img width="1852" height="833" alt="image" src="https://github.com/user-attachments/assets/63e8c5b3-192f-4d15-af03-eb92bbaa34c5" />


---

## Example of Types I Used (Interface)

I also practiced creating **interfaces** and **type aliases** for my components:

<img width="360" height="161" alt="Task Manager UI" src="https://github.com/user-attachments/assets/90b06a94-de88-406d-b62d-6918720bd4a9" />

```ts
// type alias for component props
type TaskFormProps = {
  onAddTask: (title: string) => void
}
```

##  Components

- **TaskForm** – handles adding new tasks  
- **TaskList** – displays all tasks  
- **TaskItem** – represents a single task with toggle and delete  
- **App** – manages application state and logic  
