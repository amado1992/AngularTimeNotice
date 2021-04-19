import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  interval;
  isPause: boolean = false;

  miliSecond: number = 0;
  second: number = 0;
  minute: number = 0;

  miliSecondPlus: number = 60;
  secondPlus: number = 60;
  minutePlus: number = 60;

  constructor() { }

  
  ngOnInit(): void {
    this.startCronometro();
  }

  public startCronometro()
  {

      if (!this.isPause){
        this.isPause = true;
        this.interval = setInterval(() => {
          if (++this.miliSecond >= this.miliSecondPlus){
            this.miliSecond = 0
    
           if (++this.second >= this.secondPlus){
            this.miliSecond = 0
            this.second = 0
    
             if (++this.minute >= this.minutePlus){
             this.miliSecond = 0
             this.second = 0
             this.minute = 0
            }
           }
         }
         }, 1)
        }
  }


  resetCronometro() {
    
  if (!this.isPause){
    this.miliSecond = 0
    this.second = 0
    this.minute = 0
    }
  }

  pauseCronometro() {
    this.isPause = false;
    clearInterval(this.interval);
  }

}
