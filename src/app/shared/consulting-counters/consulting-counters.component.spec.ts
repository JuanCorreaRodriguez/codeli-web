import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingCountersComponent } from './consulting-counters.component';

describe('ConsultingCountersComponent', () => {
  let component: ConsultingCountersComponent;
  let fixture: ComponentFixture<ConsultingCountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultingCountersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultingCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
