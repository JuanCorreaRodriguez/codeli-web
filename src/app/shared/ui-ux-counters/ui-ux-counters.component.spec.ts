import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUxCountersComponent } from './ui-ux-counters.component';

describe('UiUxCountersComponent', () => {
  let component: UiUxCountersComponent;
  let fixture: ComponentFixture<UiUxCountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiUxCountersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiUxCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
