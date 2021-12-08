import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LankaGamesService } from '../lanka-games.service';

@Component({
  selector: 'app-modal-numeric',
  templateUrl: './modal-numeric.page.html',
  styleUrls: ['./modal-numeric.page.scss'],
})
export class ModalNumericPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router,
    public lankaGamesService: LankaGamesService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.lankaGamesService.nextQuestion2.next(false);
  }

  async closeModal(){
    await this.modalController.dismiss();
    this.router.navigateByUrl("/home");
  }

  next(){
    this.lankaGamesService.nextQuestion2.next(true);
  }
}
