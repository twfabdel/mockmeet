import { Pipe, PipeTransform } from '@angular/core';

import { Diver } from './diver/diver';

@Pipe({
  name: "sort",
  pure: false
})
export class DiverSortPipe implements PipeTransform {
  transform(array: Diver[], args: string): Array<string> {
    array.sort((a: any, b: any) => {
      if (a.total > b.total) {
        return -1;
      } else if (a.total < b.total) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}