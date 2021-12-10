import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.page.html',
  styleUrls: ['./view-image.page.scss'],
})
export class ViewImagePage implements OnInit {
  @Input() url: string;
  slideOpts = {
    initialSlide: 1
  };

  constructor(private modalController: ModalController,) { }

  ngOnInit() {
  }

  ionViewWillLeave(){
    this.closeImage();
  }

  async closeImage(){
    await this.modalController.dismiss();
  }
}
