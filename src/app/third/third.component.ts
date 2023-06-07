import { Component } from '@angular/core';

@Component({
  //selector: 'app-third', //Componnet bootstraped as <app-third></app-third>
 // selector: '[app-third]', //Componnet added as DOM Atrribute <div app-third>
 selector:'.app-third',//Component added as Class Attribute <div class=app-third>
  //templateUrl: './third.component.html',
  template:
  `
  <h3>Boostrapping Third Component  ..Inline HTML</h3>
  <h2>Testing Inline CSS </h2>
  `,
  //styleUrls: ['./third.component.css']
  styles:[
`
h3{
  color:red
}

h2{
  color:blue
}
`


  ]
})
export class ThirdComponent {

}
