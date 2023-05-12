import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    constructor(private router: Router) {
    }
    canActivate(): boolean {
        if(sessionStorage.getItem('SessionStorage')) {
            this.router.navigate(['/dashboard'])
            return true
        }else {
            this.router.navigate(['/auth/login'])
            localStorage.clear();
            sessionStorage.clear();
            return false
        }
    }
}


