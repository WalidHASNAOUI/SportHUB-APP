const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { 
    type: String, 
    required: true 
},
  creator: {            // User who commented
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
}, 
  publication: {        // Associated publication
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Publication', 
    required: true 
}, 
  createdAt: { 
    type: Date, 
    default: Date.now 
}
});


module.exports = mongoose.model('Comment', commentSchema);
