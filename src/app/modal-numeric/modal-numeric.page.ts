import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { LankaGamesService } from '../lanka-games.service';
import { ViewImagePage } from '../view-image/view-image.page';

@Component({
  selector: 'app-modal-numeric',
  templateUrl: './modal-numeric.page.html',
  styleUrls: ['./modal-numeric.page.scss'],
})
export class ModalNumericPage implements OnInit {
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
  continue: boolean = false;
  @ViewChild('inputValue') inputValue: { value: any; };

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
    this.service.nextQuestion2.next(false);
    this.platform.ready().then(()=>{
      this.container = this.arrayContainer;

      console.log("Chamara" ,this.container)
      this.questionId = this.container[0].questionId;
      this.questionNo = this.container[0].questionNo;
      this.question = this.container[0].question;
      this.questionImageUrl = this.container[0].questionImageUrl;
      this.questionVideoThumbnail = this.container[0].questionVideoThumbnail;
      this.questionVideoUrl = this.container[0].questionVideoUrl;
    })
  }

  ionViewWillLeave(){
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
    // this.submitAnswer();
    await this.modalController.dismiss();
    this.router.navigateByUrl("/home", {replaceUrl: true});
  }

  next(){    
    this.continue = true;
    // this.submitAnswer();
  }

  submitAnswer(){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
    options: any = {
      "user_id": this.service.userId,
      "question_id": this.questionId,
      "answer_id": 5
    },
    url: any = this.service.baseURL + 'saveUserAnswer';

    this.http.post(url, JSON.stringify(options), headers)
    .subscribe((data: any) => {
      console.log("submitAnswer",data);
      if(this.continue){
        this.service.nextQuestion2.next(true);
      }
    },
    (error: any) => {
      console.log('Something went wrong!', error);
    }); 
  }
}
