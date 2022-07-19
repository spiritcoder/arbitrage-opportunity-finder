import { Request, Response } from 'express';
import { exchangeRepository } from '../infra/repositories/index';
import { NotFoundError, BadRequestError, DataNotSavedError } from '../errors/index'
import { createResponse, textToLowerCase, Password, commonTokenResponse, ShortCode } from '../utils/index';

class Admin {

  addExchange = async (req: Request, res: Response) => {

    const savedExchange = await exchangeRepository.create(req.body);
    if (savedExchange._id == null) throw new DataNotSavedError("There was a problem saving the Exchange");
    await createResponse(res, 200, "Exchanged saved Successful", null);

  }

  editExchange = async (req: Request, res: Response) => {
    const { URL, name, isActive, exchangeId, pairDelimiter } = req.body
    const existingExchange = await exchangeRepository.findOne({ _id: exchangeId })
      
    if (!existingExchange) {
        throw new BadRequestError("Invalid Credentials");
    }

    const updateExchange = await exchangeRepository.updateOne(exchangeId, { ...req.body });
    if (updateExchange == null) throw new DataNotSavedError("An error occured updating the details");
    
    return createResponse(res, 200, "Exchange Updated", null);

  }

  deleteExchange = async (req: Request, res: Response) => {
    const exchangeId = req.params.exchangeId;
        
    const deleteExchange = await exchangeRepository.deleteById(exchangeId);
    if (deleteExchange == null) throw new DataNotSavedError("An error occured deleting the exchange");
    return createResponse(res, 200, "Exchange Deleted", null);
  }

  changeExchangeStatus = async (req: Request, res: Response) => {
    const exchangeId = req.body.exchangeId;
        
    const deleteExchange = await exchangeRepository.updateOne(exchangeId, {isActive: req.body.isActive});
    if (deleteExchange == null) throw new DataNotSavedError("An error occured updating the exchange");
    return createResponse(res, 200, "Exchange status updated", null);
  }
}

export const adminController = new Admin();

