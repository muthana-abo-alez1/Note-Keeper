const noteRepository = require("../../repositories/note");

exports.deleteNote = async (req, res) => {
    try {
      const deletedNote = await noteRepository.deleteNoteById(req.params.id);
      if (!deletedNote) {
        return res.status(404).json({ message: "Note not found" });
      }
      res.json({ message: "Note deleted successfully" });
    } catch (error) {
      res.status(400).json({ message: "Error deleting note", error });
    }
  };
  