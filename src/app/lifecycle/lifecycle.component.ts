import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements
OnInit,OnChanges,DoCheck,
AfterViewInit,AfterContentInit,
AfterContentChecked,AfterViewChecked,
OnDestroy
{

order=1;
constructor(){
  console.log('I am from Constructor()  and My Order is :::: ' + this.order);
  this.order++;
}


ngOnChanges(changes:SimpleChanges){
  console.log('I am from ngOnChanges()  and My Order is :::: ' + this.order);
  this.order++;
}

ngOnInit(){
  console.log('I am from ngOnInit()  and My Order is :::: ' + this.order);
  this.order++;
}

ngDoCheck(): void {
  console.log('I am from ngDoCheck()  and My Order is :::: ' + this.order);
  this.order++;
}

ngAfterContentInit(): void {
  console.log('I am from ngAfterContentInit()  and My Order is :::: ' + this.order);
  this.order++;
}

ngAfterContentChecked(): void {
  console.log('I am from ngAfterContentChecked()  and My Order is :::: ' + this.order);
  this.order++;
}

ngAfterViewInit(): void {
  console.log('I am from ngAfterViewInit()  and My Order is :::: ' + this.order);
  this.order++;
}

ngAfterViewChecked(): void {
  console.log('I am from ngAfterViewChecked()  and My Order is :::: ' + this.order);
  this.order++;
}
ngOnDestroy(): void {
  console.log('I am from ngOnDestroy()  and My Order is :::: ' + this.order);
  this.order++;
}
}
