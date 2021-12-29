import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionNumericCategoryPage } from './option-numeric-category.page';

const routes: Routes = [
  {
    path: '',
    component: OptionNumericCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionNumericCategoryPageRoutingModule {}
