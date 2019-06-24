import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.sass']
})
export class TopbarComponent implements OnInit {
  public today: number = Date.now();
  @Input()
  public withSidenav = true;
  constructor(private authService: AuthService, private router: Router) {

    setInterval(()=>{
      this.today = Date.now();
    }, 1000)
  }

  ngOnInit() {

  }

  signOut () : void {
    this.authService.signOut()
    .then((resp)=>{
      // this.router
      this.router.navigate(['']);
    })
  }

}
