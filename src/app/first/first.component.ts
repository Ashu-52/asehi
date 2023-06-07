import { Component } from '@angular/core';
import { user } from '../user';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  defaultColor:string="";
  highLightColor:string="";
  leaveColor:string="";
  cardNumber:string="";
  usertext:string="";

  userinput:user=new user();

  constructor(){
    this.userinput.name="Sandhya";
    this.userinput.title="Manager";
    this.userinput.salary="200000";
    this.userinput.department="2";
    this.userinput.address=['Kukatpally',
                            'Hyderabad',
                            'Telangana'];
    this.userinput.phone=['1111-1111-1111',
                          '222-222-2222']
  }

}
