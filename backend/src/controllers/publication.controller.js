import Publication from "../models/publication.model.js";

export const createPublication = async (req, res) => {
  try {
    const publication = await Publication.create(req.body);
    res.status(201).json(publication);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deletePublication = async (req, res) => {
    const { publicationId } = req.params;
  
    try {
      // Find and delete the publication by its ID
      const publication = await Publication.findByIdAndDelete(publicationId);
  
      if (!publication) {
        return res.status(404).json({ message: 'Publication not found' });
      }
  
      res.status(200).json({ message: 'Publication deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };

  export const getPublicationById = async (req, res) => {
    const { publicationId } = req.params;
  
    try {
      // Find the publication by its ID
      const publication = await Publication.findById(publicationId)
        .populate('creator', 'username')  // Populate creator details
        .populate('likes')               // Populate likes details
        .populate('comments');           // Populate comments details
  
      if (!publication) {
        return res.status(404).json({ message: 'Publication not found' });
      }
  
      res.status(200).json(publication);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };

  export const getAllPublications = async (req, res) => {
    try {
      // Find all publications in the database
      const publications = await Publication.find()
        .populate('creator', 'username')  // Populate creator details
        .populate('likes')               // Populate likes details
        .populate('comments');           // Populate comments details
  
      res.status(200).json(publications);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
