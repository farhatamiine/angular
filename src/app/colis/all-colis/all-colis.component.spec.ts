import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllColisComponent } from './all-colis.component';

describe('AllColisComponent', () => {
  let component: AllColisComponent;
  let fixture: ComponentFixture<AllColisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllColisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllColisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
