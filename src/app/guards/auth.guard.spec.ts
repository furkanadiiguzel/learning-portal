import { TestBed } from '@angular/core/testing';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let authGuard: CanActivate;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, AuthService],
    });

    authGuard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should allow access when user is logged in', () => {
    // Mock the AuthService's IsLoggedIn method to return true
    spyOn(authService, 'IsLoggedIn').and.returnValue(true);

    // Create mock ActivatedRouteSnapshot and RouterStateSnapshot
    const routeSnapshot = new ActivatedRouteSnapshot();
    const routerStateSnapshot = jasmine.createSpyObj('RouterStateSnapshot', ['toString']);

    // Call the canActivate method with the mock snapshots
    const canActivate = authGuard.canActivate(routeSnapshot, routerStateSnapshot);

    // Expect that canActivate should return true when the user is logged in
    expect(canActivate).toBe(true);
  });

  it('should deny access when user is not logged in', () => {
    // Mock the AuthService's IsLoggedIn method to return false
    spyOn(authService, 'IsLoggedIn').and.returnValue(false);

    // Create mock ActivatedRouteSnapshot and RouterStateSnapshot
    const routeSnapshot = new ActivatedRouteSnapshot();
    const routerStateSnapshot = jasmine.createSpyObj('RouterStateSnapshot', ['toString']);

    // Call the canActivate method with the mock snapshots
    const canActivate = authGuard.canActivate(routeSnapshot, routerStateSnapshot);

    // Expect that canActivate should return false when the user is not logged in
    expect(canActivate).toBe(false);
  });
});
