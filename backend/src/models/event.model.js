import mongoose from 'mongoose';

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

const Event = mongoose.model('Event', eventSchema);
export default Event;