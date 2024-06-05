import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproachCardsComponent } from './approach-cards.component';

describe('ApproachCardsComponent', () => {
  let component: ApproachCardsComponent;
  let fixture: ComponentFixture<ApproachCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproachCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApproachCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
