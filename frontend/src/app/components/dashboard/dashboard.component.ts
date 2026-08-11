import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { RatingService } from '../../services/rating.service';
import { DashboardStats, CourseAverage } from '../../models/models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, MatCardModule, MatTableModule,
    MatIconModule, MatProgressSpinnerModule, MatChipsModule
  ],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  stats: DashboardStats | null = null;
  averages: CourseAverage[] = [];
  loading = true;
  displayedColumns = ['courseName', 'semester', 'averageStars', 'totalRatings'];

  constructor(private ratingService: RatingService) {}

  ngOnInit(): void {
    this.ratingService.getDashboardStats().subscribe(stats => {
      this.stats = stats;
      this.ratingService.getCourseAverages().subscribe(averages => {
        this.averages = averages;
        this.loading = false;
      });
    });
  }

  getStarArray(): number[] {
    return [1, 2, 3, 4, 5];
  }

  getStarIcon(star: number, avg: number): string {
    if (star <= Math.floor(avg)) return 'star';
    if (star === Math.ceil(avg) && avg % 1 >= 0.5) return 'star_half';
    return 'star_border';
  }
}
