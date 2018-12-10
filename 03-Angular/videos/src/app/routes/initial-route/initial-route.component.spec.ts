import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialRouteComponent } from './initial-route.component';

describe('InitialRouteComponent', () => {
  let component: InitialRouteComponent;
  let fixture: ComponentFixture<InitialRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
