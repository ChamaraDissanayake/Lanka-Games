import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNumericPage } from './modal-numeric.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNumericPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNumericPageRoutingModule {}
