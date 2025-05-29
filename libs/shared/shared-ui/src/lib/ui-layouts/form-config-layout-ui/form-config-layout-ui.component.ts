import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormLayoutVm } from '../../ui-models/layout-wm/config-form-layout-ui';
/*Input Date*/

/*

this.form = new FormGroup({
  personalData: new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  }),
  address: new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
  }),
});

this.formConfig: FormGroupVm[] = [
  {
    groupName: 'personalData',
    fields: [
      { name: 'name', type: 'input', placeholder: 'Имя' },
      { name: 'email', type: 'input', placeholder: 'Email', inputType: 'email' },
    ],
  },
  {
    groupName: 'address',
    fields: [
      { name: 'street', type: 'input', placeholder: 'Улица' },
      { name: 'city', type: 'input', placeholder: 'Город' },
    ],
  },
];
*/

@Component({
  selector: 'lib-form-config-layout-ui',
  standalone: false,
  templateUrl: './form-config-layout-ui.component.html',
  styleUrl: './form-config-layout-ui.component.scss',
})
export class FormConfigLayoutUiComponent {
  @Input() public formGroupe!: FormGroup;
  @Input() public fromGroupes: FormLayoutVm[] = [];
  @Input() public readonly = false;

  @Output() formSubmit = new EventEmitter<any>();

  submit(): void {
    if (this.formGroupe.valid) {
      this.formSubmit.emit(this.formGroupe.value);
    }
  }
}
