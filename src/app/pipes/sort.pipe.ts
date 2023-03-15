import { Pipe, PipeTransform } from '@angular/core';
import { SortOrder } from '../models/sortOrderPipe'

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: string[], order: SortOrder='ASC'): string[] {
    value.sort()
    return (order==='DESC'?  value.reverse(): value);
  }

}
