import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-choose',
  templateUrl: './modal-choose.page.html',
  styleUrls: ['./modal-choose.page.scss'],
})
export class ModalChoosePage implements OnInit {

  answers:any = [
    [{"value":1},{"answer":"First answer"}],
    [{"value":2},{"answer":"Second answer"}],
    [{"value":3},{"answer":"Third answer"}],
    [{"value":4},{"answer":"Fourth answer"}]
  ];
  constructor(
    private modalController: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.answers)
  }

  async closeModal(){
    await this.modalController.dismiss();
    this.router.navigateByUrl("/home");
  }

  selectedAnswer(event){
    console.log(event.target.value);
  }
}
