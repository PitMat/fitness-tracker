import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastsTrainingsComponent } from './pasts-trainings.component';

describe('PastsTrainingsComponent', () => {
  let component: PastsTrainingsComponent;
  let fixture: ComponentFixture<PastsTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastsTrainingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastsTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
