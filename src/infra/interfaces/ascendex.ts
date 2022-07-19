 interface Data {
  symbol: string;
  open: string;
  close: string;
  high: string;
  low: string;
  volume: string;
  ask: string[];
  bid: string[];
  type: string;
}

export interface Ascendex {
  code: number;
  data: Data;
}