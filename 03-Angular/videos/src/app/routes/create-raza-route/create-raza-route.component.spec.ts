import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRazaRouteComponent } from './create-raza-route.component';

describe('CreateRazaRouteComponent', () => {
  let component: CreateRazaRouteComponent;
  let fixture: ComponentFixture<CreateRazaRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRazaRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRazaRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
