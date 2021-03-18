import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserRegisterModel } from 'src/app/_Models/UserRegisterModel';
import { AuthService } from 'src/app/_Services/Auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
model:any= {};

  constructor(
    private auth:AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  register() {
    this.auth.Register(this.model).subscribe(
      () => {
        this.toastr.success('Your account has been created.', 'Success', {
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
        
        console.log(error);
        
      }
    );
  }


}
