import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleWorkspaceComponent } from './google-workspace.component';

describe('GoogleWorkspaceComponent', () => {
  let component: GoogleWorkspaceComponent;
  let fixture: ComponentFixture<GoogleWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleWorkspaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoogleWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
