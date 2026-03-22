# 💼 Profile Management System (Backend)

A simple REST API backend for managing user profiles.

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* cors

---

## ✨ Features

* ➕ Create Profile
* 📄 Get All Profiles
* 🧪 Test Route (Insert Sample Data)

---

## 📁 Project Structure

```
controllers/
models/
routes/
server.js
package.json
```

---

## ⚙️ How To Run Locally

### 1️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create .env File

Create a `.env` file in the root folder and add:

```
MONGO_URI=mongodb://127.0.0.1:27017/profiledb
PORT=5000
```

### 4️⃣ Start MongoDB

Make sure MongoDB service is running.

### 5️⃣ Start Server

```bash
node server.js
```

Server will run at:

```
http://localhost:5000
```

---

## 🌐 API Endpoints (Localhost)

### 📄 Get All Profiles

**Method:** GET
**URL:**

```
http://localhost:5000/api/profile/all
```

**Response:**

```json
[
  {
    "_id": "id",
    "name": "Punam",
    "email": "punam@gmail.com"
  }
]
```

---

### ➕ Create Profile

**Method:** POST
**URL:**

```
http://localhost:5000/api/profile/create
```

**Body (JSON):**

```json
{
  "name": "Rahul",
  "email": "rahul@gmail.com",
  "skills": "React, Node",
  "experience": "2 years"
}
```

---

### 🧪 Test Route (Insert Sample Profile)

**Method:** GET
**URL:**

```
http://localhost:5000/api/profile/test
```

**Description:** Inserts a sample profile into the database.

---

## ✅ Sample Success Messages

Server start:

```
MongoDB Connected
Server running on port 5000
```

---

## 🧪 API Testing Tools

You can test APIs using:

* Postman
* Thunder Client (VS Code Extension)
* Browser (for GET requests)

