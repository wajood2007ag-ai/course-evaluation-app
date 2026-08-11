export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  role: string;
  username: string;
}

export interface Course {
  id: number;
  name: string;
  description: string;
  semester: string;
}

export interface RatingRequest {
  courseId: number;
  stars: number;
  comment: string;
}

export interface RatingResponse {
  id: number;
  courseId: number;
  courseName: string;
  stars: number;
  comment: string;
  createdAt: string;
}

export interface DashboardStats {
  totalCourses: number;
  totalStudents: number;
  totalRatings: number;
}

export interface CourseAverage {
  courseId: number;
  courseName: string;
  semester: string;
  averageStars: number;
  totalRatings: number;
}
