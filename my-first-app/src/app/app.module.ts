import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InBuiltDirectivesComponent } from './in-built-directives/in-built-directives.component';
import { DataBinding } from './data-binding/data-binding';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ParentComponent } from './data-sharing/parent/parent.component';
import { ChildComponent } from './data-sharing/child/child.component';
import { Child2Component } from './data-sharing/child2/child2.component';
import { DirectivesComponent } from './directives/directives.component';
import { MyDirective } from './directives/my-directive';
import { ServicesComponent } from './services/services.component';
import { MyService } from './services/my-first-service';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { GameInitalComponent } from './game-assignment/game-inital.component';
import { GameViewComponent } from './game-assignment/game-view/game-view.component';
import { GameDetailComponent } from './game-assignment/game-detail/game-detail.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    InBuiltDirectivesComponent,
    DataBinding,
    ParentComponent,
    ChildComponent,
    Child2Component,
    DirectivesComponent,
    MyDirective,
    ServicesComponent,
    LifeCycleHooksComponent,
    GameViewComponent,
    GameDetailComponent,
    GameInitalComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent
    // remaining
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    // modules
  ],
  providers: [
    // services
    // MyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
