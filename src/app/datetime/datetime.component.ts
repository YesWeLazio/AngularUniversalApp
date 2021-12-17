import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss']
})
export class DatetimeComponent implements OnInit {

  public startDt : string;

  constructor() { 
    // this.startDt = new Date().toISOString().slice(0, 16);
    this.startDt = this.toDateString(new Date());
  }

  ngOnInit(): void { }

  public print(): void{
    console.log(this.startDt);
  }

  private toDateString(date: Date): string {
    return (date.getFullYear().toString() + '-' 
       + ("0" + (date.getMonth() + 1)).slice(-2) + '-' 
       + ("0" + (date.getDate())).slice(-2))
       + 'T' + date.toTimeString().slice(0,5);
  }

}
