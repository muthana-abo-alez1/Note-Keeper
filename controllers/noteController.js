
module.exports = {
  createNote: require("./note/createNote").createNote,
  getNotes: require("./note/getNotes").getNotes,
  getNoteById: require("./note/getNoteById").getNoteById,
  updateNote: require("./note/updateNote").updateNote,
  deleteNote: require("./note/deleteNote").deleteNote,
  searchNotes: require("./note/searchNotes").searchNotes,
};

