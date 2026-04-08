import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smartPipe',
  standalone: true,
  pure: true
})
export class SmartPipePipe implements PipeTransform {


  transform(value: string, ...args: unknown[]): unknown {

    if (value) {
      return value.charAt(0).toUpperCase() + value.substring(1, value.length).toLowerCase();
    } else {
      return value;
    }

  }


}
