import { NgModule } from "@angular/core";
import { LazyComponent } from "./component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '',
            component: LazyComponent
        }])
    ],
    declarations: [
        LazyComponent
    ]
})
export class LazyModule{

}