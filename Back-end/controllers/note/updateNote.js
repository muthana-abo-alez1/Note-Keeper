const noteRepository = require("../../repositories/note");

module.exports.updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;

    const existingNote = await noteRepository.getNoteById(id);

    if (!existingNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    if (existingNote.title === title && existingNote.content === content) {
      return res.status(200).json({
        message: "No changes detected. The title and content remain the same.",
        note: existingNote,
      });
    }
    const updatedNote = await noteRepository.updateNoteById(id, title, content);
    res.json(updatedNote);
  } catch (error) {
    res.status(400).json({ message: "Error updating note", error });
  }
};
