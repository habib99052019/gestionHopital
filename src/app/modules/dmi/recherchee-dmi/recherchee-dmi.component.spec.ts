import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheeDmiComponent } from './recherchee-dmi.component';

describe('RechercheeDmiComponent', () => {
  let component: RechercheeDmiComponent;
  let fixture: ComponentFixture<RechercheeDmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheeDmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheeDmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
