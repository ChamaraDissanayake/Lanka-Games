import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.page.html',
  styleUrls: ['./view-video.page.scss'],
})
export class ViewVideoPage implements OnInit {
  @Input() url: string;
  @Input() thumbnail: string;

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