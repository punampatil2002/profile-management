# 💼 Profile Management Backend

Simple backend using **Node.js + Express + MongoDB** for managing user profiles.

---

## 🚀 Step-by-Step Setup Guide

### 1️⃣ Install Dependencies

Project folder ke andar jaake:

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

Root folder me `.env` file banao:

```
MONGO_URI=mongodb://127.0.0.1:27017/profiledb
PORT=5000
```

---

### 4️⃣ Start MongoDB

Make sure MongoDB service running hai.

---

### 5️⃣ Start Backend Server

```bash
node server.js
```

---

### 6️⃣ Verify Server Running

Browser me open karo:

```
http://localhost:5000
```

---

### 7️⃣ Test APIs (Browser ya Postman)

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
* Express server setup
* Profile schema (name, email, role)
* API to get all profiles
* API to insert a sample profile
* Minimal error handling
* Easy local development setup

---

## ✅ Successful Run Output (Terminal)

```
MongoDB Connected
Server running on port 5000
```

