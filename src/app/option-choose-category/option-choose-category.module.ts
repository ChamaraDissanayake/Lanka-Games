import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionChooseCategoryPageRoutingModule } from './option-choose-category-routing.module';

import { OptionChooseCategoryPage } from './option-choose-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionChooseCategoryPageRoutingModule
  ],
  declarations: [OptionChooseCategoryPage]
})
export class OptionChooseCategoryPageModule {}
