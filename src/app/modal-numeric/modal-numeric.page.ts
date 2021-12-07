import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-numeric',
  templateUrl: './modal-numeric.page.html',
  styleUrls: ['./modal-numeric.page.scss'],
})
export class ModalNumericPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async closeModal(){
    await this.modalController.dismiss();
    this.router.navigateByUrl("/home");
  }
}
