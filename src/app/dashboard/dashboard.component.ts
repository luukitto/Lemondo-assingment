import {Component, OnInit} from '@angular/core';
import {UserService} from "../shared/register.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
      private userService: UserService,
      private router: Router,
      private http: HttpClient) {
  }

  userDash: any
  ngOnInit() {
    this.http.get<any>("http://localhost:3000/users")
        .subscribe((item:any) => {
          console.log(item, '123123')
          this.userDash = item
        })
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/auth/login'])
  }
}
