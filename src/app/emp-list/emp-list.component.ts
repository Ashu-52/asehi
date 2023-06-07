import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent {

//Arrayof JSON Objects
employees:any[]=[];

all:number=50;
male:number=25;
female:number=25;

customEventValue:string="All";


constructor(){
  this.employees=[

{empId:'101',empName:'Ramu',gender:'Male',title:'Software Developer',salary:'80000',department:'1',address:'Hyderabad',dob:'01/01/1998'},
{empId:'102',empName:'Sandhya',gender:'Female',title:'Sr. Software Developer',salary:'100000',department:'2',address:'Chennai',dob:'02/02/1998'},
{empId:'103',empName:'Gopi',gender:'Male',title:'Software Lead',salary:'1200000',department:'3',address:'Banlore',dob:'03/03/1998'},
{empId:'104',empName:'Swathi',gender:'Female',title:'Software Developer',salary:'60000',department:'4',address:'Hyderabad',dob:'04/04/1999'},
{empId:'105',empName:'Rahul',gender:'Male',title:'Software Tester',salary:'70000',department:'5',address:'Kerala',dob:'05/05/1998'},
{empId:'106',empName:'Kaveri',gender:'Female',title:'Sr Quality Developer',salary:'90000',department:'5',address:'Chennai',dob:'06/06/2001'},
{empId:'107',empName:'Vishnu',gender:'Male',title:'Software Manager',salary:'140000',department:'1',address:'Hyderabad',dob:'01/02/1992'},
{empId:'108',empName:'Gayatri',gender:'Female',title:'Software Developer',salary:'80000',department:'1',address:'Hyderabad',dob:'01/01/1998'},
{empId:'109',empName:'Anupama',gender:'Female',title:'Sr Software Developer',salary:'90000',department:'1',address:'Banglore',dob:'01/04/1999'},
{empId:'110',empName:'Keshav',gender:'Male',title:'Software Developer',salary:'80000',department:'1',address:'Delhi',dob:'10/10/1998'}

]


}

trackByEmpCode(index:number,employee:any):string{
  return employee.code
}

getLatestyEmployees():void{

  this.employees=[

    {empId:'101',empName:'Ramu',gender:'Male',title:'Software Developer',salary:'80000',department:'1',address:'Hyderabad',dob:'01/01/1998'},
    {empId:'102',empName:'Sandhya',gender:'Female',title:'Sr. Software Developer',salary:'100000',department:'2',address:'Chennai',dob:'02/02/1998'},
    {empId:'103',empName:'Gopi',gender:'Male',title:'Software Lead',salary:'1200000',department:'3',address:'Banlore',dob:'03/03/1998'},
    {empId:'104',empName:'Swathi',gender:'Female',title:'Software Developer',salary:'60000',department:'4',address:'Hyderabad',dob:'04/04/1999'},
    {empId:'105',empName:'Rahul',gender:'Male',title:'Software Tester',salary:'70000',department:'5',address:'Kerala',dob:'05/05/1998'},
    {empId:'106',empName:'Kaveri',gender:'Female',title:'Sr Quality Developer',salary:'90000',department:'5',address:'Chennai',dob:'06/06/2001'},
    {empId:'107',empName:'Vishnu',gender:'Male',title:'Software Manager',salary:'140000',department:'1',address:'Hyderabad',dob:'01/02/1992'},
    {empId:'108',empName:'Gayatri',gender:'Female',title:'Software Developer',salary:'80000',department:'1',address:'Hyderabad',dob:'01/01/1998'},
    {empId:'109',empName:'Anupama',gender:'Female',title:'Sr Software Developer',salary:'90000',department:'1',address:'Banglore',dob:'01/04/1999'},
    {empId:'110',empName:'Keshav',gender:'Male',title:'Software Developer',salary:'80000',department:'1',address:'Delhi',dob:'10/10/1998'},
    {empId:'111',empName:'Prasad',gender:'Male',title:'Delivery Head',salary:'200000',department:'2',address:'Mysoor',dob:'09/02/1978'},
    
    
    ]

}

getTotalEmployeesCount():number{
  return this.employees.length;
}

getMaleEmployeesCount():number{
  return this.employees.filter(e=>e.gender==='Male').length;
}

getFemaleEmployeesCount():number{
  return this.employees.filter(e=>e.gender==='Female').length;
}

onEmployeeRadioChange(selectedRadioButtonValue:string){
  console.log(" Child Component Clicked Radio Button Value " + selectedRadioButtonValue);
  this.customEventValue=selectedRadioButtonValue;
}

}
