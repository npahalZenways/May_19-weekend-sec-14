import { Component, OnInit } from '@angular/core';
import { AsyncService } from '../async.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styles: []
})
export class HttpComponent implements OnInit {

  employee;

  constructor(
    private asyncserv: AsyncService,
    private _http: HttpClient
  ){
    asyncserv.signal.subscribe(res =>{
      console.log(res, 'from http component')
    })
  }

  ngOnInit() {
    // this._http.get<any>('http://localhost:3001/api').subscribe(res=>{
    //   this.employee = res.todos;
    // })

    this._http.post<any>('http:localhost:3001/api', {todo:'test'}).subscribe(res=>{
      console.log(res)
    })
  }

}
