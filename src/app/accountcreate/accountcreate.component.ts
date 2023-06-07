import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-accountcreate',
  templateUrl: './accountcreate.component.html',
  styleUrls: ['./accountcreate.component.css']
})
export class AccountcreateComponent implements OnInit {

  constructor(private actService:AccountService){}

 // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  onCreateAccount(accountName: string, accountStatus: string) {
   /* this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });*/

    this.actService.addAccount(accountName,accountStatus);
    console.log('New Account is Created , Account Name: ' + accountName);
  }

  ngOnInit(): void {
      
  }


}
