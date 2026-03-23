# 💼 Profile Management Backend

A simple backend project built with **Node.js, Express, and MongoDB** to manage user profiles.

---

## 🚀 Step-by-Step Setup Guide

### 1️⃣ Install Dependencies

Navigate to the project folder and run:

```bash
npm install
```

---

### 2️⃣ Project Structure

```
profile-backend/
├── server.js               # Express server entry point
├── package.json            # Project dependencies & scripts
├── .env                    # Environment variables (Mongo URI, PORT)
├── models/
│   └── Profile.js          # Profile schema
├── routes/
│   └── profile.js          # Profile-related routes
└── config/
    └── db.js               # MongoDB connection setup
```

---

### 3️⃣ Create Environment File

Create a `.env` file in the root folder:

```
MONGO_URI=mongodb://127.0.0.1:27017/profiledb
PORT=5000
```

---

### 4️⃣ Start MongoDB

Make sure the MongoDB service is running on your system.

---

### 5️⃣ Start Backend Server

```bash
node server.js
```

---

### 6️⃣ Verify Server is Running

Open the browser and visit:

```
http://localhost:5000
```

---

### 7️⃣ Test APIs (Browser or Postman)

#### 📄 Get All Profiles

```
GET http://localhost:5000/api/profile/all
```

#### ➕ Insert Sample Profile

```
GET http://localhost:5000/api/profile/test
```

---

## ✨ Features

* MongoDB connection setup
* Express server configuration
* Profile schema (name, email, role)
* API to fetch all profiles
* API to insert a sample profile
* Minimal error handling
* Easy local development setup

---

## ✅ Successful Run Output (Terminal)

```
MongoDB Connected
S
```

