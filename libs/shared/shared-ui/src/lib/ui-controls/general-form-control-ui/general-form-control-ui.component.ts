import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  UiControlValidation,
  UiValidatorFeedback,
} from '../../ui-models/ui-general-form-vm';
import { UiFormControlValidated } from '../../ui-core/abstract/ui-form-control-validated.abstract';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-general-form-control-ui',
  templateUrl: './general-form-control-ui.component.html',
  styleUrl: './general-form-control-ui.component.scss',
})
export class GeneralFormControlUiComponent
  implements AfterContentInit, OnDestroy
{
  @Input() public formGroupe!: FormGroup;
  @Input() public controlValidation!: UiControlValidation[];
  @Input() public customClassList!: string[];
  @Input() public customStyles = {};

  private formGroupeSubscription?: Subscription;

  @Output() fromSubmit = new EventEmitter<Event>();

  @ContentChildren(UiFormControlValidated, { descendants: true })
  validateControls!: QueryList<UiFormControlValidated>;

  ngAfterContentInit(): void {
    this.formGroupeSubscription = this.formGroupe.valueChanges.subscribe(
      (chenges) => this.validateFormGroup(chenges)
    );
  }

  ngOnDestroy(): void {
    this.formGroupeSubscription?.unsubscribe();
  }

  onFormSubmit(event: Event): void {
    this.fromSubmit.emit(event);
  }

  private validateFormGroup(changes: any): void {
    if (!this.controlValidation) {
      return;
    }

    Object.keys(changes).forEach((controlName) => {
      const control = this.formGroupe.get(controlName);

      if (control?.invalid) {
        let validatorFeedbacks = (this.controlValidation.find(
          (vf) => vf.controlName === controlName
        )?.feedback ?? []) as UiValidatorFeedback[];

        validatorFeedbacks = validatorFeedbacks.filter((vf) => {
          const errors = control?.errors ?? {};
          return Object.keys(errors)
            .map((key) => key.toLowerCase())
            .includes(vf.validator.toLowerCase());
        });

        this.validateControls
          .filter((vc: any) => vc.getControlName() === controlName)
          .forEach((control: any) => control.onValidation(validatorFeedbacks));
      }
    });
  }
}
