export interface UiListVM {
  items: UiListItem[];
  listClass: string | string[];
  listStyle: { [key: string]: string };
}

export interface UiListItem {
  label: string;
  icon?: string;
  value?: any;
  class?: string;
}
