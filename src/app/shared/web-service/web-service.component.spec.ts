import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebServiceComponent } from './web-service.component';

describe('WebServiceComponent', () => {
  let component: WebServiceComponent;
  let fixture: ComponentFixture<WebServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
