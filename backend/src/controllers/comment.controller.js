import Comment from "../models/comment.model.js";

export const createComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCommentsByPublication = async (req, res) => {
  try {
    const comments = await Comment.find({ publication: req.params.publicationId })
      .populate("creator", "username")
      .sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
