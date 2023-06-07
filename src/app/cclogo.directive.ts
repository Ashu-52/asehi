import { Directive,HostBinding,Input } from '@angular/core';

enum CardType{
  VISA='visa',
  MASTERCARD='mastercard',
  AMERICAN_EXPRESS='american-express',
  UNKNOWN='unknown'
}

@Directive({
  selector: '[appCclogo]'
})
export class CclogoDirective {

  @HostBinding('src')
  imageSource:string="";

  @Input()
  cardNumber:string="";

  constructor() { }

  ngOnChanges(){
    this.imageSource='assets/card-types/'+this.getCardTypeFromNumber()+'.png';
  }


  getCardTypeFromNumber():CardType{

    if(this.cardNumber){
      if(this.cardNumber.startsWith('43')){
        return CardType.VISA;
      }else if (this.cardNumber.startsWith('53')){
        return CardType.MASTERCARD;
      }
      else if(this.cardNumber.startsWith('63')){
        return CardType.AMERICAN_EXPRESS;
      }
      else{
        return CardType.UNKNOWN;
      }
    }
    else
    {
      return CardType.UNKNOWN;
    }

  }

}
