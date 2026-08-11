import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RatingRequest, RatingResponse, DashboardStats, CourseAverage } from '../models/models';

@Injectable({ providedIn: 'root' })
export class RatingService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  submitRating(request: RatingRequest): Observable<RatingResponse> {
    return this.http.post<RatingResponse>(`${this.apiUrl}/ratings`, request);
  }

  getMyRatings(): Observable<RatingResponse[]> {
    return this.http.get<RatingResponse[]>(`${this.apiUrl}/ratings/my`);
  }

  getDashboardStats(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(`${this.apiUrl}/dashboard/stats`);
  }

  getCourseAverages(): Observable<CourseAverage[]> {
    return this.http.get<CourseAverage[]>(`${this.apiUrl}/dashboard/averages`);
  }
}
