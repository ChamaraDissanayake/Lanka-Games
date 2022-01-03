import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LankaGamesService } from '../lanka-games.service';
import { ModalNumericPage } from '../modal-numeric/modal-numeric.page';

@Component({
  selector: 'app-option-numeric',
  templateUrl: './option-numeric.page.html',
  styleUrls: ['./option-numeric.page.scss'],
})
export class OptionNumericPage implements OnInit {
  modal: any

  constructor(
    private modalController: ModalController,
    public service: LankaGamesService
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
    
  }

  ionViewDidEnter(){
    this.showModal();
  }

  async showModal() {
    if(this.service.displayModal){
      this.service.displayModal = false;
      this.modal = await this.modalController.create({
        component: ModalNumericPage,
        cssClass: 'custom-modal',
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
