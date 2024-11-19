const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  user: {           // User who liked
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', required: true 
}, 
  publication: {   // Associated publication
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Publication', 
    required: true 
}, 
  createdAt: { 
    type: Date, 
    default: Date.now 
}
});


module.exports = mongoose.model('Like', likeSchema);
