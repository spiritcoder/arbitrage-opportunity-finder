interface Result {
  id: string;
  symbol: string;
  price: number;
  qty: number;
  side: string;
  time: Date;
  trade_time_ms: number;
}

export interface Bybit {
  ret_code: number;
  ret_msg: string;
  ext_code: string;
  ext_info: string;
  result: Result[];
  time_now: string;
}
