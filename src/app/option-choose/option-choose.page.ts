import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LankaGamesService } from '../lanka-games.service';
import { ModalChoosePage } from '../modal-choose/modal-choose.page';

@Component({
  selector: 'app-option-choose',
  templateUrl: './option-choose.page.html',
  styleUrls: ['./option-choose.page.scss'],
})
export class OptionChoosePage implements OnInit {
  modal: any;
  arrayContainer:any = 
  [
    {
      "questionId": 1,
      "questionNo": 1,
      "question": "What is the species name of the bird appear in image?",

      //for image
      "questionImageUrl": "https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII",
      "questionVideoThumbnail":"",
      "questionVideoUrl":"",

      // //for video
      // "questionImageUrl": "",
      // "questionVideoThumbnail":"https://kiasl-content.s3.ap-southeast-1.amazonaws.com/uploads/promotion/2021/11/48f4305c15_1635760285.jpg",
      // "questionVideoUrl":"https://kiasl-content.s3.ap-southeast-1.amazonaws.com/uploads/promotion/2021/11/534c56fb7a_1635760284.mp4"
      "answers":
      [
        {"value":1, "answer":"Eagle", "image":"", "videoThumbnail":"https://kiasl-content.s3.ap-southeast-1.amazonaws.com/uploads/promotion/2021/11/806bb5a27f_1636020545.jpg", "video":"https://kiasl-content.s3.ap-southeast-1.amazonaws.com/uploads/promotion/2021/11/19a6d9ce75_1636020545.mp4"},
        {"value":2, "answer":"Hawk", "image":"", "videoThumbnail":"https://kiasl-content.s3.ap-southeast-1.amazonaws.com/uploads/promotion/2021/11/806bb5a27f_1636020545.jpg", "video":"https://kiasl-content.s3.ap-southeast-1.amazonaws.com/uploads/promotion/2021/11/19a6d9ce75_1636020545.mp4"},
        {"value":3, "answer":"Vulture", "image":"https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g", "videoThumbnail":"", "video":""},
        {"value":4, "answer":"None of the above", "image":"", "videoThumbnail":"https://kiasl-content.s3.ap-southeast-1.amazonaws.com/uploads/promotion/2021/11/91bd8f8560_1636000073.jpg", "video":"https://kiasl-content.s3.ap-southeast-1.amazonaws.com/uploads/promotion/2021/11/a0eefcdf62_1636000073.mp4"}
      ]
    },
  ];

  constructor(
    private modalController: ModalController,
    public lankaGamesService: LankaGamesService
  ) {
    this.lankaGamesService.nextQuestion1.subscribe((value) => {
      console.log(value);
      if (true === value) {
        this.modal.dismiss();
        setTimeout(() => {
          this.showModal();
        }, 1000);
      } else {
        console.log("Question displaying")
      }
   });
  }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    this.showModal();
  }

  async showModal() {
    this.modal = await this.modalController.create({
      component: ModalChoosePage,
      cssClass: 'custom-modal',
      componentProps: {
        "arrayContainer":this.arrayContainer
      },
      backdropDismiss: false
    })
    await this.modal.present();
  }

  ionViewWillLeave(){
    if(this.modal){
      this.modal.dismiss();
    }
  }

  next(){
    this.modal.dismiss();
    setTimeout(() => {
      this.showModal();
    }, 1000);
  }
}