import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { PipeComponent } from './pipes/pipe/pipe.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ErrorComponent } from './error/error.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { FormsComponent } from './forms/forms.component';
import { AuthGuard } from './auth-gaurd';
import { HttpComponent } from './http/http.component';

@NgModule({
  imports: [ 
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'pipes',
      pathMatch: 'full'
    },{
      path: 'pipes/:id',
      component: PipeComponent,
      data: {
        id: 'ntnf',
        name: 'dfxhvc'
      }
    },{
      path: 'forms',
      component: FormsComponent,

      canActivate: [AuthGuard],
      children: [{
        path: '',
        redirectTo: 'template-forms',
        pathMatch:'full'
      },{
        path: 'template-forms',
        component: TemplateDrivenFormsComponent
      },{
        path: 'reactive-forms',
        component: ReactiveFormsComponent
      }]
    },{
      path:'lazy',
      loadChildren: './lazy-loading-module/lazy#LazyModule'
    },{
      path:'async',
      component: HttpComponent
    },{
      path: '**',
      component: ErrorComponent
    }
    ]) 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
