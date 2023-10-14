import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  emps:any[]=[
    {eid:1,ename:"sunny",esal:1000,edoj:new Date("04/24/2002")},
    {eid:2,ename:"shalu",esal:3000,edoj:new Date("02/20/2001")},
    {eid:3,ename:"sai",esal:5000,edoj:new Date("01/07/1994")},
    {eid:4,ename:"madhulika",esal:4000,edoj:new Date("08/09/1994")}
  ]
}
