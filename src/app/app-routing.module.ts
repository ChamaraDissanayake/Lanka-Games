import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
  }
  // ,
  // {
  //   path: 'option-choose-category',
  //   loadChildren: () => import('./option-choose-category/option-choose-category.module').then( m => m.OptionChooseCategoryPageModule)
  // },
  // {
  //   path: 'option-numeric-category',
  //   loadChildren: () => import('./option-numeric-category/option-numeric-category.module').then( m => m.OptionNumericCategoryPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
