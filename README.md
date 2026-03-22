# 💼 Profile Management Backend

### 1️⃣ Install dependencies

```bash
npm install
```

📁 Project Structure
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

✅ Features 
```
MongoDB connection setup
Express server setup
Profile schema (name, email, role)
API to get all profiles (GET /api/profile/all)
API to insert a sample profile (GET /api/profile/test)
Minimal error handling
Easy local development setup
```

### 2️⃣ Create `.env` file

```
MONGO_URI=mongodb://127.0.0.1:27017/profiledb
PORT=5000
```

### 3️⃣ Start MongoDB

Make sure MongoDB service is running.

### 4️⃣ Start server

```bash
node server.js
```

Server URL:

```
http://localhost:5000
```

---

## 🌐 Main APIs (Localhost)

### Get All Profiles

```
GET http://localhost:5000/api/profile/all
```

### Insert Sample Profile

```
GET http://localhost:5000/api/profile/test
```

---

## ✅ Success Output

```
MongoDB Connected
Server running on port 5000
```

