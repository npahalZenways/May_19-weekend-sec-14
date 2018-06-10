import { Directive, ElementRef, HostListener, HostBinding, Renderer2, EventEmitter } from "@angular/core";

@Directive({
    selector: '[mydirective]',
    inputs:['name:mydirective'],
    outputs: ['myoutput']
    // host: {
    //     '(click)':'print()'
    // }
})
export class MyDirective{

    name;

    constructor(
        private el: ElementRef,
        private render: Renderer2
    ){
        
    }

    myoutput = new EventEmitter();

    @HostBinding('href') href;

    // method decorator
    @HostListener('mouseenter') print(){
        // this.el.nativeElement.style.color = 'red';
        this.render.setStyle(this.el.nativeElement, 'color', 'red');

        this.el.nativeElement.style.backgroundColor = 'yellow';
        // this.href = "https://www.google.com";
        this.render.setAttribute(this.el.nativeElement, 'href', 'https://www.google.com')
        
        this.el.nativeElement.innerText = this.name;

        this.myoutput.emit();

    }

    @HostListener('mouseleave') printBack(){
        this.el.nativeElement.style.color = 'black';
        this.el.nativeElement.style.backgroundColor = 'transparent';
    }
}