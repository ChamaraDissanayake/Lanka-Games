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
      "question": "Who won the maximum sixes award IPL 2019 season?",

      // //for image
      "questionImageUrl": "https://images.indianexpress.com/2019/03/ipl-759-2.jpg",
      "questionVideoThumbnail":"",
      "questionVideoUrl":"",

      // //for video
      // "questionImageUrl": "",
      // "questionVideoThumbnail":"https://images.indianexpress.com/2019/03/ipl-759-2.jpg",
      // "questionVideoUrl":"https://lankagames.s3.ap-southeast-1.amazonaws.com/test-video.mp4",
      "answers":
      [
        {"value":1, "answer":"Andre Russell", "image":"https://images.mid-day.com/images/images/2021/apr/andrerussell-trivia-bday_d.jpg", "videoThumbnail":"", "video":""},
        {"value":2, "answer":"Dinesh Karthik", "image":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/04/18/814311-dinesh-karthik-afp.jpg", "videoThumbnail":"", "video":""},
        {"value":3, "answer":"Chris Lynn", "image":"https://images.news18.com/ibnlive/uploads/2018/04/Lynn.jpg", "videoThumbnail":"", "video":""},
        // {"value":4, "answer":"None of the above", "image":"", "videoThumbnail":"", "video":""}
      ]
    },
  ];

  constructor(
    private modalController: ModalController,
    public service: LankaGamesService
  ) {
    this.service.nextQuestion1.subscribe((value) => {
      console.log(value);
      if (true === value) {
        if(this.modal){
          this.modal.dismiss();
        }
        
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

  ionViewWillLeave(){
    if(this.modal){
      this.modal.dismiss();
    }
  }
}