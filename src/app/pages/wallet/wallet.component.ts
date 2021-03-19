import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_Models/User';
import { UserService } from 'src/app/_Services/User.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  public WalletId:string;
  CreatedAt: Date;
  Owner:string;
  userModel: User
  Blance:number;

  constructor(
    private userService:UserService
  ) { }


  

  ngOnInit() {
    this.getUserInfo();


  }

  getUserInfo(){
    this.userService.getUserInfo()
    .subscribe( (user:User) => {
      this.userModel = user;
      this.WalletId = user.wallet.id;
      this.CreatedAt = user.wallet.createdAt;
      this.Owner = user.name + ' ' + user.surname;
      this.Blance = user.wallet.balance;
    });
  }

}
