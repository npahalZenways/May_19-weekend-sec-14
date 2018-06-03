import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InBuiltDirectivesComponent } from './in-built-directives/in-built-directives.component';


@NgModule({
  declarations: [
    AppComponent,
    InBuiltDirectivesComponent
    // remaining
  ],
  imports: [
    BrowserModule
    // modules
  ],
  providers: [
    // services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
