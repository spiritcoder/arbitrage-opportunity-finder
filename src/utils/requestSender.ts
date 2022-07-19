import { forkJoin } from "rxjs";
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { take } from 'rxjs/operators';

const request = async (baseUrl: string) => {
  const result = await (await axios.get(baseUrl)).data;
  return result;
}

const fetchBulk = async (baseUrl: string, tradingPairs: string[]): Promise<any[]> => {
  const fetchDetails = await forkJoin(
    tradingPairs.map((tradingPair) => {
      console.log(tradingPair)
      var finalUrl = baseUrl.replace("{}", tradingPair)
      return request(finalUrl);
    }),
  )
    .pipe(take(1))
    .toPromise();
  const responses: any[] = JSON.parse(JSON.stringify(fetchDetails));

  return responses;
}



const fetchBulkArray = async (Url: string[]): Promise<any> => {
  const fetchDetails = await forkJoin(
    Url.map((tradingPair) => {
      return request(tradingPair);
    }),
  )
    .pipe(take(1))
    .toPromise();
  const responses: string = JSON.stringify(fetchDetails);

  return responses;
}

export { fetchBulk, fetchBulkArray };