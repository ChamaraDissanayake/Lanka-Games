import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { LankaGamesService } from '../lanka-games.service';
import { ViewImagePage } from '../view-image/view-image.page';
import { ViewVideoPage } from '../view-video/view-video.page';
@Component({
  selector: 'app-modal-choose',
  templateUrl: './modal-choose.page.html',
  styleUrls: ['./modal-choose.page.scss'],
})
export class ModalChoosePage implements OnInit {
  imageModal: any;
  videoModal: any;
  container: any = [];

  questionId: any = "";
  questionNo: any = "";
  question: string = "";
  questionImageUrl: string = "";
  questionVideoThumbnail: string = "";
  questionVideoUrl: string = "";
  answers: any = [];
  answerId: number = -1;
  continue: boolean = false;
  time: number = 30;
  interval: any;
  isSubmited: boolean = false;

  constructor(
    private modalController: ModalController,
    private router: Router,
    public service: LankaGamesService,
    private alertController: AlertController,
    private http: HttpClient
  ) { }

  ngOnInit() {

  }

  async ionViewWillEnter() {
    this.getQuestion();
  }

  ionViewWillLeave() {
    clearInterval(this.interval);
    if (this.videoModal) {
      this.videoModal.dismiss();
    }
    if (this.imageModal) {
      this.imageModal.dismiss();
    }
  }

  goHome(){
    this.router.navigateByUrl("/home", { replaceUrl: true });
  }

  closeModal() {
    this.continue = false;
    this.submitAnswer();
    // this.router.navigateByUrl("/home", { replaceUrl: true });
  }

  next() {
    this.continue = true;
    this.submitAnswer();
  }

  startTimer() {
    clearInterval(this.interval);
    this.time = 30;
    this.interval = setInterval(() => {
      if (this.time > 0) {
        this.time--;
      } else {
        clearInterval(this.interval);
        this.answerId = -1;
        this.getQuestion();        
      }
    }, 1000);
  }

  getQuestion() {    
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "game_category_id": this.service.gameCategoryId,
        "user_id": this.service.userId
      },
      url: any = this.service.baseURL + 'getQuestion';

    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        console.log("getQuestion", data)
        if (data.length) {
          this.container = data;
          this.questionId = this.container[0].questionId;
          this.questionNo = this.container[0].questionNo;
          this.question = this.container[0].question;
          this.questionImageUrl = this.container[0].questionImageUrl;
          this.questionVideoThumbnail = this.container[0].questionVideoThumbnail;
          this.questionVideoUrl = this.container[0].questionVideoUrl;
          this.answers = this.container[0].answers;
          // this.answerId = this.answers[0].answerId;
          this.startTimer();
        } else {
          this.alertEmpty();
        }
      },
      (error: any) => {
        this.alertEmpty();
        console.log('Something went wrong!', error);
      });
  }

  async showImage(url) {
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

  async showVideo(url, thumbnail) {
    this.videoModal = await this.modalController.create({
      component: ViewVideoPage,
      cssClass: 'custom-modal',
      backdropDismiss: false,
      componentProps: {
        'url': url,
        'thumbnail': thumbnail
      }
    })
    await this.videoModal.present();
  }

  selectedAnswer(event) {
    this.answerId = event.target.value;
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
      }]
    });
    await alert.present();
  }

  submitAnswer() {
    this.isSubmited = true;
    
    console.log("user_id", this.service.userId,
      "question_id", this.questionId,
      "answer_id", this.answerId)
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "user_id": this.service.userId,
        "question_id": this.questionId,
        "answer_id": this.answerId
      },
      url: any = this.service.baseURL + 'saveUserAnswer';

    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        console.log("Answer submited", data);
      },(error: any) => {
        this.answerId = -1;
        console.log('Something went wrong!', error);
      });
  }

  nextQuestion(){
    this.answerId = -1;
    this.container = [];
    this.isSubmited = false;
    console.log("submitAnswer");
    if (this.continue) {
      this.getQuestion();
    }else{
      this.goHome();
    }
  }
}
