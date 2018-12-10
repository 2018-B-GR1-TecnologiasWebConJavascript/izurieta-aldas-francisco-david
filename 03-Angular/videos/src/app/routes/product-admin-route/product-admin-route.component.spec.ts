import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdminRouteComponent } from './product-admin-route.component';

describe('ProductAdminRouteComponent', () => {
  let component: ProductAdminRouteComponent;
  let fixture: ComponentFixture<ProductAdminRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAdminRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAdminRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
