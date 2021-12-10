import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'option-choose',
    loadChildren: () => import('./option-choose/option-choose.module').then( m => m.OptionChoosePageModule)
  },
  {
    path: 'option-numeric',
    loadChildren: () => import('./option-numeric/option-numeric.module').then( m => m.OptionNumericPageModule)
  },
  {
    path: 'modal-numeric',
    loadChildren: () => import('./modal-numeric/modal-numeric.module').then( m => m.ModalNumericPageModule)
  },
  {
    path: 'modal-choose',
    loadChildren: () => import('./modal-choose/modal-choose.module').then( m => m.ModalChoosePageModule)
  },
  {
    path: 'view-image',
    loadChildren: () => import('./view-image/view-image.module').then( m => m.ViewImagePageModule)
  },
  {
    path: 'view-video',
    loadChildren: () => import('./view-video/view-video.module').then( m => m.ViewVideoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
