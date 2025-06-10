export interface UiHeaderConfig {
  layout?: 'flex' | 'grid';
  justifyContent?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around';
  alignItems?: 'start' | 'center' | 'end';
  sticky?: boolean;
  backgroundColor?: string;
  className?: string;
  sections: HeaderSection[];
  style?: string;
  borderRadius?: string;
}

export interface HeaderSection {
  position: 'left' | 'center' | 'right';
  items: HeaderItem[];
}

export interface HeaderItem {
  type: 'text' | 'icon' | 'button' | 'avatar' | 'dropdown' | 'custom';
  text?: string;
  iconName?: string;
  src?: string;
  action?: string | (() => void);
  tooltip?: string;
  styles?: {
    fontSize?: string;
    fontWeight?: string;
    color?: string;
    padding?: string;
    margin?: string;
    classList?: string[];
    backgroundColor?: string;
  };
  visible?: boolean;
}
