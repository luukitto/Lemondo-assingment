import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "./register.service"; // Replace with the actual path to your authentication service

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    canActivate(): boolean {
        return true
    }
}


