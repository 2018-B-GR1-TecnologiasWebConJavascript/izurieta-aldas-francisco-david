import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialRouteComponent } from './routes/initial-route/initial-route.component';
import { ProfileRouteComponent } from './routes/profile-route/profile-route.component';
import { ErrorRouteComponent } from './routes/error-route/error-route.component';
import { MenuRouteComponent } from './routes/menu-route/menu-route.component';
import { LoginRouteComponent } from './routes/login-route/login-route.component';
import { UserAdminRouteComponent } from './routes/user-admin-route/user-admin-route.component';
import { ProductAdminRouteComponent } from './routes/product-admin-route/product-admin-route.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialRouteComponent,
    ProfileRouteComponent,
    ErrorRouteComponent,
    MenuRouteComponent,
    LoginRouteComponent,
    UserAdminRouteComponent,
    ProductAdminRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
