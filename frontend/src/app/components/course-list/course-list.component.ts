import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CourseService } from '../../services/course.service';
import { RatingService } from '../../services/rating.service';
import { Course } from '../../models/models';
import { RatingDialogComponent } from '../rating-dialog/rating-dialog.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule, MatCardModule, MatButtonModule,
    MatIconModule, MatDialogModule, MatProgressSpinnerModule
  ],
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  ratedCourseIds = new Set<number>();
  loading = true;

  constructor(
    private courseService: CourseService,
    private ratingService: RatingService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
      this.ratingService.getMyRatings().subscribe(ratings => {
        ratings.forEach(r => this.ratedCourseIds.add(r.courseId));
        this.loading = false;
      });
    });
  }

  isRated(courseId: number): boolean {
    return this.ratedCourseIds.has(courseId);
  }

  openRatingDialog(course: Course): void {
    const dialogRef = this.dialog.open(RatingDialogComponent, {
      width: '500px',
      data: { course },
      direction: 'rtl'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.ratedCourseIds.add(course.id);
      }
    });
  }
}
