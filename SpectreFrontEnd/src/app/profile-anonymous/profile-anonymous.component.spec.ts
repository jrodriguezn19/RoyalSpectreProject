import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAnonymousComponent } from './profile-anonymous.component';

describe('ProfileAnonymousComponent', () => {
  let component: ProfileAnonymousComponent;
  let fixture: ComponentFixture<ProfileAnonymousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAnonymousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAnonymousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
