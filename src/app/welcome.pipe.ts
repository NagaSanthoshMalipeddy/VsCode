import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

  transform(name: string, town:string='nandyal', state:string='AP', country:string): string {
    return "Name ="+name+" town ="+town+" state ="+state+" country ="+country;
  }

}
