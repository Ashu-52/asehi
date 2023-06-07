import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {


  var_one:string="Angular";
  var_two:string="ReactJS";
  var_three:string="NodeJS";
  var_four:number=100.12346;
  var_five:number=100;
  var_six:Date=new Date();
  var_seven:any={number:10};
  var_eight:Array<number>=[10,20,30,40];
  var_nine:any;

  constructor(){
    this.var_nine=new Promise(
      (resolve,reject)=>{
        resolve("Today Class is there");
      }
    )
  }


}
