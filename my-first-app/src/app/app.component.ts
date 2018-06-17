import { Component } from "@angular/core";
import { MyService } from "./services/my-first-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [MyService]
})
export class AppComponent {
  title = 'app';
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
}
