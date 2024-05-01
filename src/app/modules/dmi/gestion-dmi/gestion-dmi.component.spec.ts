import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDmiComponent } from './gestion-dmi.component';

describe('GestionDmiComponent', () => {
  let component: GestionDmiComponent;
  let fixture: ComponentFixture<GestionDmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
