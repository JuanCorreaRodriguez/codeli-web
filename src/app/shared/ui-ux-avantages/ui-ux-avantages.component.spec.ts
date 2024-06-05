import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUxAvantagesComponent } from './ui-ux-avantages.component';

describe('UiUxAvantagesComponent', () => {
  let component: UiUxAvantagesComponent;
  let fixture: ComponentFixture<UiUxAvantagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiUxAvantagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiUxAvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
