import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyIntroduceComponent } from './strategy-introduce.component';

describe('StrategyIntroduceComponent', () => {
  let component: StrategyIntroduceComponent;
  let fixture: ComponentFixture<StrategyIntroduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrategyIntroduceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrategyIntroduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
