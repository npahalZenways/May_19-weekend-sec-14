import { Component, OnInit } from '@angular/core';
import { MyService } from '../services/my-first-service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styles: []
})
export class DirectivesComponent implements OnInit {

  title;

  constructor(
    private ser: MyService
  ) { }

  ngOnInit() {
  }

}
