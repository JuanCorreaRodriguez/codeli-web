import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyCountersComponent } from './strategy-counters.component';

describe('StrategyCountersComponent', () => {
  let component: StrategyCountersComponent;
  let fixture: ComponentFixture<StrategyCountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrategyCountersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrategyCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
