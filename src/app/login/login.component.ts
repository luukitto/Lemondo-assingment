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
  public currentUser: any

  constructor(
      private http: HttpClient,
      private router: Router,
      private userService: UserService ) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    })

  }


  userInfo: any
  logindata(formValue: any) {
    const userId = 1
    const user = this.loginForm.value
    console.log(this.loginForm.value, 'valuee')
    this.userService.logIn(formValue)
        .subscribe(res => {
          this.userInfo = res
          let user = res.find((a:any) => {
              sessionStorage.setItem('SessionStorage', JSON.stringify(this.loginForm.value))
              localStorage.setItem('userId', userId.toString());
              var data = sessionStorage.getItem('id')
              console.log(data, '8888888')
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
