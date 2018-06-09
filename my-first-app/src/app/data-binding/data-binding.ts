import { Component, ViewChild } from "@angular/core";
import { employee } from "../employee";

@Component({
    selector: 'data-binding',
    templateUrl: './data-binding.html',
    styles: ['.active123{ color: red }']
})
export class DataBinding{
    title = "Data binding component"

    className = "active";

    isTrue = true;

    myemployee = new employee();
    
    // property decorator
    @ViewChild('para') para;

    returnTitle(p){
        return p;
    }

    print(...e){
        console.log(e);
    }
}