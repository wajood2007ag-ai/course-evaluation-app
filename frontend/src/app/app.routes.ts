import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'student/courses',
    loadComponent: () =>
      import('./components/course-list/course-list.component').then(m => m.CourseListComponent),
    canActivate: [authGuard, roleGuard],
    data: { role: 'STUDENT' }
  },
  {
    path: 'admin/dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [authGuard, roleGuard],
    data: { role: 'ADMIN' }
  },
  { path: '**', redirectTo: '/login' }
];
