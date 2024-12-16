import Like from "../models/like.model.js";
import Publication from "../models/publication.model.js";

export const toggleLike = async (req, res) => {
  try {
    const { userId, publicationId } = req.body;
    const like = await Like.findOne({ user: userId, publication: publicationId });

    if (like) {
      await like.remove();
      return res.status(200).json({ message: "Like removed" });
    } else {
      const newLike = await Like.create({ user: userId, publication: publicationId });
      return res.status(201).json(newLike);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const likePublication = async (req, res) => {
  const { publicationId } = req.params;
  const { userId } = req.body; // Assuming you're sending the user ID in the request body

  try {
    // Check if the publication exists
    const publication = await Publication.findById(publicationId);
    if (!publication) {
      return res.status(404).json({ message: 'Publication not found' });
    }

    // Check if the user has already liked this publication
    const existingLike = await Like.findOne({ user: userId, publication: publicationId });
    if (existingLike) {
      return res.status(400).json({ message: 'You already liked this publication' });
    }

    // Create a new like
    const newLike = new Like({ user: userId, publication: publicationId });
    await newLike.save();

    // Add the like to the publication
    publication.likes.push(newLike._id);
    await publication.save();

    res.status(201).json({ message: 'Liked the publication successfully', like: newLike });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const unlikePublication = async (req, res) => {
  const { publicationId } = req.params;
  const { userId } = req.body;

  try {
    // Find the like to be removed
    const like = await Like.findOne({ user: userId, publication: publicationId });
    if (!like) {
      return res.status(404).json({ message: 'Like not found' });
    }

    // Remove the like from the database
    await like.remove();

    // Remove the like reference from the publication
    const publication = await Publication.findById(publicationId);
    publication.likes = publication.likes.filter(likeId => likeId.toString() !== like._id.toString());
    await publication.save();

    res.status(200).json({ message: 'Unliked the publication successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
