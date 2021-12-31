import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LankaGamesService } from '../lanka-games.service';
import { ViewImagePage } from '../view-image/view-image.page';

@Component({
  selector: 'app-modal-numeric',
  templateUrl: './modal-numeric.page.html',
  styleUrls: ['./modal-numeric.page.scss'],
})
export class ModalNumericPage implements OnInit {
  imageModal: any;
  constructor(
    private modalController: ModalController,
    private router: Router,
    public service: LankaGamesService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.service.nextQuestion2.next(false);
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
    await this.modalController.dismiss();
    this.router.navigateByUrl("/home", {replaceUrl: true});
  }

  next(){
    this.service.nextQuestion2.next(true);
  }
}
