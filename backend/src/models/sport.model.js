import mongoose from 'mongoose';

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


const Sport = mongoose.model('Sport', sportSchema);
export default Sport;