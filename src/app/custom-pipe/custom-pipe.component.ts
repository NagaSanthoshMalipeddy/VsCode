import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent {
  side:number=5;
  terabytes:number=10;
  img1Size=1024;
  img2Size=4096;
  file1Size=2048;
  file2Size=3000;
  db1Size=1024;
  db2Size=2050;
  name:string="sunny";
  town:string="Bellevue";
  state:string="Washington";
  country:string="USA";
}
