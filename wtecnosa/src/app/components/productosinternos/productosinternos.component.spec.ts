import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosinternosComponent } from './productosinternos.component';

describe('ProductosinternosComponent', () => {
  let component: ProductosinternosComponent;
  let fixture: ComponentFixture<ProductosinternosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosinternosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosinternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
