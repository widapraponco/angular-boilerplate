import { Component, OnInit, Input } from '@angular/core';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-fbauth',
  templateUrl: './fbauth.component.html',
  styleUrls: ['./fbauth.component.sass']
})
export class FbauthComponent implements OnInit {
  @Input() fbId : string;
  @Input() fbKey : string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signIn () {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

}
