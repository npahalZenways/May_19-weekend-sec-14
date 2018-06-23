import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  @ViewChild('myForm') myform;

  constructor() { }

  onSubmit(){
    console.log('form submitted')
    console.log(this.myform.value)
  }

  print(e){
    // console.log(e)
  }

  setTouched(){
    // console.log(this.myform)
    // this.myform.form.controls
    for(let key in this.myform.form.controls){
      this.myform.form.controls[key].markAsTouched();
    }
  }

  test = 0;
  ngOnInit() {
    // console.log(this.myform )
  }

}
