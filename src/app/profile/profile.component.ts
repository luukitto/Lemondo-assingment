import {Component, OnInit} from '@angular/core';
import {UserService} from "../shared/register.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  user: any
  currentUserIndex: any
  public formValues = {
    fullname: 'ergwe',
    email: '',
    personalNumber: '',
  };

  // public emailAndPhone = {
  //   email: '',
  //   phone: '',
  // };
  constructor(
      private userService: UserService,
      private route: ActivatedRoute,
      private router: Router
  ) {
  }

  private subscription:any = {
    getData: Subscription,
    updatePhone: Subscription,
  }
  ngOnInit() {
    this.getProfileData()
    this.route.params.subscribe(params => {
      const userId = localStorage.getItem('userId');
      this.userService.getCurrentUserIndex(userId).subscribe((data: any) => {
        this.user = data
      })
    })
    // const userId = 1
    // this.userService.getCurrentUserIndex(userId).subscribe((data: any) => {
    //   console.log(data, '343434343')
    //   this.user = data
    // })
  }

  public getProfileData() {
    this.subscription.getData = this.userService.getUserProfile().subscribe((resp) => {
      console.log(resp, '5555556')
      this.formValues.fullname = resp.fullname
      this.formValues.email = resp.email
      this.formValues.personalNumber = resp.personalNumber
    })


  }
  logout() {
    this.userService.logout();
    localStorage.clear()
    this.router.navigate(['/auth/login'])
  }

}


