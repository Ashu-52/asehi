import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): number {
    
    //Caluclulate Age

    let currentYear:any=new Date().getFullYear(); //2023
    let dobYear=new Date(value).getFullYear(); //dob Year
    return currentYear-dobYear;

  }

}
