import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingIntroduceComponent } from './consulting-introduce.component';

describe('ConsultingIntroduceComponent', () => {
  let component: ConsultingIntroduceComponent;
  let fixture: ComponentFixture<ConsultingIntroduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultingIntroduceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultingIntroduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
