var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var threadSchema = new Schema({
  mfgName: {type: String, required: true},
  id: { type: Number, required: true, default: 0, min: 0},
  color: { type: String, required: true, unique: true }
});

var Threads = mongoose.model('Threads', threadSchema);

module.exports = Threads;
