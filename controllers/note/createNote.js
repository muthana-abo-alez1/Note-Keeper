const noteRepository = require("../../repositories/note");

exports.createNote = async (req, res) => {
    try {
      const { title, content } = req.body;
      const note = await noteRepository.createNote(title, content);
      res.status(201).json(note);
    } catch (error) {
      res.status(400).json({ message: "Error creating note", error });
    }
};