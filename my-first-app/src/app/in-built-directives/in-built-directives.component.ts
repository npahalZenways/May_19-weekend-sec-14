import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-built-directives',
  templateUrl: './in-built-directives.component.html',
  styleUrls: ['./in-built-directives.component.css']
})
export class InBuiltDirectivesComponent implements OnInit {

  isTrue = true;

  myName = 'Amit'

  myArr = [
    1,2,3,4,5
  ]
  constructor() { }

  ngOnInit() {
  }

}
