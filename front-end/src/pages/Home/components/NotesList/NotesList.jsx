import React, { useEffect, useState } from "react";
import "./NotesList.scss";
import NoteCard from "../NoteCard/NoteCard";
import { useModal } from "../../../../Context/ModalContext";
import { deleteNote } from "../../../../services/NotesService";

const NotesList = ({ notes, setRefreshNotes }) => {
  const { openModal } = useModal();
  const handleNoteDelete = async (id) => {
    try {
      await deleteNote(id);
      setRefreshNotes(true);
    } catch (error) {
      console.error(`Error deleting note`, error);
    }
  };

  const handleNoteEdit = (note) => {
    openModal(note);
  };

  return (
    <div className="container">
      {notes.length === 0 ? (
        <div className="notes-list__empty">No notes available.</div>
      ) : (
        <div className="notes-list">
          {notes.map((note) => (
            <NoteCard
              key={note._id}
              title={note.title}
              content={note.content}
              creationDate={note.createdAt}
              onDelete={() => handleNoteDelete(note._id)}
              onEdit={() => handleNoteEdit(note)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesList;
