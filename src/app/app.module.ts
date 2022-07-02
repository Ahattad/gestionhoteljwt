import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './_services/user.service';
import { AjouterChambreComponent } from './components/chambre/ajouter-chambre/ajouter-chambre.component';
import { ModifierChambreComponent } from './components/chambre/modifier-chambre/modifier-chambre.component';
import { ListerChambreComponent } from './components/chambre/lister-chambre/lister-chambre.component';
import { SupprimerChambreComponent } from './components/chambre/supprimer-chambre/supprimer-chambre.component';
import { AjouterClientComponent } from './components/client/ajouter-client/ajouter-client.component';
import { ModifierClientComponent } from './components/client/modifier-client/modifier-client.component';
import { ListerClientComponent } from './components/client/lister-client/lister-client.component';
import { SupprimerClientComponent } from './components/client/supprimer-client/supprimer-client.component';
import { SupprimerFactureComponent } from './components/facture/supprimer-facture/supprimer-facture.component';
import { AjouterFactureComponent } from './components/facture/ajouter-facture/ajouter-facture.component';
import { ModifierFactureComponent } from './components/facture/modifier-facture/modifier-facture.component';
import { ListerFactureComponent } from './components/facture/lister-facture/lister-facture.component';
import { AjouterReservationComponent } from './components/reservation/ajouter-reservation/ajouter-reservation.component';
import { ModifierReservationComponent } from './components/reservation/modifier-reservation/modifier-reservation.component';
import { ListerReservationComponent } from './components/reservation/lister-reservation/lister-reservation.component';
import { SupprimerReservationComponent } from './components/reservation/supprimer-reservation/supprimer-reservation.component';
import { AjouterServiceChambreComponent } from './components/serviceChambre/ajouter-service-chambre/ajouter-service-chambre.component';
import { ModifierServiceChambreComponent } from './components/serviceChambre/modifier-service-chambre/modifier-service-chambre.component';
import { ListerServiceChambreComponent } from './components/serviceChambre/lister-service-chambre/lister-service-chambre.component';
import { SupprimerServiceChambreComponent } from './components/serviceChambre/supprimer-service-chambre/supprimer-service-chambre.component';
import { AjouterServiceHotelComponent } from './components/serviceHotel/ajouter-service-hotel/ajouter-service-hotel.component';
import { ListerServiceHotelComponent } from './components/serviceHotel/lister-service-hotel/lister-service-hotel.component';
import { SupprimerServiceHotelComponent } from './components/serviceHotel/supprimer-service-hotel/supprimer-service-hotel.component';
import { ModifierServiceHotelComponent } from './components/serviceHotel/modifier-service-hotel/modifier-service-hotel.component';
import { AjouterUserComponent } from './components/utilisateur/ajouter-user/ajouter-user.component';
import { ListerUserComponent } from './components/utilisateur/lister-user/lister-user.component';
import { ModifierUserComponent } from './components/utilisateur/modifier-user/modifier-user.component';
import { SupprimerUserComponent } from './components/utilisateur/supprimer-user/supprimer-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
    AjouterChambreComponent,
    ModifierChambreComponent,
    ListerChambreComponent,
    SupprimerChambreComponent,
    AjouterClientComponent,
    ModifierClientComponent,
    ListerClientComponent,
    SupprimerClientComponent,
    SupprimerFactureComponent,
    AjouterFactureComponent,
    ModifierFactureComponent,
    ListerFactureComponent,
    AjouterReservationComponent,
    ModifierReservationComponent,
    ListerReservationComponent,
    SupprimerReservationComponent,
    AjouterServiceChambreComponent,
    ModifierServiceChambreComponent,
    ListerServiceChambreComponent,
    SupprimerServiceChambreComponent,
    AjouterServiceHotelComponent,
    ListerServiceHotelComponent,
    SupprimerServiceHotelComponent,
    ModifierServiceHotelComponent,
    AjouterUserComponent,
    ListerUserComponent,
    ModifierUserComponent,
    SupprimerUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
