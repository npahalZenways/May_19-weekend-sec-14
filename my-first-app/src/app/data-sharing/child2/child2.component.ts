import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class Child2Component implements OnInit {

  @Input() inputValue;

  constructor() { }

  ngOnInit() {
  }

}
