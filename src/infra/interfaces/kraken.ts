export interface Body<T> {
  a: string[];
  b: string[];
  c: string[];
  v: string[];
  p: string[];
  t: number[];
  l: string[];
  h: string[];
  o: string;
}

export interface Result <T>{
  Body: Body<T>
}

export interface Kraken<T> {
  error: any[];
  result: Result<T>;
}