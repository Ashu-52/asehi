import { Component, Input, OnInit } from '@angular/core';
import { user } from '../user';

@Component({
  selector: 'app-visitingcard',
  templateUrl: './visitingcard.component.html',
  styleUrls: ['./visitingcard.component.css']
})
export class VisitingcardComponent implements OnInit {


  /*
      Departments ==> 1==> IT 2==> HR 3 ==> FINANCE 4 ==> MARKETING 5 ==> SALES
      VisitingcardComponent obj=new VisitingcardComponent();
      obj.
  */
  users:any[]=[];

  @Input('userObj') userObj:user=new user;

  constructor(){



  }
  ngOnInit(): void {

    this.users=[
     {
      name:this.userObj.name,
      title:this.userObj.title,
      salary:this.userObj.salary,
      department:this.userObj.department,
      address:this.userObj.address,
      phone:this.userObj.phone
     }


     
      
    ]
    
  }

}
