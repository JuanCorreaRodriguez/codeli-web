import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyServiceComponent } from './strategy-service.component';

describe('StrategyServiceComponent', () => {
  let component: StrategyServiceComponent;
  let fixture: ComponentFixture<StrategyServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrategyServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrategyServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
