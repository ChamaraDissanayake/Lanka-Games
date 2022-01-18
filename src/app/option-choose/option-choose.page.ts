import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { LankaGamesService } from '../lanka-games.service';
import { ModalChoosePage } from '../modal-choose/modal-choose.page';

@Component({
  selector: 'app-option-choose',
  templateUrl: './option-choose.page.html',
  styleUrls: ['./option-choose.page.scss'],
})
export class OptionChoosePage implements OnInit {
  modal: any;
  arrayContainer:any;


  constructor(
    private modalController: ModalController,
    public service: LankaGamesService,
    private http: HttpClient,
    private alertController: AlertController,
    private router: Router
  ) {
    this.service.nextQuestion1.subscribe((value) => {
      console.log(value);
      if (true === value) {
        if(this.modal){
          this.modal.dismiss();
        }
        
        setTimeout(() => {
          this.getQuestion();
        }, 200);
      } else {
        console.log("Question displaying")
      }
   });
  }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    this.getQuestion();    
  }

  getQuestion(){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
    options: any = {
      "game_category_id": this.service.gameCategoryId,
      "user_id": this.service.userId
    },
    url: any = this.service.baseURL + 'getQuestion';

    this.http.post(url, JSON.stringify(options), headers)
    .subscribe((data: any) => {
      console.log("getQuestion",data)
      this.arrayContainer = data;
      if(data.length){
        this.showModal();
      }else{
        this.alertEmpty();
      }
    },
    (error: any) => {
      console.log('Something went wrong!', error);
    }); 
  }

  async showModal() {
    if(this.service.displayModal){
      this.service.displayModal = false;
      this.modal = await this.modalController.create({
        component: ModalChoosePage,
        cssClass: 'custom-modal',
        componentProps: {
          "arrayContainer":this.arrayContainer
        },
        backdropDismiss: false
      })
      await this.modal.present();
  
      setTimeout(() => {
        this.service.displayModal = true;
      }, 500);
    }  
  }


  async alertEmpty() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert!',
      message: 'No more questions available for now!',
      backdropDismiss: false,
      buttons: [{
          text: 'Okay',
          handler: () => {
            this.router.navigateByUrl("/home");
          }
        }
      ]
    });
    await alert.present();
  }

  ionViewWillLeave(){
    if(this.modal){
      this.modal.dismiss();
    }
  }
}