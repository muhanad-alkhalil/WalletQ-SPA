import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { LoginModal } from '../_Models/LoginModel';
import { UserRegisterModel } from '../_Models/UserRegisterModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseurl = environment.ApiURL;
  jwtHelper = new JwtHelperService();
  decodedToken: any;
constructor(private http:HttpClient) { }

login(model: LoginModal) {
  return this.http.post(this.baseurl + 'auth/login', model).pipe(
    map((response: any) => {
      const user = response;
      if (user) {
        localStorage.setItem('token', user.token);
        this.decodedToken = this.jwtHelper.decodeToken(user.token);
      }
    })
  );
}

Register(model: UserRegisterModel) {
  return this.http.post(this.baseurl + 'user/register', model);
}

loggedIn() {
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);
}



}
