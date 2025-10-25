# MyContacts Backend API (Express + MongoDB + JWT)

This project is a **RESTful API** built using **Express.js**, **MongoDB (Mongoose)**, and **JWT authentication**.  
It allows users to **register, log in, and manage their contact list** securely.

---

## 🚀 Features

- User authentication with **JWT (JSON Web Token)**
- Passwords hashed using **bcrypt.js**
- CRUD operations on contacts (Create, Read, Update, Delete)
- Middleware for protecting routes using JWT
- Tested via **Postman**
- Follows MVC architecture (Model, View, Controller)

---

## 📂 Folder Structure

```
express_project/
├── express/
│   ├── mycontacts-backend/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── server.js
│   │   └── package.json
```

---

## 🧰 Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **JWT (jsonwebtoken)**
- **bcrypt.js**
- **dotenv**
- **Postman** (for testing)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/mycontacts-backend.git
cd mycontacts-backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create a `.env` File

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4️⃣ Start the Server

```bash
npm start
```
Your server should run at: **http://localhost:5000**

---

## 🧪 Testing with Postman

### 🔹 Register User
**POST** `/api/users/register`  
Body (JSON):
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "123456"
}
```

### 🔹 Login User
**POST** `/api/users/login`  
Body (JSON):
```json
{
  "email": "johndoe@example.com",
  "password": "123456"
}
```
Response:
```json
{
  "user": {
    "_id": "user_id_here",
    "name": "John Doe",
    "email": "johndoe@example.com"
  },
  "token": "your_jwt_token_here"
}
```

### 🔹 Get All Contacts
**GET** `/api/contacts`  
Header:
```
Authorization: Bearer your_jwt_token_here
```

### 🔹 Create New Contact
**POST** `/api/contacts`  
Header:
```
Authorization: Bearer your_jwt_token_here
```
Body (JSON):
```json
{
  "name": "Jane Smith",
  "email": "janesmith@example.com",
  "phone": "9876543210"
}
```

### 🔹 Update a Contact
**PUT** `/api/contacts/:id`

### 🔹 Delete a Contact
**DELETE** `/api/contacts/:id`

---

## 🔐 Notes

- Without a valid JWT token, access to `/api/contacts` routes will return:
  ```json
  { "message": "Unauthorized, invalid token" }
  ```
- Tokens expire after a certain duration as defined in the backend.

---

## 📜 License
This project is open-source and available under the **MIT License**.
