# Course Evaluation Application

تطبيق ويب لتقييم المقررات الدراسية — Full Stack (Angular 17 + Spring Boot + H2)

---

## 📋 المتطلبات

| الأداة | الإصدار المطلوب |
|--------|----------------|
| **Java JDK** | 17 أو أعلى |
| **Maven** | 3.8+ (أو استخدم `mvnw` المرفق) |
| **Node.js** | 18 أو أعلى |
| **Angular CLI** | `npm install -g @angular/cli` |

> ✅ **لا يحتاج PostgreSQL** — التطبيق يستخدم H2 In-Memory Database تشتغل تلقائياً.

---

## 🚀 تشغيل Backend (Spring Boot)

```bash
# 1. ادخل على مجلد backend
cd backend

# 2. شغّل التطبيق
mvn spring-boot:run
```

سيعمل Backend على: **http://localhost:8080**

---

## 🌐 تشغيل Frontend (Angular)

```bash
# 1. ادخل على مجلد frontend
cd frontend

# 2. ثبّت الـ packages (مرة واحدة فقط)
npm install

# 3. شغّل التطبيق
npm start
```

سيعمل Frontend على: **http://localhost:4200**

---

## 🔑 بيانات الدخول

| Username | Password | الدور |
|----------|----------|-------|
| `student1` | `password123` | طالب |
| `admin1` | `password123` | مشرف |

---

## 📱 صفحات التطبيق

| الصفحة | URL | الدور |
|--------|-----|-------|
| تسجيل الدخول | `/login` | الجميع |
| قائمة المقررات والتقييم | `/courses` | Student |
| لوحة تحكم المشرف | `/dashboard` | Admin |

---

## 🗄️ قاعدة البيانات (H2 Console)

بعد تشغيل Backend، يمكنك الوصول لقاعدة البيانات عبر المتصفح:

- **URL:** http://localhost:8080/h2-console
- **JDBC URL:** `jdbc:h2:mem:course_eval_db`
- **Username:** `sa`
- **Password:** *(اتركه فارغاً)*

---

## 🏗️ هيكل المشروع

```
CourseEvaluationApp/
├── backend/               # Spring Boot API
│   ├── src/main/java/com/courseval/
│   │   ├── controller/    # REST Controllers
│   │   ├── service/       # Business Logic
│   │   ├── entity/        # JPA Entities
│   │   ├── repository/    # Data Access
│   │   ├── security/      # JWT & Spring Security
│   │   └── dto/           # Data Transfer Objects
│   └── src/main/resources/
│       ├── application.properties
│       └── data.sql       # Initial Data (users + courses)
│
└── frontend/              # Angular 17 App
    └── src/app/
        ├── components/    # UI Components
        ├── services/      # HTTP Services
        ├── guards/        # Route Guards
        ├── interceptors/  # HTTP Interceptors
        └── models/        # TypeScript Models
```

---

## 🔌 API Endpoints

| Method | URL | الدور |
|--------|-----|-------|
| POST | `/api/auth/login` | Public |
| GET | `/api/courses` | Student + Admin |
| POST | `/api/ratings` | Student |
| GET | `/api/ratings/my` | Student |
| GET | `/api/dashboard/stats` | Admin |
| GET | `/api/dashboard/averages` | Admin |

---

## ⚙️ التقنيات المستخدمة

- **Frontend:** Angular 17, Angular Material, TypeScript
- **Backend:** Spring Boot 3.2, Spring Security, JWT
- **Database:** H2 In-Memory (لا يحتاج تثبيت)
- **Authentication:** JWT (JSON Web Token)
