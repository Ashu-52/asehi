import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasichighlight]'
})
export class BasichighlightDirective implements OnInit{

  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {

    this.elementRef.nativeElement.style.backgroundColor="green";
    
  }

}
