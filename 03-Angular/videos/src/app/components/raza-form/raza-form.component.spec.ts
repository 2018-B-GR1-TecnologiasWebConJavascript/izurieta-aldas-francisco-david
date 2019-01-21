import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaFormComponent } from './raza-form.component';

describe('RazaFormComponent', () => {
  let component: RazaFormComponent;
  let fixture: ComponentFixture<RazaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
