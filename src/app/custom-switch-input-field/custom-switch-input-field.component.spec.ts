import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSwitchInputFieldComponent } from './custom-switch-input-field.component';

describe('CustomSwitchInputFieldComponent', () => {
  let component: CustomSwitchInputFieldComponent;
  let fixture: ComponentFixture<CustomSwitchInputFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomSwitchInputFieldComponent]
    });
    fixture = TestBed.createComponent(CustomSwitchInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
