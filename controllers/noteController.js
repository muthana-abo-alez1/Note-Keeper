const noteRepository = require("../repositories/noteRepository");

exports.createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await noteRepository.createNote(title, content);
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ message: "Error creating note", error });
  }
};

exports.getNotes = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const notes = await noteRepository.getAllNotes(page, limit);

    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notes", error });
  }
};

exports.updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const existingNote = await noteRepository.getNoteById(req.params.id);

    if (!existingNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    if (existingNote.title === title && existingNote.content === content) {
      return res
        .status(200)
        .json({
          message:
            "No changes detected. The title and content remain the same.",
        });
    }

    const updatedNote = await noteRepository.updateNoteById(
      req.params.id,
      title,
      content
    );
    res.json(updatedNote);
  } catch (error) {
    res.status(400).json({ message: "Error updating note", error });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const deletedNote = await noteRepository.deleteNoteById(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting note", error });
  }
};

exports.getNoteById = async (req, res) => {
  try {
    const note = await noteRepository.getNoteById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json(note);
  } catch (error) {
    res.status(500).json({ message: "Error fetching note", error });
  }
};

exports.searchNotes = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ message: "Search query is required" });
    }

    const notes = await noteRepository.searchNotes(query);
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: "Error searching notes", error });
  }
};
