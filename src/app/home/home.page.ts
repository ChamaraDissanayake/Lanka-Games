import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LankaGamesService } from '../lanka-games.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  gameList:any =[];
  constructor(
    private router: Router,
    public service: LankaGamesService,
    private http: HttpClient,
    private storage: Storage
  ) {}

  ngOnInit(){
    this.getPhoneNumber();
  }

  async getPhoneNumber(){
    this.service.userPhone = await this.storage.get("phone");
    console.log("user phone", this.service.userPhone);
    this.loadApp();
  }

  loadApp(){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
    options: any = {
      phone: this.service.userPhone
    },
    url: any = this.service.baseURL + 'Loading';

    this.http.post(url, JSON.stringify(options), headers)
    .subscribe((data: any) => {
      console.log("Login",data)
      this.service.userId = data.user_id;
      this.service.language = data.language;
      this.getGameCategories();
    },
    (error: any) => {
      console.log('Something went wrong!', error);
    });
  }

  ionViewDidEnter(){    
    this.resetVariables();
  }

  gotoOption(index: number){
    console.log(index);    
    if(this.service.userId == 0){
      this.router.navigateByUrl("/login");
    } else {
      let game = this.gameList[index];
      this.service.gameCategoryId = game.game_category_id;
      console.log(game, this.service.userId)
      switch (game.game_type) {
        case 'General':
          console.log("Choose selected");
          this.router.navigateByUrl("/option-choose");
          break;
  
        case 'Prediction':
          console.log("Numeric selected");
          this.router.navigateByUrl("/option-numeric");
          break;
  
        case 'Bid':
          console.log("Bid selected");
          // this.router.navigateByUrl("/option-3");
          break;
      }
    }
  }

  changeLanguage(event){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
    options: any = {
      "language": event.target.value, //// si // en // ta
      "user_id": this.service.userId
    },
    url: any = this.service.baseURL + 'changeLanguage';

    this.http.post(url, JSON.stringify(options), headers)
    .subscribe((data: any) => {
      console.log("Change language",data)
      this.service.language = event.target.value;
      this.getGameCategories();
    },
    (error: any) => {
      console.log('Something went wrong!', error);
    }); 
  }

  getGameCategories(){
    console.log("language",this.service.language," user id", this.service.userId)
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
    options: any = {
      "language": this.service.language, //// si // en // ta
      "user_id": this.service.userId
    },
    url: any = this.service.baseURL + 'getGameCategory';

    this.http.post(url, JSON.stringify(options), headers)
    .subscribe((data: any) => {
      console.log("getGameCategoryData",data)
      this.gameList = data;
    },
    (error: any) => {
      console.log('Something went wrong!', error);
    });
  }

  // refresh() {
  //   this.zone.run(() => {
  //     console.log('force update the screen');
  //   });
  // }

  resetVariables(){
    this.service.gameCategoryId = 0;
  }

  fullScreenSwitch(){
    this.service.halfScreen = !this.service.halfScreen;
  }
}