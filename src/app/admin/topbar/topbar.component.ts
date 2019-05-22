import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.sass']
})
export class TopbarComponent implements OnInit {
  public today: number = Date.now();
  constructor() {

    setInterval(()=>{
      this.today = Date.now();
    }, 1000)
  }

  ngOnInit() {

  }

}
