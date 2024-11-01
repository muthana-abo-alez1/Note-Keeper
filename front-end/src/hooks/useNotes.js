import { useEffect, useState } from "react";
import { getNotes, searchNotes } from "../services/NotesService"; 

const useNotes = (initialLimit = 12) => {
  const [notes, setNotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(initialLimit);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [refreshNotes, setRefreshNotes] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const data = isSearching
          ? await searchNotes(searchQuery, currentPage, limit)
          : await getNotes(currentPage, limit);

        setNotes(data || []);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
    setRefreshNotes(false);
  }, [refreshNotes, currentPage, limit, searchQuery, isSearching]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    setIsSearching(true);
  };

  const isNextButtonDisabled = notes.length < limit;

  return {
    notes,
    currentPage,
    handleNextPage,
    handlePreviousPage,
    handleSearch,
    setRefreshNotes,
    setIsSearching,
    isNextButtonDisabled,
  };
};

export default useNotes;
