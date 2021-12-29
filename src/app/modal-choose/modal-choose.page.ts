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
  question: String="";
  questionImageUrl: String="";
  questionVideoThumbnail: String="";
  questionVideoUrl: String="";
  answers: any=[];

  constructor(
    private modalController: ModalController,
    private router: Router,
    public lankaGamesService: LankaGamesService,
    private platform: Platform
  ) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.lankaGamesService.nextQuestion1.next(false);
    this.platform.ready().then(()=>{
      this.container = this.arrayContainer;
      this.questionId = this.container[0].questionId;
      this.questionNo = this.container[0].questionNo;
      this.question = this.container[0].question;
      this.questionImageUrl = this.container[0].questionImageUrl;
      this.questionVideoThumbnail = this.container[0].questionVideoThumbnail;
      this.questionVideoUrl = this.container[0].questionVideoUrl;
      this.answers = this.container[0].answers;
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

  async closeModal(){
    await this.modalController.dismiss();
    this.router.navigateByUrl("/option-choose-category", {replaceUrl: true});
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
