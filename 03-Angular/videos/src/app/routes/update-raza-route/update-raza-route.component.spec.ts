import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRazaRouteComponent } from './update-raza-route.component';

describe('UpdateRazaRouteComponent', () => {
  let component: UpdateRazaRouteComponent;
  let fixture: ComponentFixture<UpdateRazaRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRazaRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRazaRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
