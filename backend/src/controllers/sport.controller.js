import Sport from "../models/sport.model.js";

export const getAllSports = async (req, res) => {
  try {
    // Retrieve all sports from the database
    const sports = await Sport.find();

    if (sports.length === 0) {
      return res.status(404).json({ message: 'No sports found' });
    }

    res.status(200).json(sports);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const createSport = async (req, res) => {
  try {
    const sport = await Sport.create(req.body);
    res.status(201).json(sport);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
