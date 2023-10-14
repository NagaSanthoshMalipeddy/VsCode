import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bconverter'
})
export class BconverterPipe implements PipeTransform {

  transform(tbytes: number, btype: string, arg:number): string {
    if(arg==1)
    return (tbytes*1024*1024*1024).toFixed(2)+btype;
    else
    return (tbytes/1024).toFixed(2)+btype;
  }

}
