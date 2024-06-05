import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevIntroduceComponent } from './web-dev-introduce.component';

describe('WebDevIntroduceComponent', () => {
  let component: WebDevIntroduceComponent;
  let fixture: ComponentFixture<WebDevIntroduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebDevIntroduceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebDevIntroduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
