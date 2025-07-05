

# Online Auction System – MERN Stack Web App

An **Online Auction System** built with the **MERN stack (MongoDB, Express, React, Node.js)** that allows users to create auctions, upload images, and bid on products in real-time (**WebSocket feature coming soon**).

>  – built by **Prateek Rajput** to demonstrate full-stack web development, security, and scalable architecture.

This system supports secure login via **httpOnly cookies**, tracks login device and location, and uses modern tools like **Redux Toolkit**, **React Router v7**, and **Cloudinary** for real-world deployment.

---

## 🌐 Live Preview



![Preview](https://github.com/user-attachments/assets/719ec319-d1d3-4e17-9b0b-ae5db8cfd6b4)

---

## 📦 Tech Stack

### 🔹 Frontend

* React 19 (Vite)
* Tailwind CSS
* React Router v7
* Redux Toolkit
* TanStack Query (React Query)
* Axios

### 🔸 Backend

* Node.js + Express
* MongoDB + Mongoose
* JWT Authentication (httpOnly cookies)
* Multer (for file uploads)
* Cloudinary (for image hosting)
* IP, device, and browser detection

---

## 📁 Folder Structure

```
online-auction-system/
├── client/   # React frontend
└── server/   # Express backend
```

---

## ⚙️ Environment Variables

### 🔐 Backend `.env`

```env
PORT=3000
ORIGIN=http://localhost:5173
MONGO_URL=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
JWT_EXPIRES_IN=1d
CLOUDINARY_CLOUD_NAME=<cloud-name>
CLOUDINARY_API_KEY=<cloud-key>
CLOUDINARY_API_SECRET=<cloud-secret>
CLOUDINARY_URL=<cloudinary-url>
RESEND_API_KEY=<resend-api-key>
```

### 🌐 Frontend `.env`

```env
VITE_API=http://localhost:3000
VITE_AUCTION_API=http://localhost:3000/auction
```

---

## 🚀 Getting Started

### 📥 1. Clone the Repository

```bash
git clone https://github.com/Prateekrajput9/auctionsystemm.git
cd auction-system
```

### 🛠️ 2. Setup Backend

```bash
cd server
npm install
cp .env.example .env  # or create .env manually
npm run dev
```

### 🌐 3. Setup Frontend

```bash
cd ../client
npm install
cp .env.example .env  # or create .env manually
npm run dev
```

---

## 🔐 Authentication

* Uses **JWT stored in httpOnly cookies** for security
* Auto-login supported on refresh via `/user`
* Auth state managed with Redux Toolkit

### 🔐 Auth Routes

| Method | Endpoint       | Description             |
| ------ | -------------- | ----------------------- |
| POST   | `/auth/login`  | Login and set cookie    |
| POST   | `/auth/signup` | Register new user       |
| POST   | `/auth/logout` | Logout and clear cookie |

### 👤 Auto-Login

| Method | Endpoint | Description                       |
| ------ | -------- | --------------------------------- |
| GET    | `/user`  | Validates user via cookie on load |

---

## 🛒 Auction Routes

| Method | Endpoint         | Description                           |
| ------ | ---------------- | ------------------------------------- |
| GET    | `/auction/stats` | Dashboard stats (active, total, user) |
| GET    | `/auction/`      | List all auctions                     |
| POST   | `/auction/`      | Create new auction with image         |
| GET    | `/auction/:id`   | View single auction item              |
| POST   | `/auction/:id`   | Place a bid on an auction             |

---

## 🔍 Key Features

* ✅ JWT-based auth with cookies
* ✅ Auto-login on refresh
* ✅ Auction creation with image upload (Cloudinary)
* ✅ Bidding mechanism (in-progress real-time)
* ✅ IP/device/browser login logs
* ✅ Modern React architecture with routing
* ✅ State management via Redux Toolkit + React Query

---

## 🔐 Login Security Logging

* IP Address
* Country and State (via GeoIP)
* Device Type
* Browser and version
* Used to detect suspicious activity and increase trust

---

## 🧠 State Management

* **Redux Toolkit**: for managing auth state
* **TanStack Query**: for server state and caching
* Ensures a responsive and scalable UI/UX




---



## 👨‍💻 Developed by

**Prateek Rajput**

> A MERN Stack Developer focused on building secure, real-world web applications.
> GitHub: [@Prateekrajput9](https://github.com/Prateekrajput9)

---

