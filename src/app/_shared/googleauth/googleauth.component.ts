import { Component, OnInit, Input } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-googleauth',
  templateUrl: './googleauth.component.html',
  styleUrls: ['./googleauth.component.sass']
})
export class GoogleauthComponent implements OnInit {
  @Input() googleid : string;
  @Input() googlekey : string;

  constructor(private socialAuthService: AuthService) { }

  signIn () {
    console.log(GoogleLoginProvider.PROVIDER_ID)
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  ngOnInit() {

  }

}
