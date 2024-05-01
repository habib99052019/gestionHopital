import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionsDmiComponent } from './decisions-dmi.component';

describe('DecisionsDmiComponent', () => {
  let component: DecisionsDmiComponent;
  let fixture: ComponentFixture<DecisionsDmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecisionsDmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisionsDmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
