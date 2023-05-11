import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserService} from "../shared/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm !: FormGroup


  constructor(
      private formBuilder: FormBuilder,
      private http: HttpClient,
      private router: Router,
      private userService: UserService) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      mobile: ['', Validators.required]
    })
  }

  signup(formValue: any) {
    this.userService.signUp(formValue)
        .subscribe(res => {
          console.log('success', res)
          this.registerForm.reset()
          this.router.navigate(['/auth/login'])
        }, error => {
          console.log('error', error)
        })
  }

}
