import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserService} from "../shared/register.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public loginForm !: FormGroup
  public loggedInUser: any
  public loggedInUsername: any

  constructor(
      private http: HttpClient,
      private router: Router,
      private userService: UserService ) {
  }

  ngOnInit() {
    localStorage.setItem('SessionUser', this.userInfo)
    this.loginForm = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    })
    this.userService.getUserInfo(this.loggedInUsername)
        .subscribe((data: any) => {
            if(data.length > 0) {
                this.loggedInUser = data[0]
                console.log(data, 'dataaaaa')
            }
        })
  }
  userInfo: any
  logindata(formValue: any) {
      console.log(this.loginForm.value, 'valuee')
    this.userService.logIn(formValue)
        .subscribe(res => {
          this.userInfo = res
          let user = res.find((a:any) => {
            return a.email === this.loginForm.value.email && a.password == this.loginForm.value.password
          });

          if(user) {
            alert('success')
            this.loginForm.reset();
            this.router.navigate(['/dashboard'])
          }else {
            alert('error')
            this.router.navigate(['/auth/login'])
          }
        }, error => {
          alert('something wrong')
        })
  }
}
