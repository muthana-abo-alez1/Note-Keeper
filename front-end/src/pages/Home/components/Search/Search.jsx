// Search.js
import React, { useState, useEffect } from 'react';
import './Search.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({ onSearch ,setIsSearching}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery); 
    }, 500); 

    return () => {
      clearTimeout(handler); 
    };
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery) {
      onSearch(debouncedQuery);
    }else if(debouncedQuery==""){
      setIsSearching(false)
    }
  }, [debouncedQuery, onSearch]);

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
