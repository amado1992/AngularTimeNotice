import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-lib',
  templateUrl: './test-lib.component.html',
  styleUrls: ['./test-lib.component.css']
})
export class TestLibComponent implements OnInit {
  //Reloj
  hour: any;
  minute: string;
  second: string;
  ampm: string;

  //Cronometro
  interval;
  isPause: boolean = false;

  miliSecond: number = 0;
  secondNext: number = 0;
  minuteNext: number = 0;

  miliSecondPlus: number = 60;
  secondPlus: number = 60;
  minutePlus: number = 60;

  constructor() {

  }

  ngOnInit(): void {

    setInterval(() => {
      const date = new Date();
      this.updateDate(date);
    }, 1000);
    
    this.startCronometro()
   
  }

//Reloj
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

//Cronometro
  public startCronometro()
  {

      if (!this.isPause){
        this.isPause = true;
        this.interval = setInterval(() => {
          if (++this.miliSecond >= this.miliSecondPlus){
            this.miliSecond = 0
    
           if (++this.secondNext >= this.secondPlus){
            this.miliSecond = 0
            this.secondNext = 0
    
             if (++this.minuteNext >= this.minutePlus){
             this.miliSecond = 0
             this.secondNext = 0
             this.minuteNext = 0
            }
           }
         }
         }, 1)
        }
  }


  resetCronometro() {
    
  if (!this.isPause){
    this.miliSecond = 0
    this.secondNext = 0
    this.minuteNext = 0
    }
  }

  pauseCronometro() {
    this.isPause = false;
    clearInterval(this.interval);
  }
}
