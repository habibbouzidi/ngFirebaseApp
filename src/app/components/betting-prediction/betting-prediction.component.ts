import { Component } from '@angular/core';

@Component({
  selector: 'app-betting-prediction',
  templateUrl: './betting-prediction.component.html',
  styleUrls: ['./betting-prediction.component.scss']
})
export class BettingPredictionComponent{

  games: string = "";
  tips: string = "";

  matchGames: string[]=[];
  tipsList: string[] = [];
  predictions: any[]=[];

  constructor(){}

  saveGamesTips(){
    this.matchGames = this.games.split(',');
    this.tipsList = this.tips.split(',');
  }

  generatePredictions(){
    this.predictions = [];
    let i= 0;
    let gamesIteration: number[]=[]; 
    while(i < this.matchGames.length){
      let randomGame = this.randomInt(0, this.matchGames.length-1);
      const index = gamesIteration.findIndex(iteration=>iteration===randomGame);

      if(index === -1){
        let prediction:any = {coupon: 1, match: "", tips: ""};
        prediction.match =this.matchGames[randomGame];
        prediction.tips = this.tipsList[this.randomInt(0, this.tipsList.length-1)];
        this.predictions.push(prediction);
        gamesIteration.push(randomGame);
        i++;
      }
    }
  }

  shuffleGames(){
    this.predictions.forEach(item=>{
      item.coupon = this.randomInt(1, 3);
    })
  }

  randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
