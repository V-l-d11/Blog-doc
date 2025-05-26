import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormFieldConfig,
  FormViewModel,
} from '../../ui-models/ui-general-form-vm';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'lib-general-form-control-ui',
  templateUrl: './general-form-control-ui.component.html',
  styleUrl: './general-form-control-ui.component.scss',
})
export class GeneralFormControlUiComponent<T> implements OnInit {
  @Input({ required: true }) config: FormViewModel | undefined;
  @Output() formSubmit = new EventEmitter<T>();

  formGroupe!: FormGroup;

  ngOnInit(): void {
    if (this.config) {
      this.formGroupe = this.buildFormGroupe(this.config.fields);
    } else {
      console.error('Config is undefined');
    }
  }

  buildFormGroupe(fields: FormFieldConfig[]): FormGroup {
    const group: Record<string, AbstractControl> = {};

    for (const field of fields) {
      switch (field.type) {
        case 'group':
          group[field.name] = this.buildFormGroupe(field.children || []);
          break;
        case 'array':
          group[field.name] = new FormArray([]);
          break;
        default:
          group[field.name] = new FormControl('', field.validators || []);
      }
    }
    return new FormGroup(group);
  }

  submit(): void {
    if (this.formGroupe.valid) {
      this.formSubmit.emit(this.formGroupe.value as T);
    } else {
      this.formGroupe.markAllAsTouched();
    }
  }

  getFormControl(name: string): AbstractControl {
    return this.formGroupe.get(name) as AbstractControl;
  }
}
