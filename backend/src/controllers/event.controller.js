import Event from "../models/event.model.js";

export const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    // Find event by id and delete
    const event = await Event.findByIdAndDelete(id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getEventById = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the event by id
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    // Fetch all events from the database
    const events = await Event.find();

    if (!events || events.length === 0) {
      return res.status(404).json({ message: 'No events found' });
    }

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const joinEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    if (!event.participants.includes(req.user.id)) {
      event.participants.push(req.user.id);
      await event.save();
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
