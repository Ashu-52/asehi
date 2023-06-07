import { Directive, OnInit,Renderer2,ElementRef,HostListener,HostBinding,Input} from '@angular/core';

@Directive({
  selector: '[appHostbinding]'
})
export class HostbindingDirective implements OnInit {

  
  @Input() highLightColor:string=''
  @Input() leaveColor:string=''


  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }

 
  ngOnInit(): void {
    
  }
  @HostBinding('style.backgroundColor') bgColor:string='red';

  @HostListener('mouseenter') mouseover(evenData:Event){
    this.bgColor=this.highLightColor;
}


@HostListener('mouseleave') mouseleave(evenData:Event){
  this.bgColor=this.leaveColor;
}

}
