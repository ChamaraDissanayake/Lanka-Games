import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { LankaGamesService } from '../lanka-games.service';
import { ViewImagePage } from '../view-image/view-image.page';

@Component({
  selector: 'app-modal-numeric',
  templateUrl: './modal-numeric.page.html',
  styleUrls: ['./modal-numeric.page.scss'],
})
export class ModalNumericPage implements OnInit {
  imageModal: any;
  videoModal: any;
  container:any = [];
  arrayContainer: any = [];
  questionId: any="";
  questionNo: any="";
  question: string="";
  questionImageUrl: string="";
  questionVideoThumbnail: string="";
  questionVideoUrl: string="";
  continue: boolean = false;
  time: number = 25;
  interval: any;

  @ViewChild('inputValue') inputValue: { value: any; };

  constructor(
    private modalController: ModalController,
    private router: Router,
    public service: LankaGamesService,
    private alertController: AlertController,
    private http: HttpClient
  ) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.getQuestions();
  }

  ionViewWillLeave(){
    clearInterval(this.interval);
    if(this.imageModal){
      this.imageModal.dismiss();
    }
  }

  async showImage(url){
    this.imageModal = await this.modalController.create({
      component: ViewImagePage,
      cssClass: 'custom-modal',
      backdropDismiss: false,
      componentProps: {
        'url': url
      }
    })
    await this.imageModal.present();
}

  async closeModal(){
    this.continue = false;
    this.submitAnswer();
    // await this.modalController.dismiss();
    this.router.navigateByUrl("/home", {replaceUrl: true});
  }

  next(){    
    this.continue = true;
    this.submitAnswer();
  }

  submitAnswer(){    
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
    options: any = {
      "user_id": this.service.userId,
      "question_id": this.questionId,
      "answer": this.inputValue.value
    },
    url: any = this.service.baseURL + 'prediction/saveQuestion';

    this.http.post(url, JSON.stringify(options), headers)
    .subscribe((data: any) => {
      console.log("submitAnswer",data);
      if(this.continue){ 
        this.showQuestions();
      }
    },
    (error: any) => {
      console.log('Something went wrong!', error);
    }); 
  }

  getQuestions(){
    console.log(this.service.gameCategoryId, this.service.userId)
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
    options: any = {
      "game_category_id": this.service.gameCategoryId,
      "user_id": this.service.userId
    },
    url: any = this.service.baseURL + 'prediction/getQuestion';

    this.http.post(url, JSON.stringify(options), headers)
    .subscribe((data: any) => {
      console.log("getQuestions",data)      
      if(data.length){
        this.arrayContainer = data;
        this.showQuestions();
      }else{
        this.alertEmpty();
      }
    },
    (error: any) => {
      console.log('Something went wrong!', error);
    }); 
  }

  showQuestions(){    
    if(this.arrayContainer.length){
      this.container = this.arrayContainer.shift();
      console.log("Show questions", this.container)
      this.questionId = this.container.questionId;
      this.questionNo = this.container.questionNo;
      this.question = this.container.question;
      this.questionImageUrl = this.container.questionImageUrl;
      this.questionVideoThumbnail = this.container.questionVideoThumbnail;
      this.questionVideoUrl = this.container.questionVideoUrl;
      this.startTimer();
    }else{
      this.alertEmpty()
    }
  }

  startTimer() {
    clearInterval(this.interval);
    this.time = 25;
    this.interval = setInterval(() => {
      if (this.time > 0) {
        this.time--;
      } else {
        clearInterval(this.interval)
        this.inputValue.value = null;
        this.showQuestions();
      }
    }, 1000);
  }

  async alertEmpty() {
    this.container= [];
    
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
}
