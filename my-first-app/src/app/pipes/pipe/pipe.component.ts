import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  todayDate = new Date();

  myString = 'Hello this is a STRING';

  amount = 44532.98475;

  myArr = [{
    name: 'Nitin',
    phone: 987
  },{
    name: 'Amit',
    phone: 987
  },{
    name: 'Sachin',
    phone: 987
  },{
    name: 'Disha',
    phone: 987
  },{
    name: 'Sheena',
    phone: 987
  },{
    name: 'Rohit',
    phone: 987
  },{
    name: 'Vikas',
    phone: 987
  },{
    name: 'Hiten',
    phone: 987
  }]  

  constructor() { }

  ngOnInit() {
  }

}
