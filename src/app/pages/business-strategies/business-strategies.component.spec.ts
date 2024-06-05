import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessStrategiesComponent } from './business-strategies.component';

describe('BusinessStrategiesComponent', () => {
  let component: BusinessStrategiesComponent;
  let fixture: ComponentFixture<BusinessStrategiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessStrategiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessStrategiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
