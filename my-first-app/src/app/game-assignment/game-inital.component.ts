import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-inital',
  templateUrl: './game-inital.component.html',
  styleUrls: ['./game-inital.component.css']
})
export class GameInitalComponent implements OnInit {

  constructor() { }
  selectedGame;

  games = [{
    'Game': 'Cricket',
    'thumburl': 'https://www.outlookindia.com/public/uploads/articles/2016/2/12/EnglaqndNZ_201300326_630_630.jpg',
    "players": [
      {
        "name": "Sachin Tendulkar"
      },
      {
        "name": "Virender Sehwag"
      },
      {
        "name": "Gautam Gambhir"
      },
      {
        "name": "Player 4"
      }
    ]
  },
  {
    'Game': 'Football',
    'thumburl': 'https://www.outlookindia.com/public/uploads/articles/2016/2/12/EnglaqndNZ_201300326_630_630.jpg',
    "players": [
      {
        "name": "Sachin Tendulkar"
      },
      {
        "name": "Virender Sehwag"
      },
      {
        "name": "Gautam Gambhir"
      },
      {
        "name": "Player 4"
      }
    ]
  },
  {
    'Game': 'Hockey',
    'thumburl': 'https://www.outlookindia.com/public/uploads/articles/2016/2/12/EnglaqndNZ_201300326_630_630.jpg',
    "players": [
      {
        "name": "Sachin Tendulkar"
      },
      {
        "name": "Virender Sehwag"
      },
      {
        "name": "Gautam Gambhir"
      },
      {
        "name": "Player 4"
      }
    ]
  }]

  ngOnInit() {
  }

}
