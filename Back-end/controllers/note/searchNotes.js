const noteRepository = require("../../repositories/note");

module.exports.searchNotes = async (req, res) => {
    try {
      const { query , page = 1, limit = 10  } = req.query;
  
      if (!query) {
        return res.status(400).json({ message: "Search query is required" });
      }
  
      const notes = await noteRepository.searchNotes(query,page, limit);
      res.json(notes);
    } catch (error) {
      res.status(400).json({ message: "Error searching notes", error });
    }
  };

  