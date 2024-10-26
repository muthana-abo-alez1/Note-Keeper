const noteRepository = require("../../repositories/note");

module.exports.searchNotes = async (req, res) => {
    try {
      const { query } = req.query;
  
      if (!query) {
        return res.status(400).json({ message: "Search query is required" });
      }
  
      const notes = await noteRepository.searchNotes(query);
      res.json(notes);
    } catch (error) {
      res.status(400).json({ message: "Error searching notes", error });
    }
  };