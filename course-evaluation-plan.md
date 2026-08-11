# Course Evaluation Application — Project Plan

## Top-Level Overview

Build a full-stack **Course Evaluation Application** following the **SDLC** methodology.  
Students can log in and submit star ratings (1–5) with text comments for their courses at the end of each semester.  
Academic administrators can monitor and analyze all evaluations through a dedicated Dashboard.

**Tech Stack:**
- **Frontend:** Angular 17 (standalone)
- **Backend:** Spring Boot (Java 17)
- **Database:** PostgreSQL
- **Authentication:** JWT (JSON Web Token)
- **Roles:** Student, Admin

---

## Status

| Sub-Task | Status |
|----------|--------|
| 1 — Requirements Analysis | [x] done |
| 2 — Database Design | [x] done |
| 3 — Backend Auth + JWT | [x] done |
| 4 — Backend APIs | [x] done |
| 5 — Frontend Setup + Auth | [x] done |
| 6 — Frontend Student Pages | [x] done |
| 7 — Frontend Admin Dashboard | [x] done |
| 8 — Integration + Docs | [ ] pending |

---

## Test Credentials
| Username | Password | Role |
|----------|----------|------|
| student1 | password123 | STUDENT |
| admin1 | password123 | ADMIN |

## API Endpoints
| Method | URL | Role |
|--------|-----|------|
| POST | /api/auth/login | Public |
| GET | /api/courses | STUDENT + ADMIN |
| POST | /api/ratings | STUDENT |
| GET | /api/ratings/my | STUDENT |
| GET | /api/dashboard/stats | ADMIN |
| GET | /api/dashboard/averages | ADMIN |
