const mongoose = require('mongoose');

const sportSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true 
},
  description: { 
    type: String 
},
  createdAt: { 
    type: Date, 
    default: Date.now 
}
});


module.exports = mongoose.model('Sport', sportSchema);
