import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.sass']
})
export class TopbarComponent implements OnInit {
  public today: number = Date.now();
  @Input()
  public withSidenav = true;
  constructor() {

    setInterval(()=>{
      this.today = Date.now();
    }, 1000)
  }

  ngOnInit() {

  }

}
