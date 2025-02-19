# Express CRUD API with Swagger Documentation

## 🚀 Project Overview
This is a simple CRUD API built using Express.js and MongoDB (hosted on MongoDB Compass). It includes Swagger documentation for easy API testing.

## 🛠 Technologies Used
- Express.js
- MongoDB Compass
- Mongoose
- Swagger (API Documentation)

## 📌 API Endpoints
### 1️⃣ Create User  
- **Method:** `POST /users`  
- **Body:** `{ "name": "Jephy Thomas", "email": "jephy@gmail.com", "age": 22 }`  
- **Response:** `201 Created`

### 2️⃣ Get All Users  
- **Method:** `GET /users`  
- **Response:** `200 OK` (List of users)

### 3️⃣ Update User  
- **Method:** `PUT /users/:id`  
- **Body:** `{ "name": "Updated Name", "email": "updated@example.com" }`  
- **Response:** `200 OK`

### 4️⃣ Delete User  
- **Method:** `DELETE /users/:id`  
- **Response:** `200 OK`

## 📖 How to Run Locally  
1. Clone the repository:  
   ```sh
   git clone <repo-url>
2. Install dependencies :
   npm install
3. Update the MongoDB Compass connection string inside server.js:
    mongoose.connect("your_mongodb_compass_connection_string")
4. Start the server
   npm start
5. Access Swagger UI: http://localhost:3000/api-docs
   
