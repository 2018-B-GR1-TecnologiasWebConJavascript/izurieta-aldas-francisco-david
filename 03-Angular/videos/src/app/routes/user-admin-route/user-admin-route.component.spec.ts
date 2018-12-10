import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminRouteComponent } from './user-admin-route.component';

describe('UserAdminRouteComponent', () => {
  let component: UserAdminRouteComponent;
  let fixture: ComponentFixture<UserAdminRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAdminRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdminRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
