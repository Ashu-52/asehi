import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }


  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];



  //Add a new Account
addAccount(actName:string,actStatus:string){
  console.log('Reached to Service Layer addAccount Method with new Account ==> ' + actName);
  this.accounts.push({name:actName,status:actStatus});
}


  //Change the Status of An Account

  updateStatus(id:number,newStatus:string){
    console.log('Reached to Update Status in Service Layer with New Status Value  ==> ' + newStatus);
    this.accounts[id].status=newStatus;
  }

}
