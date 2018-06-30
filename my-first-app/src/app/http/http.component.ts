import { Component, OnInit } from '@angular/core';
import { AsyncService } from '../async.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private asyncserv: AsyncService) { 
    asyncserv.myObservable.subscribe(res => {
      console.log(res);
    })

    asyncserv.myBehaviouSubject.subscribe(res => {
      console.log(res);
    })
  }

  ngOnInit() {
  }

}
