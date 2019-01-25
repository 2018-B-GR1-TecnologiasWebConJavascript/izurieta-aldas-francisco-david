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
import { UserServiceService } from './services/user-service.service';
import { UserDetailsComponent } from './routes/user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RazaRestService } from './services/rest/raza-rest.service';
import { CreateRazaRouteComponent } from './routes/create-raza-route/create-raza-route.component';
import { FormsModule } from '@angular/forms';
import { UpdateRazaRouteComponent } from './routes/update-raza-route/update-raza-route.component';
import { ImagenPeliculaComponent } from './components/imagen-pelicula/imagen-pelicula.component';
import { RazaFormComponent } from './components/raza-form/raza-form.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/rest/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    InitialRouteComponent,
    ProfileRouteComponent,
    ErrorRouteComponent,
    MenuRouteComponent,
    LoginRouteComponent,
    UserAdminRouteComponent,
    ProductAdminRouteComponent,
    UserDetailsComponent,
    CreateRazaRouteComponent,
    UpdateRazaRouteComponent,
    ImagenPeliculaComponent,
    RazaFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule
  ],
  providers: [UserServiceService, RazaRestService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
