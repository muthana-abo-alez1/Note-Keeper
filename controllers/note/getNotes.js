const noteRepository = require("../../repositories/note");

module.exports.getNotes = async (req, res) => {
    try {
      const { page = 1, limit = 10 } = req.query;
      const notes = await noteRepository.getAllNotes(page, limit);
  
      res.json(notes);
    } catch (error) {
      res.status(400).json({ message: "Error fetching notes", error });
    }
  };