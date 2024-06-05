import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleApproachComponent } from './simple-approach.component';

describe('SimpleApproachComponent', () => {
  let component: SimpleApproachComponent;
  let fixture: ComponentFixture<SimpleApproachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleApproachComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
