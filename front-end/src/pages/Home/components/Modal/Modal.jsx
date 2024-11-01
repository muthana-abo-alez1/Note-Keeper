import React from 'react';
import './Modal.scss'; 

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete this note?</p>
        <button onClick={onConfirm} className="modal-confirm-btn">Yes</button>
        <button onClick={onClose} className="modal-cancel-btn">No</button>
      </div>
    </div>
  );
};

export default Modal;
