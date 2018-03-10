import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: string, text: string, to: string): string {
    if (value !== undefined) {
      return value.replace(text, to);
    } else {
      return value;
    }
  }

}
