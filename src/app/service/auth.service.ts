import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt'
import { UserSignUpResponse } from '../model/response/user.signup.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  result: any;
  constructor(private http: HttpClient) { }
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  baseUrl = "http://195.54.162.186:3003/";
  login(model: any) {
    return this.http.post(this.baseUrl + 'auth/sign-in', model)
  }
  register(model: any) {

    return this.http.post(this.baseUrl + 'auth/sign-up', model)
   
  }
  
}
