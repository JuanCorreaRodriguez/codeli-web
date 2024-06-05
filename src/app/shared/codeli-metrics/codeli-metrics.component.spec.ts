import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeliMetricsComponent } from './codeli-metrics.component';

describe('CodeliMetricsComponent', () => {
  let component: CodeliMetricsComponent;
  let fixture: ComponentFixture<CodeliMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeliMetricsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodeliMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
