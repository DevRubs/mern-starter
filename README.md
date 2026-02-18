# 🚀 My MERN Starter

A personal MERN stack starter template with MongoDB, Express.js, React, and Node.js. Modern tooling, simple organization.

## ✨ Features

- ⚛️ React 19 with Vite
- 🎨 Tailwind CSS v4 for modern styling
- 🚀 Express backend (MVC pattern)
- 🍃 MongoDB with Mongoose
- 🔄 Nodemon & ESLint for development

## 📁 Structure

```
mern-starter/
├── client/              # React frontend with Tailwind CSS
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Route-level components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── services/    # API calls
│   │   └── utils/       # Helper functions
│   ├── tailwind.config.js
│   └── vite.config.js
└── server/              # Express backend (MVC pattern)
    ├── controllers/     # Business logic
    ├── models/          # Mongoose schemas
    ├── routes/          # API endpoints
    ├── services/        # Database operations
    ├── middlewares/     # Auth, validation
    └── config/          # Database, environment
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

**Note:** Tailwind CSS v4 is pre-configured. Use Tailwind utility classes directly in your components for styling.

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