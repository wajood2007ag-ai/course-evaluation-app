import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    MatCardModule, MatFormFieldModule, MatInputModule,
    MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatSnackBarModule
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    if (this.authService.isLoggedIn()) {
      this.redirectByRole();
    }
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;
    this.loading = true;
    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.redirectByRole();
      },
      error: () => {
        this.loading = false;
        this.snackBar.open('اسم المستخدم أو كلمة المرور غير صحيحة', 'إغلاق', {
          duration: 3000,
          panelClass: ['error-snackbar'],
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
    });
  }

  private redirectByRole(): void {
    if (this.authService.isAdmin()) {
      this.router.navigate(['/admin/dashboard']);
    } else {
      this.router.navigate(['/student/courses']);
    }
  }
}
