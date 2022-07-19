export interface Tick {
  id: number;
  low: number;
  high: number;
  open: number;
  close: number;
  vol: number;
  amount: number;
  version: number;
  count: number;
}

export interface Huobi {
  ch: string;
  status: string;
  ts: number;
  tick: Tick;
}