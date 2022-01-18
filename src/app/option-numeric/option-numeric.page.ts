import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { LankaGamesService } from '../lanka-games.service';
import { ModalNumericPage } from '../modal-numeric/modal-numeric.page';

@Component({
  selector: 'app-option-numeric',
  templateUrl: './option-numeric.page.html',
  styleUrls: ['./option-numeric.page.scss'],
})
export class OptionNumericPage implements OnInit {
  modal: any
  arrayContainer:any;

  constructor(
    private modalController: ModalController,
    public service: LankaGamesService,
    private http: HttpClient,
    private alertController: AlertController,
    private router: Router

  ) {
    this.service.nextQuestion2.subscribe((value) => {
      console.log("nextQuestion2 value", value);
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
    this.getQuestions();
    console.log("On init working")
    // this.service.numericQuestionArray =[
    //   {
    //     "questionId": 2,
    //     "questionNo": 1,
    //     "question": "1 How many triangles here?",
    //     "questionImageUrl": "https://lankagames.s3.ap-southeast-1.amazonaws.com/uploads/2022/01/87c83d489b_1641447716.png",
    //     "questionVideoThumbnail": "",
    //     "questionVideoUrl": "",
    //     "answers": []
    //   },
    //   {
    //     "questionId": 2,
    //     "questionNo": 2,
    //     "question": "2 How many triangles here?",
    //     "questionImageUrl": "https://lankagames.s3.ap-southeast-1.amazonaws.com/uploads/2022/01/87c83d489b_1641447716.png",
    //     "questionVideoThumbnail": "",
    //     "questionVideoUrl": "",
    //     "answers": []
    //   },
    //   {
    //     "questionId": 2,
    //     "questionNo": 3,
    //     "question": "3 How many triangles here?",
    //     "questionImageUrl": "https://lankagames.s3.ap-southeast-1.amazonaws.com/uploads/2022/01/87c83d489b_1641447716.png",
    //     "questionVideoThumbnail": "",
    //     "questionVideoUrl": "",
    //     "answers": []
    //   }
    // ]
  }

  ionViewDidEnter(){    
    console.log("Did enter working")
    // this.arrayContainer = this.service.numericQuestionArray.shift();
    // console.log(this.arrayContainer, "Chamara")
    // this.showModal();
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
        this.service.numericQuestionArray = data;
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
      this.arrayContainer = this.service.numericQuestionArray.shift();
      console.log("Array container", this.arrayContainer);
      this.service.displayModal = false;
      this.modal = await this.modalController.create({
        component: ModalNumericPage,
        cssClass: 'custom-modal',
        componentProps: {
          "arrayContainer": this.arrayContainer
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
