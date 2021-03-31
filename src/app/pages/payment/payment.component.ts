import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/_Models/Payment';
import { PaymentService } from 'src/app/_Services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  paymentId:string;
  paymentInfo:Payment;
  infoDisplay:string = "none";

  reciverName = "";
  amount = 0.1;
  validUntill:Date ;

  constructor(
    private route: ActivatedRoute,
    private paymentService:PaymentService,
    private toastr: ToastrService

  ) { }

  ngOnInit(): void {
    this.paymentId = this.route.snapshot.paramMap.get("id")
  }

  get(){
    this.paymentService.getPayment(this.paymentId).subscribe(
      (info:Payment) => {
        this.reciverName = info.creator.name;
        this.amount = info.amount/100;
        this.validUntill = info.validUntill;
        this.infoDisplay = '';
    },
    (error) => {

      this.toastr.error(error.error, 'Failed', {
        timeOut: 2000,
        closeButton: true,
        toastClass: "alert alert-danger alert-with-icon",
        positionClass: 'toast-bottom-right'
      });
      this.infoDisplay = 'none';
    })
  }

}
