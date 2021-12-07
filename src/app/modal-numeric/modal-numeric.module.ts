import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNumericPageRoutingModule } from './modal-numeric-routing.module';

import { ModalNumericPage } from './modal-numeric.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalNumericPageRoutingModule
  ],
  declarations: [ModalNumericPage]
})
export class ModalNumericPageModule {}
