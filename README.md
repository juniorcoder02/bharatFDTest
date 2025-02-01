# BharatFD Backend Test

## 🚀 Project Overview
This is a **REST API** built with **Node.js and Express.js** for managing FAQs with **multi-language translation support**. The project includes:
- **MongoDB for data storage**
- **Redis caching** for performance
- **Google Translate API for automatic translations**
- **WYSIWYG support** for answers
- **Docker & Deployment** support
- **Unit tests with Mocha & Chai**

---

## 📌 Features
- **Create, Read FAQs**
- **Multi-language translation** (English, Hindi, Bengali)
- **Fast API responses using Redis caching**
- **Automatic translations using Google Translate API**
- **Admin Panel with WYSIWYG support**
- **API testing with Mocha & Chai**

---

## 🛠 Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Caching**: Redis
- **Translation API**: Google Translate API
- **Testing**: Mocha & Chai
- **Containerization**: Docker, Docker Compose

---

## 🔧 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/juniorcoder02/bharatfd-backend.git
cd bharatfd-backend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file and add the following:
```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
REDIS_HOST=localhost
REDIS_PORT=6379
```

### 4️⃣ Start the Server
```sh
npm start
```

Server will be running on `http://localhost:8000`

---

## 📌 API Endpoints
### 1️⃣ Fetch FAQs
```sh
GET /api/faqs/
```
#### Example Usage:
```sh
curl http://localhost:8000/api/faqs/
```
#### Response:
```json
[
  {
    "question": "What is BharatFD?",
    "answer": "BharatFD is a financial services platform."
  }
]
```

### 2️⃣ Fetch FAQs in Hindi
```sh
GET /api/faqs/?lang=hi
```
#### Example Usage:
```sh
curl http://localhost:8000/api/faqs/?lang=hi
```
#### Response:
```json
[
  {
    "question": "भारतFD क्या है?",
    "answer": "भारतFD एक वित्तीय सेवा प्लेटफार्म है।"
  }
]
```

### 3️⃣ Add a New FAQ
```sh
POST /api/faqs/
```
#### Request Body:
```json
{
  "question": "What is Node.js?",
  "answer": "Node.js is a JavaScript runtime."
}
```
#### Response:
```json
{
  "question": "What is Node.js?",
  "answer": "Node.js is a JavaScript runtime.",
  "translations": {
    "question_hi": "Node.js क्या है?",
    "answer_hi": "Node.js एक JavaScript रनटाइम है।",
    "question_bn": "Node.js কি?",
    "answer_bn": "Node.js একটি JavaScript রানটাইম।"
  }
}
```

---

## 🚀 Running with Docker
### 1️⃣ Build & Run Docker Container
```sh
docker-compose up --build
```

### 2️⃣ Stop the Container
```sh
docker-compose down
```

---

## ✅ Running Unit Tests
### Install Dev Dependencies
```sh
npm install --save-dev mocha chai supertest
```
### Run Tests
```sh
npx mocha
```

---

## 💡 Contribution Guidelines
1. Fork the repository.
2. Clone the repo:
   ```sh
   git clone https://github.com/juniorcoder02/bharatfd-backend.git
   ```
3. Create a new branch:
   ```sh
   git checkout -b feature-branch
   ```
4. Commit changes:
   ```sh
   git commit -m "feat: Add FAQ API"
   ```
5. Push and create a PR.





