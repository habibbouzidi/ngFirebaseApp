import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BettingPredictionComponent } from './betting-prediction.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path:'betting', component: BettingPredictionComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BettingPredictionRoutingModule { }
