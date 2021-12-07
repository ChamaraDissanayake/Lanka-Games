import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  @ViewChild('otp1') otp1;
  @ViewChild('otp2') otp2;
  @ViewChild('otp3') otp3;
  @ViewChild('otp4') otp4;
  isIncorrectOtp: boolean = false;

  constructor(
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
  }

  ionViewWillLeave(){
    this.reset();
  }

  reset() {
    this.otp1.value = '';
    this.otp2.value = '';
    this.otp3.value = '';
    this.otp4.value = '';
    this.isValid = false;
  }

  OTP: any = { first: '', second: '', third: '', fourth: ''};
  isValid: boolean = false

  otpController(event, next, prev) {
    this.isIncorrectOtp=false;

    if (event.target.value.length < 1 && prev) {
      prev.setFocus();
    }
    else if (next && event.target.value.length > 0) {
      next.setFocus();
    }
    else {
      console.log("full or empty");
    }

    if (this.otp1.value && this.otp2.value && this.otp3.value && this.otp4.value) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }

  next(){
    // console.log(
    //   "otp ", this.otp1.value+this.otp2.value+this.otp3.value+this.otp4.value,
    //   ", user_id", this.kiaProviderService.user_id,
    //   ", otp_from ", this.kiaProviderService.from,
    //   ", booking_id", this.kiaProviderService.booking_id
    //   );

    // let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
    // options: any = {
      // "otp": this.otp1.value+this.otp2.value+this.otp3.value+this.otp4.value,
      // "user_id": this.kiaProviderService.user_id,
      // "otp_from": this.kiaProviderService.from,
      // "booking_id": this.kiaProviderService.booking_id
    // },
    // url: any = this.kiaProviderService.baseURL + 'otpVerify';

    // this.http.post(url, JSON.stringify(options), headers)
    // .subscribe((data: any) => {

    // },
    // (error: any) => {
    //   console.log('Something went wrong!', error);
    // });
    
    console.log("otp ", this.otp1.value+this.otp2.value+this.otp3.value+this.otp4.value);
    this.router.navigateByUrl("/home");
  }
}
