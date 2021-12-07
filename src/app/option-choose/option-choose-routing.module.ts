import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionChoosePage } from './option-choose.page';

const routes: Routes = [
  {
    path: '',
    component: OptionChoosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionChoosePageRoutingModule {}
