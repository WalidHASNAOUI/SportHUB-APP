import mongoose from 'mongoose';

const publicationSchema = new mongoose.Schema({
  content: { 
    type: String, 
    required: true 
},
  creator: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
},
  likes: [              // Array of Like references
    { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Like' 
    }
], 
  comments: [           // Array of Comment references
    { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Comment' 
    }
], 
  createdAt: {
     type: Date, 
     default: Date.now 
    }
});

const Publication = mongoose.model('Publication', publicationSchema);
export default Publication;