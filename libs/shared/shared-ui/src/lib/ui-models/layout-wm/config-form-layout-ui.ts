export interface FormLayoutVm {
  groupeName: string;
  fileds: FormFiledVm[];
}

export interface FormFiledVm {
  name: string;
  type: 'input' | 'checkbox' | 'select';
  placholder: string;
  inputType?: 'text' | 'email' | 'number' | 'date';
  value?: any;
}
