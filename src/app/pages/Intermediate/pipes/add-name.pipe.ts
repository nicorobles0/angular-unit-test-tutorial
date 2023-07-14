import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addName'
})
export class AddNamePipe implements PipeTransform {

  transform(text: string): unknown {
    return `Nombre: ${text}`;
  }

}
