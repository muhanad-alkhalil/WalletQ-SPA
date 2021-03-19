import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../_Models/User';


const options = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }),
};



@Injectable({
  providedIn: 'root'
})
export class UserService {

baseurl = environment.ApiURL;

constructor(private http:HttpClient) { }

getUserInfo(): Observable<User>{
  return this.http.get<User>(this.baseurl + 'user/info');
}

}
