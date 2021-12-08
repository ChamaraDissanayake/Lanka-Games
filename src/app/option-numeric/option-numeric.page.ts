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
    public lankaGamesService: LankaGamesService
  ) {
    this.lankaGamesService.nextQuestion2.subscribe((value) => {
      console.log(value);
      if (true === value) {
        this.modal.dismiss();
        setTimeout(() => {
          this.showModal();
        }, 1000);
      } else {
        console.log("Cancelled by user")
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
      component: ModalNumericPage,
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
