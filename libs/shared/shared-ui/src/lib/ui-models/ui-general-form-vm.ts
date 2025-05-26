import { ValidatorFn } from '@angular/forms';

export interface FormViewModel {
  fields: FormFieldConfig[];
  styles?: { [key: string]: string };
  classes?: string[];
  submitText?: string;
}

export interface FormFieldConfig {
  name: string;
  type: 'input' | 'select' | 'checkbox' | 'group' | 'array';
  label?: string;
  validators?: ValidatorFn[];
  children?: FormFieldConfig[];
  options?: { value: string; label: string }[];
  styles?: { [key: string]: string };
}
