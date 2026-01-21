# Contract-Management-Platform
Full-Stack Take-Home Assignment

🔗 Project Overview

The Contract Management Platform is a full-stack web application that enables users to:

Create reusable contract blueprints

Generate contracts from blueprints

Manage contracts through a strict lifecycle

View and track contracts via a dashboard

The system emphasizes backend-enforced business rules, clean API design, and a clear, workflow-driven UI.

🧠 Key Design Principles

Backend authority over lifecycle transitions

Frontend reflects allowed actions only

Clear separation of concerns

Extensible data modeling

Production-grade folder structure

🏗️ Architecture Overview
Frontend (Next.js)
 ├── Pages & Components
 ├── API Client
 └── State Management
        ↓ REST APIs
Backend (Express)
 ├── Controllers
 ├── Services (Lifecycle Rules)
 ├── Validators
 └── Prisma ORM
        ↓
PostgreSQL Database

🛠️ Tech Stack
Frontend

Next.js (App Router)

TypeScript

Tailwind CSS

shadcn/ui

Axios

Backend

Node.js

Express

TypeScript

Prisma ORM

PostgreSQL

Zod (request validation)

🗄️ Database Schema
Blueprint
Field	Type
id	UUID
name	String
fields	JSON
createdAt	Date
Contract
Field	Type
id	UUID
name	String
blueprintId	FK
status	Enum
fields	JSON
createdAt	Date
Contract Lifecycle (Enum)
CREATED → APPROVED → SENT → SIGNED → LOCKED
REVOKED

🔐 Contract Lifecycle Rules

Lifecycle transitions are strictly enforced on the backend.

Allowed Transitions
Current State	Allowed Next
CREATED	APPROVED, REVOKED
APPROVED	SENT
SENT	SIGNED, REVOKED
SIGNED	LOCKED
LOCKED	❌
REVOKED	❌

Invalid transitions are rejected by the API.

🔌 API Design Summary
Blueprint APIs
POST   /api/blueprints
GET    /api/blueprints
GET    /api/blueprints/:id

Contract APIs
POST   /api/contracts
GET    /api/contracts
GET    /api/contracts/:id

Lifecycle Transition
POST /api/contracts/:id/transition
Body: { status: "APPROVED" }

🎨 Frontend Features

Blueprint Creation UI

Contract Creation from Blueprint

Lifecycle Timeline Visualization

Dashboard with Status View

State-aware UI (only valid actions shown)

📁 Project Structure
Backend
backend/
 ├── prisma/
 ├── src/
 │   ├── controllers/
 │   ├── services/
 │   ├── routes/
 │   ├── validators/
 │   └── app.ts

Frontend
frontend/
 ├── app/
 ├── components/
 ├── lib/
 └── styles/

▶️ Setup Instructions
1️⃣ Clone Repository
git clone <your-github-repo-url>
cd contract-management-platform

2️⃣ Backend Setup
cd backend
npm install


Create .env:

DATABASE_URL="postgresql://user:password@localhost:5432/contracts"


Run migrations:

npx prisma migrate dev


Start backend:

npm run dev


Backend runs at:

http://localhost:4000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:3000

🧪 Assumptions & Trade-offs

Authentication is mocked / omitted

JSON used for flexible field storage

Single user role assumed

Focus placed on correctness and clarity over visual polish

🚀 Optional Enhancements Implemented

Lifecycle timeline visualization

Strict backend validation

Clean separation of services

Production-ready folder structure

📌 Submission Notes

No lifecycle bypass exists

Backend enforces all business rules

Frontend reflects system state accurately

README includes full architecture and setup

Code is modular and readable

👨‍💻 Author

Komal Gupta
MCA | Full Stack Developer
