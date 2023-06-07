import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-accountupdate',
  templateUrl: './accountupdate.component.html',
  styleUrls: ['./accountupdate.component.css']
})
export class AccountupdateComponent  {

  //@Input() account: {name: string, status: string};
  @Input() account: any="";
  @Input() id: number=0;
 // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

 constructor(private actService:AccountService){}

  onSetTo(status: string) {
   // this.statusChanged.emit({id: this.id, newStatus: status});
   this.actService.updateStatus(this.id,status);
    console.log('Account status changed, new status: ' + status);
  }
}
