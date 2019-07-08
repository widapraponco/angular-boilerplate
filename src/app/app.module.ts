import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login';
import { FbauthComponent } from './_shared/fbauth/fbauth.component';
import { GoogleauthComponent } from './_shared/googleauth/googleauth.component';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule,
         MatDialogModule, MatSidenavModule, MatRadioModule } from '@angular/material';
// import { AdminComponent } from './admin/admin.component';


//modules
import { MaterialModule } from './_modules';
import { AdminModule } from './admin/admin.module';
import { WidgetModule } from './_shared/widget/widget.module';

// Services
import { FormcdataService } from './_services/formcdata.service';

//plugin
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { PageNotFoundComponent } from './_error/page-not-found/page-not-found.component';
import { ShopPageComponent } from './landing/shop-page/shop-page.component';
import { ItemCardComponent } from './_shared/item-card/item-card.component';
import { CustomPageComponent } from './landing/custom-page/custom-page.component';
import { NavComponent } from './landing/custom-page/nav/nav.component';
import { CardhComponent } from './landing/custom-page/cardh/cardh.component';
import { CardupComponent } from './landing/custom-page/cardh/cardup/cardup.component';
import { TablecComponent } from './landing/custom-page/content/tablec/tablec.component';
import { TablenComponent } from './landing/custom-page/content/tablen/tablen.component';
import { FormcComponent } from './landing/custom-page/content/formc/formc.component';
import { FormcDialogComponent } from './landing/custom-page/content/formc/formc.component';


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('1041288342630-5o0bqk4g3uu4cr5g50gqtimgpuj4209k.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('464373240986224')
  }
]);

export function provideConfig () {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,FormcComponent,FormcDialogComponent,
    FbauthComponent, GoogleauthComponent, PageNotFoundComponent,
    ShopPageComponent, ItemCardComponent, CustomPageComponent, 
    NavComponent, CardhComponent, CardupComponent, 
    TablecComponent, TablenComponent,
    // AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule, AdminModule,
    WidgetModule,
    SocialLoginModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,MatDialogModule,
    MatSidenavModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,MatRadioModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig,
    },
    FormcdataService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [ FormcDialogComponent,FormcComponent ],
})
export class AppModule { }
