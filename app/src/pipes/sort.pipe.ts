import { Pipe } from '@angular/core';

import { Diver } from './diver/diver';

@Pipe({
  name: "sort"
})
export class DiverSortPipe {
  transform(array: Array<Diver>, args: string): Array<string> {
    array.sort((a: any, b: any) => {
      if (a.total < b.total) {
        return -1;
      } else if (a.total > b.total) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}