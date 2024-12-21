# Task Manager API

## Project Setup

### Prerequisites

- **Node.js**: Make sure you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **MongoDB**: You will need a MongoDB instance running. You can either run MongoDB locally or use a service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- **Postman or any API client**: For testing the API.

### Installation

1. **Clone the repository** or download the code to your local machine.

   ```bash
   git clone https://github.com/Peregrine-Falcon-00/Task-Manager.git
   Navigate to the project directory.
   ```

cd Task-Manager
Install the dependencies.

npm install
Set up your environment variables:

Create a .env file in the root of the project.

Add the following variables:

MONGO_URI=mongodb://localhost:27017/task-manager
JWT_SECRET=your_jwt_secret_key
Start the server.

npm start
The server will be running at http://localhost:5000.

API Endpoints

1. GET /tasks
   Description: Fetch all tasks.
   Response:
   200 OK: A list of all tasks.

   [
   {
   "id": 1,
   "title": "Task 1",
   "description": "Description for Task 1",
   "completed": false
   },
   ...
   ]

2. GET /tasks/:id
   Description: Fetch a single task by its ID.
   Response:
   200 OK: The task details.

   {
   "id": 1,
   "title": "Task 1",
   "description": "Description for Task 1",
   "completed": false
   }

3. POST /tasks
   Description: Add a new task.
   Request Body:

   {
   "title": "New Task",
   "description": "Description for new task",
   "completed": false
   }
   Response:
   201 Created: The created task.

   {
   "id": 1,
   "title": "New Task",
   "description": "Description for new task",
   "completed": false
   }

4. PUT /tasks/:id
   Description: Update an existing task by its ID.
   Request Body:
   {
   "title": "Updated Task",
   "description": "Updated description",
   "completed": true
   }
   Response:
   200 OK: The updated task.

   {
   "id": 1,
   "title": "Updated Task",
   "description": "Updated description",
   "completed": true
   }

5. DELETE /tasks/:id
   Description: Delete a task by its ID.
   Response:
   204 No Content: Task deleted successfully.
   Authentication (Optional)
6. POST /auth/register
   Description: Register a new user.
   Request Body:

   {
   "username": "user1",
   "password": "password123"
   }
   Response:
   201 Created: User registered successfully.

   {
   "message": "User registered successfully"
   }

7. POST /auth/login
   Description: Log in and receive a JWT token.
   Request Body:
   {
   "username": "user1",
   "password": "password123"
   }
   Response:
   200 OK: JWT token.
   {
   "token": "your_jwt_token"
   }

**Error Handling**
400 Bad Request: Invalid request data (e.g., missing fields, wrong data types).
404 Not Found: Task not found (for GET or DELETE requests).
500 Internal Server Error: Unexpected server errors.
