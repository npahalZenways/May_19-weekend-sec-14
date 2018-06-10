import { Component, OnInit } from '@angular/core';
import { MyService } from './my-first-service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styles: [],
  providers: [MyService],
  // viewProviders: [MyService]
})
export class ServicesComponent implements OnInit {

  constructor(
    private serv: MyService
  ) { }

  ngOnInit() {
  }

}
