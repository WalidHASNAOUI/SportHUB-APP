import Notification from "../models/notification.model.js";

export const getUserNotifications = async (req, res) => {
  const { userId } = req.params;

  try {
    // Find notifications for the user, sorted by creation date (latest first)
    const notifications = await Notification.find({ recipient: userId })
      .sort({ createdAt: -1 });

    if (!notifications.length) {
      return res.status(404).json({ message: 'No notifications found for this user' });
    }

    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const markNotificationAsRead = async (req, res) => {
  const { notificationId } = req.params;

  try {
    // Find the notification by ID and mark it as read
    const notification = await Notification.findByIdAndUpdate(
      notificationId,
      { isRead: true },
      { new: true } // Return the updated notification
    );

    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }

    res.status(200).json(notification);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
