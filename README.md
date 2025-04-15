# HireMe Platform

## About This Project

In this project, I implemented user authentication and role-based authorization using JSON Web Tokens (JWT). The system supports three types of users: Admin, Employee, and Job Seekers.

For registration and login, users can create an account and securely log in using their credentials. Upon successful login, the server generates a JWT token, which is sent back to the client and stored for future authenticated requests.

The token carries essential user information, including their role (admin, employee, or job seeker), which helps the system control access to specific resources and features. Based on the role encoded in the JWT, the server enforces restrictions — for example, only admins can access admin-level routes, employees can manage job postings, and job seekers can browse and apply for jobs.

This approach ensures both secure authentication and role-based access control (RBAC) while maintaining a scalable and clean code structure.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/FaisalHasanEmon/HireMe-Backend.git
   ```
2. Navigate into the project directory:
   ```bash
   cd HireMe-Backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a .env file and copy and paste the following variables:
   ```bash
   JWT_SECRET=cc42f058f31d67803455ff8fc3347cd444ac8cef66e75bbba823563a9895162e0982e11e2a5bf2b98a998bc7812d7c8a51c0a0d451fa75c68f3c7e2b0556ec82
   ```
   ```bash
   CONNECTION_STRING=mongodb+srv://faisalhasanemon:jROn2445S9t2lmia@hireme-cluster.on9jk5r.mongodb.net/?retryWrites=true&w=majority&appName=HireMe-Cluster
   ```
5. Run the project:
   ```bash
   npm start
   ```
   or
   ```bash
   nodemon index.js
   ```

## Postman Documentation

- Postman Documentation: [https://documenter.getpostman.com/view/43995790/2sB2ca6zhk#3e0d606c-7aa3-43f5-9b35-2b4b2a6ed8f6](https://documenter.getpostman.com/view/43995790/2sB2ca6zhk#3e0d606c-7aa3-43f5-9b35-2b4b2a6ed8f6)

## API Endpoints

### User Registration

- Method POST

  ```bash
  http://localhost:5000/api/auth/register
  ```

- Request Body
  ```
  {
      "name":"userName",
      "email":"user@gmail.com",
      "password":"userPassword",
      "role":"admin/employee/job_seekers"
  }
  ```
- Return
  ```
  {
      "message": "User registered with email user@gmail.com"
  }
  ```

### User Login

- Method POST
  ```
  http://localhost:5000/api/auth/login
  ```
- Request Body
  ```
  {
      "email":"userEmail",
      "password":"userPassword",
  }
  ```
- **Return [[Demo Token]]**
  ```
  {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZmMyNDczMzljNGFiMjE0ZjcyY2EwNSIsImVtYWlsIjoiam9iX3NlZWtlckBnbWFpbC5jb20iLCJyb2xlIjoiam9iX3NlZWtlciIsImlhdCI6MTc0NDY0NjI1NywiZXhwIjoxNzQ0NjQ5ODU3fQ.wwQGcREtwKvbgsil-_bp45HXwgQBMdH2OcoiPfXnsa8"
  }
  ```

### Admin Get All Users

- Method GET
  ```bash
   http://localhost:5000/api/admin/allUsers
  ```
- To Get All Users Admin token must needed as it is a private and a protected route. To get the token admin have to login first. admin account and password:
  ```bash
  email: admin@gmail.com
  password: admin
  ```
- Return
  ```bash
    [
        {
            "_id": "67fc241239c4ab214f72ca01",
            "name": "employee",
            "email": "employee@gmail.com",
            "password": "$2b$10$u0opIdsDEZNDmtuf7YBcD.y8vf3iR9FZBSEC9/tLkJ7DshJZrutfe",
            "role": "employee",
            "createdAt": "2025-04-13T20:52:34.207Z",
            "updatedAt": "2025-04-13T20:52:34.207Z",
            "__v": 0
        },
        {
            "_id": "67fc244239c4ab214f72ca03",
            "name": "admin",
            "email": "admin@gmail.com",
            "password": "$2b$10$bQuI.JiShB8JUqXByBbxi.Tm1xM3it4jwPf00Xak18W22gT1ETk1O",
            "role": "admin",
            "createdAt": "2025-04-13T20:53:22.128Z",
            "updatedAt": "2025-04-13T20:53:22.128Z",
            "__v": 0
        },
        {
            "_id": "67fc247339c4ab214f72ca05",
            "name": "job_seeker",
            "email": "job_seeker@gmail.com",
            "password": "$2b$10$/Dx4/aH2Gm8iJ63P3gKxieO8o0IQZjQb9vRFjhzlAVclvQRoB2DC.",
            "role": "job_seeker",
            "createdAt": "2025-04-13T20:54:11.280Z",
            "updatedAt": "2025-04-13T20:54:11.280Z",
            "__v": 0
        }
    ]
  ```

### Admin Get All Users

- Method GET
  ```bash
   http://localhost:5000/api/admin/allJobs
  ```
- To Get All Users Admin token must needed as it is a private and a protected route. To get the token admin have to login first. admin account and password:
  ```bash
  email: admin@gmail.com
  password: admin
  ```
- Return
  ```bash
    [
        {
            "_id": "67fce314d0d4a9249d492d36",
            "company_name": "BrightByte Labs",
            "employee_name": "employee",
            "employee_email": "employee@gmail.com",
            "employee_id": "67fc241239c4ab214f72ca01",
            "title": "Frontend Developer",
            "description": "Develop and optimize user interfaces for web applications, ensuring seamless cross-browser compatibility and responsive design.",
            "location": "Austin, TX",
            "salary": 72000,
            "current_status": "accepting",
            "createdAt": "2025-04-14T10:27:32.496Z",
            "updatedAt": "2025-04-14T10:27:32.496Z",
            "__v": 0
        },
        {
            "_id": "67fd2ee20453864d1d86e7ed",
            "company_name": "TechNova Solutions",
            "employee_name": "abdul",
            "employee_email": "abdul@abdul",
            "employee_id": "67fd2c4c46b376ba04c11fe7",
            "title": "Frontend Developer",
            "description": "Responsible for developing and maintaining user-facing features for web applications using React and modern JavaScript frameworks.",
            "location": "San Francisco, CA",
            "salary": 95000,
            "current_status": "accepting",
            "createdAt": "2025-04-14T15:50:58.399Z",
            "updatedAt": "2025-04-14T15:50:58.399Z",
            "__v": 0
        }
    ]
  ```

### Employee Add Job API

- Method POST
  ```bash
   http://localhost:5000/api/employees/addJob
  ```
- Request Body
  ```bash
  {
      "company_name": "TechNova Solutions",
      "title": "Frontend Developer",
      "description": "Responsible for developing and maintaining user-facing features for web applications using React and modern JavaScript frameworks.",
      "location": "San Francisco, CA",
      "salary": 95000,
      "current_status": "accepting"
  }
  ```
- **Return**
  ```
  {
      "message": "New Job Added to Database"
  }
  ```

### Employee Add Job API

- Method POST
  ```bash
   http://localhost:5000/api/candidates/applyJob
  ```
- Request Body [This is a valid jobId]
  ```bash
  {
      "jobId":"67fd2ee20453864d1d86e7ed"
  }
  ```
- **Return**
  ```
  {
      "message": "Application Successfully Submitted"
  }
  ```

## Usage

- Register as a **Admin**, **Job Seeker** or **Employer**.
- Employers can post jobs.
- Job seekers can apply the job.

## Dependencies

- bcryptjs
- dotenv
- express
- jsonwebtoken
- mongoose
- multer
