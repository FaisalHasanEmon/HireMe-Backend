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
