import { Component, OnChanges, OnInit, SimpleChanges,Input } from '@angular/core';

@Component({
  selector: 'app-simplechange',
  templateUrl: './simplechange.component.html',
  styleUrls: ['./simplechange.component.css']
})
export class SimplechangeComponent implements OnInit,OnChanges {


  @Input() simpleInput:string="";

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {

    for(let propname in changes){
      let change=changes[propname];

      let currentValue=JSON.stringify(change.currentValue);
      let oldValue=JSON.stringify(change.previousValue);

      console.log(propname + "==> Current Value ==>    "+ currentValue + "  Previous Value  ===> " + oldValue);

    }
    
  }

}
