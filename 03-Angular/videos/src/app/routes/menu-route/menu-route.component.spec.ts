import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRouteComponent } from './menu-route.component';

describe('MenuRouteComponent', () => {
  let component: MenuRouteComponent;
  let fixture: ComponentFixture<MenuRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
