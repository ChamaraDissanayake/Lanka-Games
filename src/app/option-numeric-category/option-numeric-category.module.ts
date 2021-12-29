import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionNumericCategoryPageRoutingModule } from './option-numeric-category-routing.module';

import { OptionNumericCategoryPage } from './option-numeric-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionNumericCategoryPageRoutingModule
  ],
  declarations: [OptionNumericCategoryPage]
})
export class OptionNumericCategoryPageModule {}
