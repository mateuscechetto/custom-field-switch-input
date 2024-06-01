import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-switch-input-field',
  templateUrl: './custom-switch-input-field.component.html',
  styleUrls: ['./custom-switch-input-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSwitchInputFieldComponent),
      multi: true,
    },
  ],
})
export class CustomSwitchInputFieldComponent implements ControlValueAccessor {
  isSwitchOn = false;
  numberValue: number | undefined;

  private onChange: any = () => {};
  private onTouched: any = () => {};

  writeValue(value: number): void {
    this.isSwitchOn = value !== 0;
    this.numberValue = this.isSwitchOn ? value : undefined;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onSwitchChange() {
    if (!this.isSwitchOn) {
      this.numberValue = undefined;
      this.onChange(0);
    } else {
      this.numberValue = 0;
    }
    this.onTouched();
  }

  onNumberChange(value: number) {
    if (this.isSwitchOn) {
      this.onChange(value);
    }
    this.onTouched();
  }
}
