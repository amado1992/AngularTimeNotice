import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {
  hour: any;
  minute: string;
  second: string;
  ampm: string;
  
  today: number;

  constructor() {

  }

  ngOnInit(): void {

    setInterval(() => {
      const date = new Date();
      this.today = Date.now()
      this.updateDate(date);
    }, 1000);

   
  }

private updateDate(date: Date){
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds= date.getSeconds();

this.ampm = hours >= 12 ? 'PM' : 'AM';

this.hour = hours % 12
this.hour = this.hour ? this.hour : 12
this.hour = hours < 10 ? '0' + hours : hours;

this.minute = minutes < 10 ? '0' + minutes : minutes.toString();
this.second = seconds < 10 ? '0' + seconds : seconds.toString();

  }

}
