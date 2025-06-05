import { UiControlChekboxSheme } from '../contoll-model/chekxbox-vm';
import { UiSelectItem } from '../contoll-model/select-vm';
import { UIButtonVM } from '../ui-button-vm';

export type ShemeCardType = 'primary' | 'dark' | 'light' | 'secondary';

export interface BaseBlockElement {
  wrapperClass?: string;
  elementClass?: string;
}

export interface TextBlock extends BaseBlockElement {
  type: 'text';
  value: string;
}

export interface InputFieldBlock extends BaseBlockElement {
  type: 'input';
  name: string;
  placeholder?: string;
  readonly?: boolean;
  autocomplete?: boolean;
  customClassList?: string[];
  customStyles?: { [key: string]: string };
  inputType: 'text' | 'email' | 'password' | 'number' | 'date';
}

export interface ButtonFieldBlock extends BaseBlockElement {
  type: 'button';
  label: string;
  icon?: string;
  color?: 'primary' | 'secondary' | 'accent';
  buttonConfig: UIButtonVM;
}

export interface SelectFieldBlock extends BaseBlockElement {
  type: 'select';
  items: UiSelectItem[];
  name: string;
  options: { label: string; value: string | number }[];
  placeholder?: string;
}

export interface CheckboxBlock extends BaseBlockElement {
  type: 'checkbox';
  label: string;
  name: string;
  required?: boolean;
  colorSheme?: UiControlChekboxSheme;
  customClassList?: string[];
  customStyles?: any;
}

export type BlockElement =
  | TextBlock
  | InputFieldBlock
  | ButtonFieldBlock
  | SelectFieldBlock
  | CheckboxBlock;

export interface CardSchema {
  shemeType: ShemeCardType;
  header?: BlockElement[];
  body?: BlockElement[];
  footer?: BlockElement[];
}
