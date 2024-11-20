import React, { useState, useEffect } from 'react';
import './Search.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(searchQuery); 
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery, onSearch]);

  return (
    <div className="search-container">
      <FontAwesomeIcon icon={faSearch} className='search-icon' />
      <input 
        type="text" 
        placeholder="Search" 
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
    </div>
  );
};

export default Search;
