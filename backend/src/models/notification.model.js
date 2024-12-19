import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  recipient: {              // Who receives the notification
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
}, 
  message: { 
    type: String, 
    required: true 
},
  isRead: {                 // Notification status
    type: Boolean, 
    default: false }, 
  createdAt: { 
    type: Date, 
    default: Date.now 
}
});


const Notification = mongoose.model('Notification', notificationSchema);
export default Notification;