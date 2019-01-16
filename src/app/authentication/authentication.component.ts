import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  private userObject: any = {};
  private confirmPassword: string = "";

  constructor(private router: Router, private _restService: RestService) { }

  ngOnInit() {
    if(localStorage.getItem('token')) {
      this.router.navigate(['/dashboard']);
    }
  }

  loginUser() {
    if(this.validateUserInfo(this.userObject)) {
      this._restService.postRequest(this.userObject,'/login').subscribe(data => {
        console.log(data);
        localStorage.setItem('token',this.userObject.username);
        this.router.navigate(['/dashboard']);
      }, err => {
        console.log(" Login Error")
      })
    } else {
      alert("Please check the credentials");
    }
  }

  signUpUser() {
    if(this.validateUserInfo(this.userObject) && this.userObject.password == this.confirmPassword) {
      this._restService.postRequest(this.userObject,'/register').subscribe(data => {
        console.log(data);
        this.router.navigate(['/login']);
      }, err=> {
        console.log(err);
      })
    } else {
      alert("Unsuccessful");
    }
  }

  validateUserInfo(user) {
    if(user.username.length <= 4 || user.username.length >= 15) {
      alert("Characters must be between 4-15");
      return false;
    }
    else if(user.password <= 8) {
      alert("Invalid password");
      return false;
    }
    else return true;
  }

//jQUery UI Animations
  ngAfterViewInit(){
    $(document).ready(function(){
      $(".btn").click(function() {
        $(".form-signin").toggleClass("form-signin-left");
        $(".form-signup").toggleClass("form-signup-left");
        $(".frame").toggleClass("frame-long");
        $(".signup-inactive").toggleClass("signup-active");
        $(".signin-active").toggleClass("signin-inactive");
        $(".forgot").toggleClass("forgot-left");
        $(this).removeClass("idle").addClass("active");
        });
      });

      $(function() {
        $(".btn-signup").click(function(e) {
          $(".nav").toggleClass("nav-up");
          $(".form-signup-left").toggleClass("form-signup-down");
          $(".success").toggleClass("success-left");
          $(".frame").toggleClass("frame-short");
        });
      });

      $(function() {
        $(".btn-signin").click(function() {
          $(".btn-animate").toggleClass("btn-animate-grow");
          $(".welcome").toggleClass("welcome-left");
          $(".cover-photo").toggleClass("cover-photo-down");
          $(".frame").toggleClass("frame-short");
          $(".profile-photo").toggleClass("profile-photo-down");
          $(".btn-goback").toggleClass("btn-goback-up");
          $(".forgot").toggleClass("forgot-fade");
        });
      });
    }

}
