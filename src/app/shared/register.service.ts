import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = 'http://localhost:3000/users';
    constructor(private http: HttpClient) { }

    signUp(user: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, user);
    }

    logIn(user: any): Observable<any> {
       return this.http.get<any>(this.apiUrl, user);
    }

    getUserInfo(fullname: string):Observable<any> {
        return this.http.get(`${this.apiUrl}?fullname=${fullname}`)
    }

    logout(): void {
        localStorage.clear()
    }
}