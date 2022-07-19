export interface Data {
  time: number;
  sequence: string;
  price: string;
  size: string;
  bestBid: string;
  bestBidSize: string;
  bestAsk: string;
  bestAskSize: string;
}

export interface Kucoin {
  code: string;
  data: Data;
}
