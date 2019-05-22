const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let RecordSchema = new Schema({
  name: {
    type: String
  },
  price: {
    type: String
  },
  cancer_type: {
    type: String
  },
  age_at_diagnosis: {
    type: String
  },
  cs_tumor_size: {
    type: String
  },
  gender: {
    type: String
  },
  year_of_birth: {
    type: String
  },
  data: {
    type: String
  }
});


module.exports = mongoose.model("record", RecordSchema, "records");
