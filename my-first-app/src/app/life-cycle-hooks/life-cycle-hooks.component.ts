import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnInit, AfterContentInit, AfterViewInit {
  ngAfterContentInit(){
    console.log('content init')
  }

  ngAfterViewInit(){
    console.log('view init')
  }
  constructor() { 
    console.log('constructor called')
  }

  ngOnInit() {
    console.log('init called')
  }

  
}


