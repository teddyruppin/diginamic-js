import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trunc100'
})
export class Trunc100Pipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value.substring(0, 100);
  }

}
