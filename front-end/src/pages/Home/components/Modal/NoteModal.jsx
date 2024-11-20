import React, { useEffect, useState } from "react";
import "./Modal.scss";
import { useModal } from "../../../../Context/NotesModalContext";
import { addNote, updateNote } from "../../../../services/NotesService";

const NoteModal = ({ setRefreshNotes }) => {
  const { isModalOpen, closeModal, selectedNote } = useModal();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [creationDate, setCreationDate] = useState(null);

  useEffect(() => {
    if (isModalOpen) {
      if (selectedNote) {
        setTitle(selectedNote.title);
        setContent(selectedNote.content);
        setCreationDate(selectedNote.creationDate);
      } else {
        setTitle("");
        setContent("");
        setCreationDate(new Date());
      }
    }
  }, [isModalOpen, selectedNote]);

  const handleSave = async () => {
    const newNote = {
      title,
      content,
      creationDate: creationDate || new Date(),
      lastUpdatedDate: new Date(),
    };

    try {
      if (selectedNote) {
        await updateNote(selectedNote._id, newNote);
        console.log("Note updated:", newNote);
      } else {
        await addNote(newNote);
        console.log("Note added:", newNote);
      }
      setRefreshNotes(true);
    } catch (error) {
      console.error("Error saving note:", error);
    } finally {
      closeModal();
    }
  };

  if (!isModalOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <h2>{selectedNote ? "Edit Note" : "Add Note"}</h2>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button onClick={closeModal} className="modal-cancel-btn">
          Cancel
        </button>
        <button onClick={handleSave} className="modal-confirm-btn">
          {selectedNote ? "Update" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default NoteModal;
