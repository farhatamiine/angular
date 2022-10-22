import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRelayComponent } from './add-relay.component';

describe('AddRelayComponent', () => {
  let component: AddRelayComponent;
  let fixture: ComponentFixture<AddRelayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRelayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
