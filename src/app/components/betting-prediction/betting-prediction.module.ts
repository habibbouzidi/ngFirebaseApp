import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BettingPredictionRoutingModule } from './betting-prediction-routing.module';
import { BettingPredictionComponent } from './betting-prediction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BettingPredictionComponent
  ],
  imports: [
    CommonModule,
    BettingPredictionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BettingPredictionModule { }
