import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router
  ) {}

  gotoOption(opt){
    console.log(opt);
    switch (opt) {
      case 1:
        console.log("Choose selected");
        this.router.navigateByUrl("/option-choose");
        break;

      case 2:
        console.log("Numeric selected");
        this.router.navigateByUrl("/option-numeric");
        break;

      case 3:
        console.log("Bid selected");
        // this.router.navigateByUrl("/option-3");
        break;
    }
  }
}