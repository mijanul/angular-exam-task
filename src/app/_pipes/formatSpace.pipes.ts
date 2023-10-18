import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatSpace',
})
export class FormatSpacePipe implements PipeTransform {
  transform(bytes: number, format: string): string {
    if (format === 'mb') {
      return (bytes / 1048576).toFixed(5) + ' MB';
    } else if (format === 'gb') {
      return (bytes / 1073741824).toFixed(5) + ' GB';
    } else if (format === 'tb') {
      return (bytes / 1099511627776).toFixed(5) + ' TB';
    } else {
      return bytes + ' B';
    }
  }
}
