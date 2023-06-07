import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent implements OnInit {

  constructor(private actService:AccountService) {}
 accounts:{
  name:string,
  status:string
 }[]=[];

 /*
  onAccountAdded(newAccount: {name: string, status: string}) {
    console.log('Emitted the Account Create Event to List Component');
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    console.log('Emitted the Status ChangeEvent to List Component');
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }*/

  ngOnInit(): void {
      this.accounts=this.actService.accounts;
  }
}
