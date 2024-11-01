import React from 'react';
import './Header.scss';
import { useModal } from '../../../../Context/ModalContext';

const Header = () => {
    const { openModal } = useModal();

  return (
    <header className="header">
      <div className="header__title">My Note Keeper</div>
      <button className="header__button" onClick={() => openModal(null)}>Add Note</button>
    </header>
  );
}

export default Header;
