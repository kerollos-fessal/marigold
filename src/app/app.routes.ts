import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/general-layout/general-layout.module').then(
        (m) => m.GeneralLayoutModule
      ),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./modules/sign-up/sign-up.module').then(
        (m) => m.SignUpModule
      ),
  },
   {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
