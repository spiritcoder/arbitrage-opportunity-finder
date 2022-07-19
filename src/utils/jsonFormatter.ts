import { forkJoin } from "rxjs";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { take } from "rxjs/operators";
import { Binance } from "../infra/interfaces/binance";
import { Kraken } from "../infra/interfaces/kraken";
import { Poloniex } from "../infra/interfaces/poloneix";
import { Huobi } from "../infra/interfaces/huobi";
import { Bittrex } from "../infra/interfaces/bittrex";
import { Mexc } from "../infra/interfaces/mexc";
import { Xt } from "../infra/interfaces/xt";
import { Gate } from "../infra/interfaces/gate";
import { Kucoin } from "../infra/interfaces/kucoin";
import { Bybit } from "../infra/interfaces/bybit";
import { Aax } from "../infra/interfaces/aax";
import { Ascendex } from "../infra/interfaces/ascendex";
import { Okcoin } from "../infra/interfaces/okcoin";
import { Azbit } from "../infra/interfaces/azbit";
import { Bkex } from "../infra/interfaces/bkex";
import { Hitbtc } from "../infra/interfaces/hitbtc";
import { Okx } from "../infra/interfaces/okx";

const binanceFormatter = async (jsonString: string[]): Promise<string[]> => {
  let binancePrices: string[] = [];
  for (var i = 0; i < jsonString.length; i++) {
    let binanceFormat: Binance = JSON.parse(jsonString[i]);
    binancePrices.push(binanceFormat.price)
  }
  return binancePrices;
};

// const krakenFormatter = async (jsonString: string[]): Promise<any[]> => {
//   let krakenPrices: string[] = [];
//   for (let i = 0; i < jsonString.length; i++) {
//     let krakenFormat: Kraken =  ;
    
//   }
//   return krakenPrices;
// };

const poloniexFormatter = async (jsonString: string[]): Promise<any[]> => {
  let poloniexPrices: string[] = [];
  for (var i = 0; i < jsonString.length; i++) {
    let poloniexFormat: Poloniex = JSON.parse(jsonString[i]);
    poloniexPrices.push(poloniexFormat.asks[0].toString())
  }
  return poloniexPrices;
};

const huobiFormatter = async (jsonString: string[]): Promise<any[]> => {
  let huobiPrices: string[] = [];
  for (var i = 0; i < jsonString.length; i++) {
    let huobiFormat: Huobi = JSON.parse(jsonString[i]);
    huobiPrices.push(huobiFormat.tick.close.toString())
  }
  return huobiPrices;
};

const bittrexFormatter = async (jsonString: string[]): Promise<any[]> => {
  let bittrexPrices: string[] = [];
  for (var i = 0; i < jsonString.length; i++) {
    let bittrexFormat: Bittrex = JSON.parse(jsonString[i]);
    bittrexPrices.push(bittrexFormat.lastTradeRate)
  }
  return bittrexPrices;
 };

const mexcFormatter = async (jsonString: string[]): Promise<any[]> => { 
  let mexcPrices: string[] = [];
  for (var i = 0; i < jsonString.length; i++) {
    let mexcFormat: Mexc = JSON.parse(jsonString[i]);
    mexcPrices.push(mexcFormat.askPrice)
  }
  return mexcPrices;
};

const xtFormatter = async (jsonString: string[]): Promise<any[]> => { 
  let xtPrices: string[] = [];
  for (var i = 0; i < jsonString.length; i++) {
    let xtFormat: Xt = JSON.parse(jsonString[i]);
    xtPrices.push(xtFormat.last)
  }
  return xtPrices;
};

const gateFormatter = async (jsonString: string[]): Promise<any[]> => { 
  let gatePrices: string[] = [];
  for (var i = 0; i < jsonString.length; i++) {
    let gateFormat: Gate = JSON.parse(jsonString[i]);
    gatePrices.push(gateFormat.last)
  }
  return gatePrices;
};

const kucoinFormatter = async (jsonString: string[]): Promise<any[]> => {
  let kucoinPrices: string[] = [];
  for (var i = 0; i < jsonString.length; i++) {
    let kucoinFormat: Kucoin = JSON.parse(jsonString[i]);
    kucoinPrices.push(kucoinFormat.data.price)
  }
  return kucoinPrices;
};

const bybitFormatter = async (jsonString: string[]): Promise<any[]> => {
  let bybitPrices: string[] = [];
  for (var i = 0; i < jsonString.length; i++) {
    let bybitFormat: Bybit = JSON.parse(jsonString[i]);
    bybitPrices.push(bybitFormat.result[0].price.toString())
  }
  return bybitPrices;
};

const aaxFormatter = async (jsonString: string[]): Promise<any[]> => {
  let aaxPrices: string[] = [];
  for (var i = 0; i < jsonString.length; i++) {
    let aaxFormat: Aax = JSON.parse(jsonString[i]);
    aaxPrices.push(aaxFormat.p)
  }
  return aaxPrices;
};

const ascendexFormatter = async (jsonString: string[]): Promise<any[]> => {
  let ascendexPrices: string[] = [];
  for (var i = 0; i < jsonString.length; i++) {
    let ascendexFormat: Ascendex = JSON.parse(jsonString[i]);
    ascendexPrices.push(ascendexFormat.data.close)
  }
  return ascendexPrices;
};

const okcoinFormatter = async (jsonString: string[]): Promise<any[]> => {
  let okcoinPrices: string[] = [];
  for (var i = 0; i < jsonString.length; i++) {
    let okcoinFormat: Okcoin = JSON.parse(jsonString[i]);
    okcoinPrices.push(okcoinFormat.last)
  }
  return okcoinPrices;
};

const azbitFormatter = async (jsonString: string[]): Promise<any[]> => {
  let azbitPrices: string[] = [];
  for (var i = 0; i < jsonString.length; i++) {
    let azbitFormat: Azbit = JSON.parse(jsonString[i]);
    azbitPrices.push(azbitFormat.price.toString())
  }
  return azbitPrices;
};

const bkexFormatter = async (jsonString: string[]): Promise<any[]> => {
  let bkexPrices: string[] = [];
  for (var i = 0; i < jsonString.length; i++) {
    let bkexFormat: Bkex = JSON.parse(jsonString[i]);
    bkexPrices.push(bkexFormat.data[0].close.toString())
  }
  return bkexPrices;
};

const hitbtcFormatter = async (jsonString: string[]): Promise<any[]> => {
  let hitbtcPrices: string[] = [];
  for (var i = 0; i < jsonString.length; i++) {
    let hitbtcFormat: Hitbtc = JSON.parse(jsonString[i]);
    hitbtcPrices.push(hitbtcFormat.last)
  }
  return hitbtcPrices;
};

const okxFormatter = async (jsonString: string[]): Promise<any[]> => {
  let okxPrices: string[] = [];
  for (let i = 0; i < jsonString.length; i++) {
    let okxFormat: Okx = JSON.parse(jsonString[i]) ;
    okxPrices.push(okxFormat.data[0].last)
  }
  return okxPrices;
};

export {
  binanceFormatter,
  huobiFormatter,
  aaxFormatter,
  ascendexFormatter,
  azbitFormatter,
  bittrexFormatter,
  bkexFormatter,
  bybitFormatter,
  gateFormatter,
  hitbtcFormatter,
  // krakenFormatter,
  kucoinFormatter,
  mexcFormatter,
  okcoinFormatter,
  xtFormatter,
  poloniexFormatter,
  okxFormatter
};
