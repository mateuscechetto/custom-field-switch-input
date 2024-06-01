import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomSwitchInputFieldComponent } from './custom-switch-input-field/custom-switch-input-field.component';

@NgModule({
  declarations: [AppComponent, CustomSwitchInputFieldComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
