import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingUsComponent } from './consulting-us.component';

describe('ConsultingUsComponent', () => {
  let component: ConsultingUsComponent;
  let fixture: ComponentFixture<ConsultingUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultingUsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultingUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
