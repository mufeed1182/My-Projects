import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  status='login';
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges):void{}

}
