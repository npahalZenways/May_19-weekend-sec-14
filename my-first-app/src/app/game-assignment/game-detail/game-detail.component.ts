import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
  inputs: ['game'],
  outputs: ['back']
})
export class GameDetailComponent implements OnInit {

  constructor() { }

  back = new EventEmitter();

  ngOnInit() {
  }

}
