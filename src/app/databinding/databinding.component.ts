import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {


  username:string="";
  firstname:string="";
  lastname:string="";
  email:string="vijay@gmail.com";

  dateString:string="";
  buttonStatus:boolean=true;

  guestName:string="";
  title:string="Naresh IT";

  status:string="Available";


  constructor(){
    this.username="vijaynareshit";
    this.firstname="Vijay";
    this.lastname="Kumar";
    this.buttonStatus=true;
    setInterval( 
      () => {
             let currentDate=new Date();
              this.dateString=currentDate.toDateString() + " " + currentDate.toLocaleTimeString();
            
            this.status=Math.random()>0.5?"Available":"UnAvailable";
            },1000
    )

    setTimeout(()=>{
      this.buttonStatus=false;
      
    },5000)
  }

   getUserName():string{
    return this.username;
   }

   updateGuest(guestName:string){
    this.guestName=guestName;
   }

   getColor():string{
    return this.status=="Available"?"green":"red";
   }
}
