

import { Injectable } from '@angular/core';


import { AuthService } from '../service/auth.service';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }
    path: import('@angular/router').ActivatedRouteSnapshot[];
    route: import('@angular/router').ActivatedRouteSnapshot;

    canActivate(next: ActivatedRouteSnapshot

    ): boolean {

        if (localStorage.getItem('accessToken') == null) {
            this.router.navigate(['/']);  // navigate to home
            return false
        }
        return true;
    }
}