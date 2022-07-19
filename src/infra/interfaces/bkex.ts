export interface Datum {
  change: number;
  close: number;
  high: number;
  low: number;
  open: number;
  quoteVolume: number;
  symbol: string;
  ts: number;
  volume: number;
}

export interface Bkex {
  code: number;
  data: Datum[];
  msg: string;
  status: number;
}