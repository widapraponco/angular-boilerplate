// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

// import { FbauthComponent } from '../fbauth/fbauth.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('Google-OAuth-client-Id')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('Facebook-App-Id')
  }
]);

export function provideConfig () {
  return config;
}

@NgModule({
  declarations: [
    // FbauthComponent
  ],
  imports: [
    SocialLoginModule
  ],
  providers: [
    {
        provide: AuthServiceConfig,
        useFactory: provideConfig,
    }
  ],
})

export class WidgetModule { }
