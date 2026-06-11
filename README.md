## 🚀 Live Demo

https://gameonixx.github.io/TaskFlow-Kanban-App/# TaskFlow - Advanced Task Management Application 🚀


TaskFlow is a Trello-style Kanban task management application built using Vanilla JavaScript.
This project focuses on understanding core JavaScript concepts behind modern frontend frameworks like React including state management, DOM manipulation, rendering, events, and persistent storage.

## ✨ Features
- Add new tasks
- Edit existing tasks
- Delete tasks
- Search and filter tasks
- Priority management (High, Medium, Low)
- Drag and drop Kanban columns
- Dark mode
- Persistent data using LocalStorage
- Responsive modern UI

## 🛠️ Tech Stack
- HTML5
- CSS3
- Vanilla JavaScript
## 🧠 Concepts Learned 
1. DOM Manipulation
JavaScript interacts with HTML elements using DOM APIs.
Used:
```javascript
document.querySelector()
document.createElement()
appendChild()
classList.add()
```
This allows JavaScript to dynamically create and update UI elements.

2. State Management
The application maintains a central tasks array:
```javascript
let tasks = [
{
 id:1,
 title:"Learn React",
 priority:"High",
 status:"todo"
}
];
```
The UI is generated from this state.
Flow:
    ```
State Change
    ↓
Render Function
    ↓
Updated UI
    ```

This follows the same core idea used in React state management.



3. CRUD Operations
The app supports complete CRUD functionality.
### Create
Adding tasks:
```javascript
tasks.push(newTask);
```
### Read

Rendering tasks dynamically:

```javascript
renderTasks();
```

### Update
Editing tasks using map:
```javascript
tasks.map(task => {
 return updatedTask;
});
```
### Delete
Removing tasks using filter:
```javascript
tasks.filter(task => task.id !== id);
```

## 4. Drag And Drop Functionality
Implemented using HTML5 Drag and Drop API.
Events used:
```javascript
dragstart
dragover
drop
```

Task movement works by updating the task status:
```
Todo
 ↓
Doing
 ↓
Done
```
## 5. LocalStorage
Tasks remain saved even after refreshing the browser.
Saving:
```javascript
localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);
```
Loading:
```javascript
JSON.parse(
localStorage.getItem("tasks")
);
```

## 6. Dark Mode
Theme switching is handled using:
```javascript
classList.toggle()
```

User theme preference is stored using LocalStorage.

## Project Architecture
```
User Action

↓

Event Listener

↓

Update State

↓

Save Data

↓

Render Updated UI
```

## Future Improvements

- User authentication
- Backend database integration
- Task due dates
- Team collaboration
- Notifications
- React version



## Author


Developed by Kavya Srivastava
