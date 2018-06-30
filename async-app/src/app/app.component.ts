import { Component } from '@angular/core';
import { AsyncService } from './async.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'app';

  constructor(private asyncserv: AsyncService){
    asyncserv.signal.subscribe(res =>{
      console.log(res, 'from app component')
    })

    // asyncserv.signal.next()
  }
}
