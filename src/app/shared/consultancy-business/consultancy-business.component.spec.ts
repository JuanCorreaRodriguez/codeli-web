import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultancyBusinessComponent } from './consultancy-business.component';

describe('ConsultancyBusinessComponent', () => {
  let component: ConsultancyBusinessComponent;
  let fixture: ComponentFixture<ConsultancyBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultancyBusinessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultancyBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
