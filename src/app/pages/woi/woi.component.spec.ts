import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoiComponent } from './woi.component';

describe('WoiComponent', () => {
  let component: WoiComponent;
  let fixture: ComponentFixture<WoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WoiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
