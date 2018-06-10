import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  // encapsulation: ViewEncapsulation.Native
})
export class ParentComponent implements OnInit {

  Nitin = "ABC";

  call(e){
    console.log(e)
  }

  constructor() { }

  ngOnInit() {
  }

}
