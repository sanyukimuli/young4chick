const mongoose = require('mongoose');


const requestSchema = new mongoose.Schema({
  chickType: { type: String, required: true, enum: ['Broiler', 'Layer'] },
  farmerStatus: {
    type: String,
    required: true,
    enum: ['Starter Farmer', 'Returning Farmer']
  },
  chickCategory: { type: String, required: true, enum: ['Exotic', 'Local'] },
  chickQuantity: { type: Number, required: true },
  feedAmount: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('Request', requestSchema);

