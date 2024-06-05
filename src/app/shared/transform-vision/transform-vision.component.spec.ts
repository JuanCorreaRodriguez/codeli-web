import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformVisionComponent } from './transform-vision.component';

describe('TransformVisionComponent', () => {
  let component: TransformVisionComponent;
  let fixture: ComponentFixture<TransformVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformVisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransformVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
