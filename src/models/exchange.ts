import mongoose, { Date } from "mongoose";
const Schema = mongoose.Schema;

//an interface the descibes the properties needed to create a Exchange
interface ExchangeAttr {
  name: string;
  URL: string;
  pairDelimiter: string;
  isUpperCase: boolean;
  isActive: boolean;
}

//an interface that describes the properties that a Exchange model has
interface ExchangeModel extends mongoose.Model<ExchangeDoc> {
  build(attrs: ExchangeAttr): ExchangeDoc;
}

//an interface that describes the properties a Exchange document has
interface ExchangeDoc extends mongoose.Document {

  name: string;
  URL: string;

  pairDelimiter: string;
  isUpperCase: boolean;

  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;

}

const exchangeSchema = new Schema(
  {
    name: {
      type: String,
      default: null
    },
    URL: {
      type: String,
      default: null
    },
    pairDelimiter: {
      type: String,
      default: null
    },
    isUpperCase: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

exchangeSchema.statics.build = (attrs: ExchangeAttr) => {
  return new Exchange(attrs);
};

const Exchange = mongoose.model<ExchangeDoc, ExchangeModel>("Exchange", exchangeSchema);
export { Exchange };
