import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login';
import { FbauthComponent } from './_shared/fbauth/fbauth.component';
import { GoogleauthComponent } from './_shared/googleauth/googleauth.component';
// import { AdminComponent } from './admin/admin.component';

//modules
import { MaterialModule } from './_modules';
import { AdminModule } from './admin/admin.module';
import { WidgetModule } from './_shared/widget/widget.module';

//plugin
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { PageNotFoundComponent } from './_error/page-not-found/page-not-found.component';
import { ShopPageComponent } from './landing/shop-page/shop-page.component';
import { ItemCardComponent } from './_shared/item-card/item-card.component';

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
    LoginComponent,
    FbauthComponent, GoogleauthComponent, PageNotFoundComponent, ShopPageComponent, ItemCardComponent,
    // AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule, AdminModule,
    WidgetModule,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
