import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css'],
  inputs: ['gameName', 'imageUrl']
})
export class GameViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
