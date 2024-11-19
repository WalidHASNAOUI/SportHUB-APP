const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
},
  description: { 
    type: String 
},
  date: { 
    type: Date, 
    required: true 
},
  location: { 
    type: String 
},
  organizer: {          // Event creator
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
}, 
  participants: [       // Users who joined
    { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    }
], 
  createdAt: { 
    type: Date, 
    default: Date.now 
}
});


module.exports = mongoose.model('Event', eventSchema);
