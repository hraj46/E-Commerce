# 🛒 E-Commerce Web Application

A full-stack e-commerce platform built using the **MERN stack** (MongoDB, Express, React, Node.js). This project includes user authentication, product listings, cart management, and secure order processing.

---

## 📂 Project Structure

- E-Commerce
- backend/ # Node.js + Express + MongoDB (API server)
- frontend/ # React.js (UI)

---

## 🚀 Tech Stack

| Layer       | Tech Used                 |
|-------------|---------------------------|
| Frontend    | React.js, Axios, Context  |
| Backend     | Node.js, Express, Mongoose |
| Database    | MongoDB                   |
| Auth        | JWT, bcrypt               |
| Dev Tools   | Nodemon, dotenv, CORS     |

---

## 🔧 Features

- ✅ User registration & login with JWT auth
- 🛒 Product listings & filtering
- 🧺 Cart and order management
- 👤 User profiles
- 🔐 Secure API endpoints with auth middleware
- 🌐 Responsive UI with modern design
- ⚙️ Environment-based configuration

---

## 🛠 Setup Instructions

### 1. Clone the repo
```
git clone https://github.com/hraj46/E-Commerce.git
cd E-Commerce
```
### 2. Backend Setup
```
cd backend
npm install
```
- Create a .env file based on .env.example:
```
PORT=5000
MONGO_URI=your_mongo_connection
```
- Run the server:
```
npm run dev
```
### 3. Frontend Setup
```
cd ../frontend
npm install
npm start
```
The frontend runs on http://localhost:3000 and connects to the backend on http://localhost:5000.

---

## 🔒 Environment Variables
### Backend (backend/.env)
```
PORT=5000
MONGO_URI=your_mongodb_connection
```
### Frontend (frontend/.env)
REACT_APP_API_URL=http://localhost:5000

---

## 📸 Screenshots
<img width="1888" height="923" alt="Screenshot 2025-08-04 232908" src="https://github.com/user-attachments/assets/4a9b5552-297f-4d1a-903b-a42c04f70131" />
<img width="1874" height="923" alt="Screenshot 2025-08-04 232949" src="https://github.com/user-attachments/assets/b4335b9a-4af1-4768-865a-cb248cb0e9b8" />
<img width="1892" height="674" alt="Screenshot 2025-08-04 233027" src="https://github.com/user-attachments/assets/a8eabd9b-b7e5-486a-a25d-6bf61a3100dd" />

---

## ✨ Future Enhancements
- Admin dashboard for product management
- Payment integration (e.g., Stripe/PayPal)
- Order tracking and history
- Product reviews and ratings
- Deploy to Vercel/Render/Netlify + MongoDB Atlas

---

## 👤 Author
#### Himanshu Raj
#### Nikhil Prakash

---

Let me know if your frontend is built with **Redux**, **Tailwind**, or **Material UI**, and I can ref
