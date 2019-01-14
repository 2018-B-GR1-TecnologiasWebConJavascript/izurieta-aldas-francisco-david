import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialRouteComponent } from './routes/initial-route/initial-route.component';
import { MenuRouteComponent } from './routes/menu-route/menu-route.component';
import { ProfileRouteComponent } from './routes/profile-route/profile-route.component';
import { LoginRouteComponent } from './routes/login-route/login-route.component';
import { ErrorRouteComponent } from './routes/error-route/error-route.component';
import { UserAdminRouteComponent } from './routes/user-admin-route/user-admin-route.component';
import { ProductAdminRouteComponent } from './routes/product-admin-route/product-admin-route.component';
import { UserDetailsComponent } from './routes/user-details/user-details.component';
import { CreateRazaRouteComponent } from './routes/create-raza-route/create-raza-route.component';
import { UpdateRazaRouteComponent } from './routes/update-raza-route/update-raza-route.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: InitialRouteComponent
  },
  {
    path: 'menu',
    component: MenuRouteComponent,
    children: [
      {
        path: '',
        redirectTo: 'product-admin',
        pathMatch: 'full'
      },
      {
        path: 'user-admin',
        component: UserAdminRouteComponent
      },
      {
        path: 'create-raza',
        component: CreateRazaRouteComponent
      },
      {
        path: 'update-raza/:idRaza',
        component: UpdateRazaRouteComponent
      },
      {
        path: 'product-admin',
        component: ProductAdminRouteComponent
      },
      {
        path: 'user-detail/:userId',
        component: UserDetailsComponent
      }
    ]
  },
  {
    path: 'profile',
    component: ProfileRouteComponent
  },
  {
    path: 'login',
    component: LoginRouteComponent
  },
  {
    path: 'error',
    component: ErrorRouteComponent
  },
  {
    path: '**',
    redirectTo: 'error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
