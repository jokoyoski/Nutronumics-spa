import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { UserSignUpResponse } from '../model/response/user.signup.response';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  languages: any = [];

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.languages = ['FRENCH', 'ENGLISH']
  }

  registerForm: FormGroup;

  model: any = {};
  response: UserSignUpResponse;
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  createRegisterForm() {
    this.registerForm = new FormGroup({
      'firstname': new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ],
      ),
      'lastname': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'language': new FormControl([], Validators.required)
    },

    )
  }


  ngOnInit() {
    this.createRegisterForm(); // step 3
  }

  register() {
    if (this.registerForm.valid) {
      this.model = Object.assign({}, this.registerForm.value);
      this.authService.register(this.model).subscribe((response: any) => {
        this.response = response;
        localStorage.setItem("name", this.response.data.user.firstname)
        localStorage.setItem("lang", this.response.data.user.language)
        localStorage.setItem("accessToken", this.response.data.accessToken)
        alert("Welcome")

      }, (error: any) => {
        alert(error.error.message)
      }, () => {
        alert('You are registered Successfully...')
        this.router.navigate(['/dashboard']);
      })

    }

  }
  passwordMatchValidator(g: FormGroup) {  //if password are equal

    return g.get('Password')?.value === g.get('ConfirmPassword')?.value ? null : { mismatch: true };
  }




}
