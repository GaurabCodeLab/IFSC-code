import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const bankSchema = new Schema({
  BANK: {
    type: String,
    index: true,
  },
  IFSC: {
    type: String,
    unique: true,
  },
  BRANCH: String,
  CENTRE: String,
  DISTRICT: String,
  STATE: String,
  ADDRESS: String,
  CONTACT: String,
  IMPS: Boolean,
  RTGS: Boolean,
  CITY: String,
  ISO3166: String,
  NEFT: Boolean,
  MICR: {
    type: Number,
    unique: true,
  },
  UPI: Boolean,
  SWIFT: String,
});

const Bank = models.bank || model("bank", bankSchema);

export default Bank;
