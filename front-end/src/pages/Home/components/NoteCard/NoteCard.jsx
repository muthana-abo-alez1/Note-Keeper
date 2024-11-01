import React, { useState } from 'react';
import './NoteCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal/Modal';
import { formatDate } from '../../../../shared/formatters/DateFormatter';

const NoteCard = ({ title, content, creationDate, onDelete, onEdit ,lastUpdatedDate}) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDeleteClick = (e) => {
    e.stopPropagation(); 
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    onDelete();
    setShowConfirm(false);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
  };

  const handleCardClick = () => {
    if (!showConfirm) {
      onEdit(); 
    }
  };

  return (
    <div className="note-card" onClick={handleCardClick}>
      <h3 className="note-card__title">{title}</h3>
      <p className="note-card__content">{content}</p>
      <p className="note-card__date">Created on: {formatDate(creationDate)}</p>
      {lastUpdatedDate && (
        <p className="note-card__date">Last updated: {lastUpdatedDate.toDateString()}</p>
      )}
      <FontAwesomeIcon 
        icon={faTrash} 
        className="note-card__trash-icon" 
        onClick={handleDeleteClick} 
      />

      <Modal
        isOpen={showConfirm} 
        onClose={cancelDelete} 
        onConfirm={confirmDelete} 
      />
    </div>
  );
};

export default NoteCard;
