import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionNumericPage } from './option-numeric.page';

const routes: Routes = [
  {
    path: '',
    component: OptionNumericPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionNumericPageRoutingModule {}
