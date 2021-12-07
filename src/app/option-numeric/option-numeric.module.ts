import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionNumericPageRoutingModule } from './option-numeric-routing.module';

import { OptionNumericPage } from './option-numeric.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionNumericPageRoutingModule
  ],
  declarations: [OptionNumericPage]
})
export class OptionNumericPageModule {}
