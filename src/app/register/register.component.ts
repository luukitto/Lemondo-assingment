import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
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
      fullname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [Validators.required]]
    }, {validators: this.passwordMatchValidator})
  }

    passwordMatchValidator(group: FormGroup) {
        const password = group.get('password')?.value;
        const confirmPassword = group.get('confirmPassword')?.value;
        return password === confirmPassword ? null : { passwordsNotMatch: true };
    }


    checkEmail() {
      const email = this.registerForm.value.email;
      this.userService.checkEmailExists(email).subscribe(emailExits => {
          if(emailExits){

          }else {
              alert('email is aleady exist')
          }
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
