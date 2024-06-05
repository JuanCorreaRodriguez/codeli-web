import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioBodyComponent } from './portfolio-body.component';

describe('PortfolioBodyComponent', () => {
  let component: PortfolioBodyComponent;
  let fixture: ComponentFixture<PortfolioBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
