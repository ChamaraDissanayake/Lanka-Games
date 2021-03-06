import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LankaGamesService } from '../lanka-games.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public signup : FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private service: LankaGamesService) { 
    this.signup = this.formBuilder.group({
      // name:['', [Validators.required, Validators.pattern('[A-Za-z ]{2,}')]],
      // email:['', [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]],
      mobile:['', [Validators.required, Validators.pattern('[0]{1}[7]{1}[0-9]{8}'), Validators.minLength(10)]]
      });
    }

  ngOnInit() {
  }
  validation_messages = {
    // 'name': [
    //   { type: 'required', message: '* Name is required!' },
    //   { type: 'pattern', message: '* Not a valid name!' }
    // ],
    // 'email': [
    //   { type: 'required', message: '* Email is required!' },
    //   { type: 'pattern', message: '* Not a valid e-mail!' }
    // ],
    'mobile': [
      { type: 'required', message: '* Mobile number is required!' },
      { type: 'pattern', message: '* Not valid! Try 07XXXXXXXX' }
    ]
  };

  submitDetails(){
    console.log("signup data", this.signup.get('mobile').value);
    this.router.navigateByUrl("/otp");    
      let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        phone: this.signup.get('mobile').value
      },
      url: any = this.service.baseURL + 'userRegister';
  
      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        console.log("register",data)
      },
      (error: any) => {
        console.log('Something went wrong!', error);
      });
    
  }
}
