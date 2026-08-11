import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RatingService } from '../../services/rating.service';
import { Course } from '../../models/models';

@Component({
  selector: 'app-rating-dialog',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, MatDialogModule,
    MatButtonModule, MatFormFieldModule, MatInputModule,
    MatIconModule, MatProgressSpinnerModule, MatSnackBarModule
  ],
  templateUrl: './rating-dialog.component.html'
})
export class RatingDialogComponent {
  ratingForm: FormGroup;
  hoveredStar = 0;
  selectedStar = 0;
  submitting = false;
  stars = [1, 2, 3, 4, 5];

  constructor(
    private fb: FormBuilder,
    private ratingService: RatingService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<RatingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { course: Course }
  ) {
    this.ratingForm = this.fb.group({
      comment: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  setStar(star: number): void {
    this.selectedStar = star;
  }

  getStarIcon(star: number): string {
    const active = this.hoveredStar || this.selectedStar;
    return star <= active ? 'star' : 'star_border';
  }

  submit(): void {
    if (this.ratingForm.invalid || this.selectedStar === 0) return;
    this.submitting = true;
    this.ratingService.submitRating({
      courseId: this.data.course.id,
      stars: this.selectedStar,
      comment: this.ratingForm.value.comment
    }).subscribe({
      next: () => {
        this.submitting = false;
        this.snackBar.open('تم إرسال تقييمك بنجاح ✅', 'إغلاق', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.submitting = false;
        const msg = err.status === 409
          ? 'لقد قيّمت هذا المقرر مسبقاً'
          : 'حدث خطأ، حاول مجدداً';
        this.snackBar.open(msg, 'إغلاق', {
          duration: 3000,
          panelClass: ['error-snackbar'],
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
    });
  }
}
