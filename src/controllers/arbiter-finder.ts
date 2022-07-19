import { Request, response, Response } from "express";
import { exchangeRepository } from "../infra/repositories/index";
import {
  NotFoundError,
  BadRequestError,
  DataNotSavedError,
} from "../errors/index";
import { createResponse, fetchBulkArray } from "../utils/index";

class ArbiterFinder {
  fetchExchanges = async (req: Request, res: Response) => {
    let exchanges = await exchangeRepository.queryMore({ isActive: true });
    createResponse(res, 200, "Seen Exchanges", exchanges);
  };

  findArbiter = async (req: Request, res: Response) => {
    const { coinArray, exchangeArray, pair } = req.body;
    let responses = [];
    let exchangeNames = [];

    //fetch all the responses from the exchanges supplied
    for (let j = 0; j < exchangeArray.length; j++) {
      let exchangeFromDB = await exchangeRepository.findOneById(
        exchangeArray[j]
      );
      let response :any[]= [];
      if (exchangeFromDB != null) {
        exchangeNames.push(exchangeFromDB.name);
        for (let i = 0; i < coinArray.length; i++) {
          let symbol = "";
  
          if (exchangeFromDB.isUpperCase == true) {
            if (exchangeFromDB.name.toLowerCase().includes("polo")) {
              symbol = `${pair.toUpperCase()}${
                exchangeFromDB.pairDelimiter
              }${coinArray[i].toUpperCase()}`;
            } else {
              symbol = `${coinArray[i].toUpperCase()}${
                exchangeFromDB.pairDelimiter
              }${pair.toUpperCase()}`;
            }
          } else {
            if (exchangeFromDB.name.toLowerCase().includes("polo")) {
              symbol = `${pair.toLowerCase()}${
                exchangeFromDB.pairDelimiter
              }${coinArray[i].toLowerCase()}`;
            } else {
              symbol = `${coinArray[i].toLowerCase()}${
                exchangeFromDB.pairDelimiter
              }${pair.toLowerCase()}`;
            }
          }
          let urls: any[] = [];

          let url = exchangeFromDB.URL.replace("{}", symbol);
          urls.push(url);
            
          let gottenResponse = await fetchBulkArray(urls);
          response.push(gottenResponse);
        }
      }
      responses.push(response)

    }
    console.log(exchangeNames)
    console.log(responses)
  };
}

export const arbiterFinderController = new ArbiterFinder();
