import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-emp-count',
  templateUrl: './emp-count.component.html',
  styleUrls: ['./emp-count.component.css']
})
export class EmpCountComponent {

  @Input()
  all:number=20;
  @Input()
  male:number=10;
  @Input()
  female:number=10;

  @Output()
  countRadioButtonSelectionChanged:EventEmitter<string>=new EventEmitter<string>();

  selectedRadioButtonValue:string='All';


  onRadioButtonChange(){
    //console.log(" Clicked Radio Button " + this.selectedRadioButtonValue);
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  }

}
