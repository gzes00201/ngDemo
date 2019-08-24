interface Result {
  result: string;
  text: string;
  class: string;
  markClass: string;
}

export interface ResultInfo {
  num: string;
  info: Result;
}

export interface IStatusItem {
  title: string;
  resulted?: ResultInfo[];
}

export interface IStatusItemComponent {
  resulted: ResultInfo[];
}
