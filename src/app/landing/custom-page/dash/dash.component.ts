import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.sass']
})
export class DashComponent implements OnInit {
  @Input()
  public withSide = true;
  constructor() { }

  ngOnInit() {
  }

}
