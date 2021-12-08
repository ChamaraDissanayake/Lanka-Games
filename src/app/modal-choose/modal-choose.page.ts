import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LankaGamesService } from '../lanka-games.service';
import { NgxIonicImageViewerModule, ViewerModalComponent } from 'ngx-ionic-image-viewer';
@Component({
  selector: 'app-modal-choose',
  templateUrl: './modal-choose.page.html',
  styleUrls: ['./modal-choose.page.scss'],
})
export class ModalChoosePage implements OnInit {

  container:any = 
  [
    {
      "questionId": 1,
      "questionNo": 1,
      "question": "What is the species name of the bird appear in image?",
      // "questionImageUrl": "https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII",
      "questionImageUrl": "",
      "questionVideoThumbnail":"https://kiasl-content.s3.ap-southeast-1.amazonaws.com/uploads/promotion/2021/11/48f4305c15_1635760285.jpg",
      "questionVideoUrl":"https://kiasl-content.s3.ap-southeast-1.amazonaws.com/uploads/promotion/2021/11/534c56fb7a_1635760284.mp4",      
      // "questionVideoThumbnail":"",
      // "questionVideoUrl":""
    },
    [
      {"value":1, "answer":"Eagle", "image":"https://i.picsum.photos/id/1040/4496/3000.jpg?hmac=kvZONlBpTcZ16PuE_g2RWxlicQ5JKVq2lqqZndfafBY", "videoThumbnail":"", "video":""},
      {"value":2, "answer":"Hawk", "image":"https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0", "videoThumbnail":"", "video":""},
      {"value":3, "answer":"Vulture", "image":"https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g", "videoThumbnail":"", "video":""},
      {"value":4, "answer":"None of the above", "image":"", "videoThumbnail":"https://kiasl-content.s3.ap-southeast-1.amazonaws.com/uploads/promotion/2021/11/91bd8f8560_1636000073.jpg", "video":"https://kiasl-content.s3.ap-southeast-1.amazonaws.com/uploads/promotion/2021/11/a0eefcdf62_1636000073.mp4"}
    ]
    
  ];

  questionId: any;
  questionNo: any;
  question: String="";
  questionImageUrl: String="";
  questionVideoThumbnail: String="";
  questionVideoUrl: String="";
  answers: any;
  videoReady: boolean = false;
  videoUrl: String="";

  constructor(
    private modalController: ModalController,
    private router: Router,
    public lankaGamesService: LankaGamesService
  ) { }

  ngOnInit() {
    this.questionId = this.container[0].questionId;
    this.questionNo = this.container[0].questionNo;
    this.question = this.container[0].question;
    this.questionImageUrl = this.container[0].questionImageUrl;
    this.questionVideoThumbnail = this.container[0].questionVideoThumbnail;
    this.questionVideoUrl = this.container[0].questionVideoUrl;
    this.answers = this.container[1];
    console.log(this.container);
  }

  ionViewWillEnter(){
    this.lankaGamesService.nextQuestion1.next(false);
  }

  ionViewWillLeave(){
    this.videoReady = false;
  }

  async closeModal(){
    await this.modalController.dismiss();
    this.router.navigateByUrl("/home");
  }

  selectedAnswer(event){
    this.videoReady = false;    
    console.log(event.target.value);
  }

  next(){
    this.lankaGamesService.nextQuestion1.next(true);
  }

  async showImage(url) {
    console.log("image", url);
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: url
      },
      cssClass: 'ion-img-viewer',
      keyboardClose: true,
      showBackdrop: true
    });
 
    return await modal.present();
  }

  showVideo(url){
    this.videoReady = true;
    this.videoUrl = url;
    console.log("video", url);
  }
}
