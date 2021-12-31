import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LankaGamesService } from '../lanka-games.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    public service: LankaGamesService
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

  test(event){    
    this.service.language = event.target.value;
  }
}