import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bulbs: boolean[] = []; // true = on, false = off
  onBulbs: number[] = []; // bulbs that are on
  currentPhase = 0;
  numBulbs = 100;

  constructor() {
    for (let i = 0; i < this.numBulbs; i++) {
      this.bulbs.push(false); // initialize all bulbs to off
    }
  }
  nextPhase() {
    if(this.currentPhase >= this.numBulbs) return;
    this.currentPhase++;
    // toggle the bulbs based on the current phase
    // if the phase is divisible by the bulb number, toggle the bulb
    for (let i = 0; i < this.numBulbs; i++) {
      if ((i + 1) % this.currentPhase == 0) {
        this.bulbs[i] = !this.bulbs[i];
      }
    }
    this.getOnBulbsByPhase();
  }

  getOnBulbsByPhase() {
    // get the bulbs that are on based on the current phase
    this.onBulbs = [];
    for (let i = 0; i < this.numBulbs; i++) {
      if (this.bulbs[i]) {
        this.onBulbs.push(i + 1);
      }
    }
  }
}
  
  
