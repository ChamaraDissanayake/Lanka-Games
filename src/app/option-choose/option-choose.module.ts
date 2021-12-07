import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionChoosePageRoutingModule } from './option-choose-routing.module';

import { OptionChoosePage } from './option-choose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionChoosePageRoutingModule
  ],
  declarations: [OptionChoosePage]
})
export class OptionChoosePageModule {}
