import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsyncService {
  obj;
  myObservable = new Observable(observer =>{
    this.obj = observer
  })

  myBehaviouSubject = new BehaviorSubject('hello')
  constructor() { }
}
