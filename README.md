# 🚀 My MERN Starter

A personal MERN stack starter template with MongoDB, Express.js, React, and Node.js. Modern tooling, simple organization.

## ✨ Features

- ⚛️ React 19 with Vite
- 🚀 Express backend (MVC pattern)
- 🍃 MongoDB with Mongoose
- 🔄 Nodemon & ESLint for development

## 📁 Structure

```
mern-starter/
├── client/    # React frontend
└── server/    # Express backend
```

## 🛠️ Setup

**Prerequisites:** Node.js (v16+), MongoDB, npm/yarn

### Backend Setup
```bash
cd server
npm install
# Create .env file with:
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/mern-starter
npm run dev
```

### Frontend Setup
```bash
cd client
npm install
npm run dev
```

- 🌐 Frontend: `http://localhost:5173`
- 🔧 Backend: `http://localhost:5000`

## 📜 Scripts

- **Frontend:** `npm run dev`, `npm run build`
- **Backend:** `npm run dev`, `npm start`

## 🔧 Environment

Create `.env` in `server/` folder:

```env
MONGODB_URI=mongodb://localhost:27017/mern-starter
PORT=5000
NODE_ENV=development
```

## 🔌 API Routes

- `GET /api/health` → Health check
- `/api/users/*` → User management (see code)

---

*Personal project. No support provided. Feel free to modify.*