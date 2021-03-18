import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginModal } from 'src/app/_Models/LoginModel';
import { AuthService } from 'src/app/_Services/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private router:Router,
    private toastr: ToastrService

  ) { }

model:any = {};


  ngOnInit() {
  }

  
  login() {
    this.auth.login(this.model).subscribe(
      (next) => {
        this.toastr.success('login success.', 'Success', {
          timeOut: 2000,
          closeButton: true,
          toastClass: "alert alert-success alert-with-icon",
          positionClass: 'toast-bottom-right'
        });
        this.router.navigate(['']);
      },
      (error) => {
        this.toastr.error(error.error, 'Failed', {
          timeOut: 2000,
          closeButton: true,
          toastClass: "alert alert-danger alert-with-icon",
          positionClass: 'toast-bottom-right'
        }); 
      }
    );
  }

}
