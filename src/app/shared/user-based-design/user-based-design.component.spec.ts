import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBasedDesignComponent } from './user-based-design.component';

describe('UserBasedDesignComponent', () => {
  let component: UserBasedDesignComponent;
  let fixture: ComponentFixture<UserBasedDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBasedDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserBasedDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
