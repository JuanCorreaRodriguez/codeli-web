import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WireframingComponent } from './wireframing.component';

describe('WireframingComponent', () => {
  let component: WireframingComponent;
  let fixture: ComponentFixture<WireframingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WireframingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WireframingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
