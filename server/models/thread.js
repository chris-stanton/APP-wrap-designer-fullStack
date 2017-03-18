var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var threadSchema = new Schema({
  id: { type: Number, required: true, default: 0, min: 0},
  color: { type: String, required: true, unique: true },
});

var Thread = mongoose.model('Thread', threadSchema);

module.exports = Thread;
