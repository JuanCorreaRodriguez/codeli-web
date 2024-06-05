import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproachIntroduceComponent } from './approach-introduce.component';

describe('ApproachIntroduceComponent', () => {
  let component: ApproachIntroduceComponent;
  let fixture: ComponentFixture<ApproachIntroduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproachIntroduceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApproachIntroduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
