import { Directive,OnInit,Renderer2,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHostlistener]'
})
export class HostlistenerDirective implements OnInit {



  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }


  @HostListener('mouseenter') mouseover(evenData:Event){
      this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
  }


  @HostListener('mouseleave') mouseleave(evenData:Event){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
}

  ngOnInit(): void {
    
  }

}
