const express = require('express');
const router = express.Router();
const multer = require('multer');
const Event = require('../models/Event');

// Configuration pour multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Route pour créer un événement
router.post('/', upload.single('image'), async (req, res) => {
  const { userId, title, description, date } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const newEvent = new Event({ userId, title, description, date, image });
    await newEvent.save();
    res.status(201).json({ msg: 'Event created successfully', event: newEvent });
  } catch (err) {
    console.error('Error creating event:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Route pour récupérer tous les événements
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 }); 
    res.status(200).json(events);
  } catch (err) {
    console.error('Error fetching events:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
