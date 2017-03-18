var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blanksSchema = new Schema({
  blankName: { type: String, required: true, unique: true },
  mfgName: { type: String, required: true },
  blankLength: { type: Number, required: true, default: 0, min: 0},
  blankMaterial: { type: String, required: true },
  guideSize: { type: Number, required: true },
  guideSpacing: { type: Number, required: true },
  handleLength: { type: Number, required: true },
  handleType: { type: String }
});

var Blanks = mongoose.model('Blanks', blanksSchema);

module.exports = Blanks;
