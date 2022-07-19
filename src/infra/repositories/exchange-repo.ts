import { Exchange } from '../../models/index';
import { IBaseRepository } from '../interfaces/index';

class ExchangeRepository implements IBaseRepository {

 async create(query: any) {
    return Exchange.create(query);
  }

  async findOneById(id: any) {
    return Exchange.findById(id);
  }

  async findOne(query: any) {
    return Exchange.findOne(query);
  }

  async queryOne(query: any) {
    return Exchange.findOne(query);
  }

  async updateOne(id: any, update: any) {
    return Exchange.findByIdAndUpdate(id, update);
  }

  async updateQuery(id: any, query: any) {
    return Exchange.updateMany(
      { _id: id },
      { $set: query },
      { multi: true, new: true }
    );
  }

  async queryMore(query: any) {
    return Exchange.find(query);
  }

  async deleteOne(query: any) {
    return Exchange.deleteOne(query);
  }

  async deleteById(id: any) {
    return Exchange.deleteOne({ _id: id });
  }

  async countQuery(query: any) {
    return Exchange.countDocuments(query);
  }
}

export const exchangeRepository = new ExchangeRepository();
