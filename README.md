# 📱 Social Media Platform (Express.js)

## 📌 Overview

This project is a **Social Media Platform Backend** built using Node.js and Express.js following the **MVC architecture**.
It provides a RESTful API for managing posts, user authentication, and media uploads.

---

## 🚀 Features

- 🔐 User Registration & Login (JWT Authentication)
- 📝 Create, Read, Update, Delete (CRUD) Posts
- 🧑‍💻 Authorization (Users can only edit/delete their own posts)
- 🖼️ Image Upload Support
- 📄 Pagination for Posts
- 🧩 MVC Architecture Structure
- 🔒 Protected Routes using Middleware

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- JWT (Authentication)
- EJS (Templating)
- Multer (File Uploads)

---

## 📁 Project Structure

```
|-- config
|   |-- jwtConfig.js
|
|-- controllers
|   |-- authController.js
|   |-- postController.js
|
|-- middleware
|   |-- authMiddleware.js
|
|-- models
|   |-- postModel.js
|   |-- userModel.js
|
|-- routes
|   |-- authRoutes.js
|   |-- postRoutes.js
|
|-- utils
|   |-- pagination.js
|
|-- views
|   |-- posts.ejs
|
|-- server.js
|-- package.json
|-- package-lock.json
|-- .gitignore
|-- README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the server

```bash
npm start
```

👉 Server runs on:

```
http://localhost:3000
```

---

## 🔑 API Endpoints

### 🔐 Authentication Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |

### 📝 Post Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/posts` | Get all posts (with pagination) |
| POST | `/api/posts` | Create new post |
| PUT | `/api/posts/:id` | Update post (Owner only) |
| DELETE | `/api/posts/:id` | Delete post (Owner only) |

---

## 🔒 Authentication

- Uses JWT (JSON Web Tokens)
- Include token in headers:

```
Authorization: Bearer <token>
```

---

## 🧩 Middleware

- `authMiddleware.js` → Protects routes
- `express.json()` → Parses JSON request bodies

---

## 📸 Image Upload

- Users can upload images with posts
- Handled using **Multer**

---

## 📄 Pagination

Implemented in:

```
utils/pagination.js
```

---

## 🖥️ View Rendering

Uses EJS:

```
views/posts.ejs
```

---

## ✅ Testing

Use tools like:

- **Postman**
- **Thunder Client** (VS Code)

---

## 📌 Future Improvements

- 💬 Comments system
- ❤️ Like/Unlike posts
- 🔔 Notifications
- 🌐 Deployment (Render / AWS)

---

## 👨‍💻 Author

**Pramira Mindula**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
