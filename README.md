# MERN Task Manager App


A functional task management application built using the MERN (MongoDB, Express, React, Node.js) stack. The app allows users to manage tasks with features like user authentication (JWT & Google OAuth), task creation, task arrangement using drag-and-drop, and much more.

![Task Manager App home](/images/home.png)
![Task Manager App signup](/images/singup.png)
![Task Manager App login](/images/login.png)
![Task Manager App taskdetail](/images/taskdetails.png)
![Task Manager App edittask](/images/taskedit.png)

## 🌟 Features

- **User Authentication**: Secure login, registration, and logout using JWT (HttpOnly cookies) for protection against XSS attacks. Google OAuth is also integrated.
- **Task Management**: Users can create, search, update, and delete tasks.
- **Drag-and-Drop**: Easily manage tasks between "To Do", "In Progress", and "Done" columns.
- **Protected Routes**: Only authenticated users can access protected pages, and already logged-in users cannot access login or signup pages.
- **Optimistic Updates**: React Query is used for server-side caching and optimistic UI updates.
- **Responsive UI**: Developed with React Beautiful DnD and customized UI components.

## 🛠️ Technologies Used

### Frontend:

- **React** (v18.3.1)
- **Redux Toolkit** for global state management
- **React Router** for routing
- **React Query** for handling server data and caching
- **React Hook Form** (with Zod validation)
- **React Beautiful DnD** for drag-and-drop interactions
- **Axios** for HTTP requests
- **Flowbite-React** for UI components
- **React Toastify** for user notifications

### Backend:

- **Node.js** (v18.x)
- **Express.js** (v4.19.2) for the API
- **MongoDB** with **Mongoose** for the database
- **JWT** for user authentication
- **Bcrypt.js** for password hashing
- **Cookie-Parser** for handling JWT cookies

ase give it a star on GitHub! ⭐️
