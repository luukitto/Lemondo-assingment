import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private loggedIn = false
    private apiUrl = 'http://localhost:3000/users';
    private localStorageKey = 'currentUser'
    constructor(private http: HttpClient) { }

    signUp(user: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, user);
    }

    getUserProfile(): Observable<any> {
        return this.http.get<any>(this.apiUrl)
    }


    getCurrentUserIndex(userId: any) {
        return this.http.get<any[]>(`http://localhost:3000/users/${userId}`)
    }

    checkEmailExists(email: string): Observable<boolean> {
        return this.http.get<any[]>('http://localhost:3000/users')
            .pipe(
                map(users => users.some(user => user.email === email))
            );
    }


    logIn(user: any): Observable<any> {
        this.loggedIn = true
       return this.http.get<any>(this.apiUrl, user);
    }


    logout(): void {
        this.loggedIn = false
        localStorage.clear()
        sessionStorage.clear()
    }

    isLoggedId(): boolean {
        return this.loggedIn
    }
}
