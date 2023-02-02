import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtainfoComponent } from './ctainfo.component';

describe('CtainfoComponent', () => {
  let component: CtainfoComponent;
  let fixture: ComponentFixture<CtainfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtainfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtainfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
