import { Directive, OnInit, Optional, Self } from '@angular/core';
import { UiValidatorFeedback } from '../ui-models/ui-general-form-vm';
import { AbstractControl, NgControl } from '@angular/forms';

@Directive()
export abstract class UiFormControlValidateDirective implements OnInit {
  public validationFeedback: UiValidatorFeedback[] = [];

  constructor(@Self() @Optional() public ngControl: NgControl) {}

  ngOnInit(): void {
    const control = this.ngControl?.control;
    if (control) {
      this.updateFeedback(control);
      control.statusChanges?.subscribe(() => {
        this.updateFeedback(control);
      });
    }
  }

  private updateFeedback(control: AbstractControl): void {
    if (!control.touched && !control.dirty) {
      this.validationFeedback = [];
      return;
    }
    if (!control.errors) {
      this.validationFeedback = [];
      return;
    }
    this.validationFeedback = Object.keys(control.errors).map((key) => ({
      validator: key,
      message: this.getErrorMassage(key, control.errors![key]),
      translate: false,
    }));
  }

  private getErrorMassage(key: string, value?: any): string {
    switch (key) {
      case 'required':
        return 'Filed is requer';
      case 'email':
        return 'Not correct email';
      case 'minLength':
        return 'Min Length';
      case 'maxLength':
        return 'Max length';
      case 'pattern':
        return 'Not correct format';
      default:
        return 'Error';
    }
  }
}
