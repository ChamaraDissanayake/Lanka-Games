import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LankaGamesService } from '../lanka-games.service';
import { ModalChoosePage } from '../modal-choose/modal-choose.page';

@Component({
  selector: 'app-option-choose',
  templateUrl: './option-choose.page.html',
  styleUrls: ['./option-choose.page.scss'],
})
export class OptionChoosePage implements OnInit {
  modal: any
  constructor(
    private modalController: ModalController,
    private router: Router,
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
    // this.router.navigateByUrl("/home");
  }
}