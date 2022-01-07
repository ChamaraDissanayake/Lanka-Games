import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { LankaGamesService } from '../lanka-games.service';
import { ViewImagePage } from '../view-image/view-image.page';
import { ViewVideoPage } from '../view-video/view-video.page';
@Component({
  selector: 'app-modal-choose',
  templateUrl: './modal-choose.page.html',
  styleUrls: ['./modal-choose.page.scss'],
})
export class ModalChoosePage implements OnInit {
  @Input() arrayContainer: any;
  imageModal: any;
  videoModal: any;
  container:any = [];

  questionId: any="";
  questionNo: any="";
  question: string="";
  questionImageUrl: string="";
  questionVideoThumbnail: string="";
  questionVideoUrl: string="";
  answers: any=[];
  answerId: number = 0;
  continue: boolean = false;
  notFirstLoad: boolean = false;

  constructor(
    private modalController: ModalController,
    private router: Router,
    public service: LankaGamesService,
    private platform: Platform,
    private http: HttpClient
  ) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.service.nextQuestion1.next(false);
    this.platform.ready().then(()=>{
      this.container = this.arrayContainer;
      this.questionId = this.container[0].questionId;
      this.questionNo = this.container[0].questionNo;
      this.question = this.container[0].question;
      this.questionImageUrl = this.container[0].questionImageUrl;
      this.questionVideoThumbnail = this.container[0].questionVideoThumbnail;
      this.questionVideoUrl = this.container[0].questionVideoUrl;
      this.answers = this.container[0].answers;
      this.answerId = this.answers[0].answerId;
    })
  }

  ionViewWillLeave(){
    if(this.videoModal){
      this.videoModal.dismiss();
    }
    if(this.imageModal){
      this.imageModal.dismiss();
    }
  }

  selectedAnswer(event){
    if(this.notFirstLoad){
      this.answerId = event.target.value;      
    }else{
      this.notFirstLoad = true;
    }
  }
  
  async closeModal(){
    this.continue = false;
    this.submitAnswer();
    await this.modalController.dismiss();
    this.router.navigateByUrl("/home", {replaceUrl: true});
  }

  next(){    
    this.continue = true;
    this.submitAnswer();
  }

  submitAnswer(){
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
      console.log("submitAnswer",data);
      if(this.continue){
        this.service.nextQuestion1.next(true);
      }
    },
    (error: any) => {
      console.log('Something went wrong!', error);
    }); 
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

  async showVideo(url, thumbnail){
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
}
