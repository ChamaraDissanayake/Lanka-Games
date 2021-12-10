import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
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
  container:any = 
  [
    {
      "questionId": 1,
      "questionNo": 1,
      "question": "What is the species name of the bird appear in image?",
      "questionImageUrl": "https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII",
      // "questionImageUrl": "",
      // "questionVideoThumbnail":"https://kiasl-content.s3.ap-southeast-1.amazonaws.com/uploads/promotion/2021/11/48f4305c15_1635760285.jpg",
      // "questionVideoUrl":"https://kiasl-content.s3.ap-southeast-1.amazonaws.com/uploads/promotion/2021/11/534c56fb7a_1635760284.mp4",
      "questionVideoThumbnail":"",
      "questionVideoUrl":""
    },
    [
      {"value":1, "answer":"Eagle", "image":"", "videoThumbnail":"https://kiasl-content.s3.ap-southeast-1.amazonaws.com/uploads/promotion/2021/11/806bb5a27f_1636020545.jpg", "video":"https://kiasl-content.s3.ap-southeast-1.amazonaws.com/uploads/promotion/2021/11/19a6d9ce75_1636020545.mp4"},
      {"value":2, "answer":"Hawk Eagle Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique facere aut enim error eaque quidem reiciendis ducimus, molestiae provident inventore possimus, unde recusandae, voluptatum obcaecati natus maxime veritatis odit assumenda.", "image":"", "videoThumbnail":"https://kiasl-content.s3.ap-southeast-1.amazonaws.com/uploads/promotion/2021/11/806bb5a27f_1636020545.jpg", "video":"https://kiasl-content.s3.ap-southeast-1.amazonaws.com/uploads/promotion/2021/11/19a6d9ce75_1636020545.mp4"},
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

  async closeModal(){
    await this.modalController.dismiss();
    this.router.navigateByUrl("/home");
  }

  selectedAnswer(event){
    console.log(event.target.value);
  }

  next(){
    this.lankaGamesService.nextQuestion1.next(true);
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
