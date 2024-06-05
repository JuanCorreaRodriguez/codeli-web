import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCodeliComponent } from './contact-codeli.component';

describe('ContactCodeliComponent', () => {
  let component: ContactCodeliComponent;
  let fixture: ComponentFixture<ContactCodeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactCodeliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactCodeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
