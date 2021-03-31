import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Payment } from '../_Models/Payment';

const options = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }),
};


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  baseurl = environment.ApiURL;

constructor(private http:HttpClient) { }

getPayment(id:string): Observable<Payment>{
  return this.http.get<Payment>(this.baseurl + 'payment/get/' + id)
}


pay(model): Observable<Payment>{
  return this.http.post<Payment>(this.baseurl + 'payment/pay/',model)
}

}
