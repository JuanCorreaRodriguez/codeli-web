import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUxIntroduceComponent } from './ui-ux-introduce.component';

describe('UiUxIntroduceComponent', () => {
  let component: UiUxIntroduceComponent;
  let fixture: ComponentFixture<UiUxIntroduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiUxIntroduceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiUxIntroduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
