# 💼 Profile Management Backend

Minimal setup to run the project locally.

---

## ⚙️ Setup & Run

### 1️⃣ Install dependencies

```bash
npm install
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

