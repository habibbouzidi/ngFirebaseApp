import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BettingPredictionComponent } from './betting-prediction.component';

describe('BettingPredictionComponent', () => {
  let component: BettingPredictionComponent;
  let fixture: ComponentFixture<BettingPredictionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BettingPredictionComponent]
    });
    fixture = TestBed.createComponent(BettingPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
