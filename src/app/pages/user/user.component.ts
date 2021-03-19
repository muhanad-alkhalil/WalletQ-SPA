import { Component, OnInit } from "@angular/core";
import { User } from "src/app/_Models/User";
import { Wallet } from "src/app/_Models/Wallet";
import { UserService } from "src/app/_Services/User.service";

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  constructor(
    private userService:UserService
  ) {}

  public WalletId:string;
  dateofbirth: Date;
  firstname:string;
  lastname:string;
  email:string;
  phone:string;
  Blance:number;

  ngOnInit() {
    this.getUserInfo();

  }

  getUserInfo(){
    this.userService.getUserInfo()
    .subscribe( (user:User) => {
      this.WalletId = user.wallet.id;
      this.dateofbirth = user.dateOfBirth;
      this.phone = user.phoneNumber
      this.firstname = user.name;
      this.lastname = user.surname;
      this.email = user.email;
    });
  }
}
