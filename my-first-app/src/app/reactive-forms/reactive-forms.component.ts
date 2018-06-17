import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  myInput : FormControl = new FormControl();

  myForm : FormGroup = new FormGroup({
    myInput2 : new FormControl()
  });

  newForm;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.newForm = this.fb.group({
      input: ['example input']
    })
  }

}
