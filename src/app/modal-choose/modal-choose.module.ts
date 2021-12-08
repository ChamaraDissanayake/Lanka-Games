import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ModalChoosePageRoutingModule } from './modal-choose-routing.module';

import { ModalChoosePage } from './modal-choose.page';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ModalChoosePageRoutingModule,
    NgxIonicImageViewerModule
  ],
  declarations: [ModalChoosePage]
})
export class ModalChoosePageModule {}
