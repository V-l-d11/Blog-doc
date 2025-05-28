import { Injectable } from '@angular/core';
import { UiValidatorFeedback } from '../../ui-models/ui-general-form-vm';

@Injectable()
export abstract class UiFormControlValidated {
  abstract onValidation(feedback: UiValidatorFeedback[]): void;
  abstract getControlName(): string;
}
