export interface Azbit {
  timestamp: number;
  currencyPairCode: string;
  price: number;
  price24hAgo: number;
  priceChangePercentage24h: number;
  volume24h: number;
  bidPrice: number;
  askPrice: number;
}