import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  outputs: ['myoutput']
})
export class ChildComponent implements OnInit {

  @Input() name;

  myarr = [1,2,3,3,4,5]

  nameChange = new EventEmitter();
  // @Output() myoutput = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

}
