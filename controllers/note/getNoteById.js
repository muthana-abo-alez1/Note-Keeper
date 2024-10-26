const noteRepository = require("../../repositories/note");

module.exports.getNoteById = async (req, res) => {
    try {
      const note = await noteRepository.getNoteById(req.params.id);
  
      if (!note) {
        return res.status(404).json({ message: "Note not found" });
      }
  
      res.json(note);
    } catch (error) {
      res.status(400).json({ message: "Error fetching note", error });
    }
  };