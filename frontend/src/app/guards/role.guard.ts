import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const expectedRole = route.data['role'] as string;
  if (authService.getRole() === expectedRole) {
    return true;
  }
  if (authService.isAdmin()) {
    return router.createUrlTree(['/admin/dashboard']);
  }
  return router.createUrlTree(['/student/courses']);
};
