import { NgModule } from '@angular/core';
import { GeneralLayoutComponent } from './general-layout.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GeneralLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../../modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('../../modules/about-us/about-us.module').then(
            (m) => m.AboutUsModule
          ),
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import('../../modules/contact-us/contact-us.module').then(
            (m) => m.ContactUsModule
          ),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('../../modules/cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'checkout',
        loadChildren: () =>
          import('../../modules/checkout/checkout.module').then(
            (m) => m.CheckoutModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../../modules/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'shop',
        loadChildren: () =>
          import('../../modules/shop/shop.module').then((m) => m.ShopModule),
      },
      {
        path: 'track-order',
        loadChildren: () =>
          import('../../modules/track-order/track-order.module').then(
            (m) => m.TrackOrderModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralLayoutRoutingModule {}
