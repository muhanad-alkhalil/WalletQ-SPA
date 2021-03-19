import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../_Services/Auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthRoutGuard implements CanActivate {
  constructor(
    private auth:AuthService,
    private route:Router,
    private toastr: ToastrService
  ){}
  canActivate():boolean {
    if (this.auth.loggedIn()) {
      return true;
    }
    this.toastr.error('Please login!', 'Failed', {
      timeOut: 2000,
      closeButton: true,
      toastClass: "alert alert-danger alert-with-icon",
      positionClass: 'toast-bottom-right'
    });
    this.route.navigate(['/login'])
  }
  
}
