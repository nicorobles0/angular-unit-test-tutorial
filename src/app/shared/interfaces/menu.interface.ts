export interface Menu {
  label: string;
  isRelative: boolean;
  path: string;
  children: Menu[];
}
