import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from './shared-module/shared.module';

class myHandler extends ErrorHandler{
  handleError(err){
    console.log(err)
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: myHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
