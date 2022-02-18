import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginResponse } from '../model/response/user.login.response';
import { AuthService } from '../service/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  model: any = {};
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
  }
  jwtHelper = new JwtHelperService();
  loginForm: FormGroup;
  response: UserLoginResponse;
  decodedToken: any;

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = new FormGroup({
      
     
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
    },

    )
  }


  login() {
    if (this.loginForm.valid) {
      this.model = Object.assign({}, this.loginForm.value);
      this.authService.login(this.model).subscribe((response: any) => {
        this.response = response;
        this.decodedToken = this.jwtHelper.decodeToken(this.response.data.accessToken);  // decoding token
        localStorage.setItem("name", this.decodedToken.firstname)
        localStorage.setItem("lang", this.decodedToken.language)
        localStorage.setItem("accessToken", this.decodedToken.data.accessToken)
        alert("Welcome")

      }, (error: any) => {
        alert(error.error.message)
      }, () => {
        this.router.navigate(['/dashboard']);
      })

    }

  }
}
