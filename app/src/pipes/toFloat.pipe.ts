import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toFloat' })
export class ToFloatPipe implements PipeTransform {
  transform(dd: number) : string {
    if(dd == '') {
      return '';
    }
    if(dd % 1 == 0) {
      return dd + '.0';
    }
    return dd + '';
  }
}