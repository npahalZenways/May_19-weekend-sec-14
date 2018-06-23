import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { MyValidator } from "./custom-validator";
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  // myForm = new FormGroup({
  //   name: new FormControl('Nitin'),
  //   email: new FormControl()
  // })

  myForm;
  constructor(
    private fb: FormBuilder
  ) { }

  formInvalid(){
    return this.myForm.invalid
  }

  ngOnInit() {
    // this.myForm = this.fb.group({
    //   name: this.fb.control('pahal'),
    //   email: this.fb.control('')
    // })

    this.myForm = this.fb.group({
      name: [{value: '', disabled: true, placeholder: 'Enter name'}, [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, MyValidator]],
      address: this.fb.group({
        state: ['Delhi'],
        country: 'India',
        pincode: ['110011']
      })
    })
  }

  onSubmit(){
    this.myForm.reset({
      name: '',
      email: ''
    })
  }

}
