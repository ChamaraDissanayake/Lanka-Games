import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionChooseCategoryPage } from './option-choose-category.page';

const routes: Routes = [
  {
    path: '',
    component: OptionChooseCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionChooseCategoryPageRoutingModule {}
