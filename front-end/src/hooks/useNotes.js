import { useEffect, useState } from "react";
import { getNotes, searchNotes } from "../services/NotesService";

const useNotes = (initialLimit = 12) => {
  const [notes, setNotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [refreshNotes, setRefreshNotes] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const data = searchQuery
          ? await searchNotes(searchQuery, currentPage, initialLimit)
          : await getNotes(currentPage, initialLimit);

        setNotes(data || []);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
    setRefreshNotes(false);
  }, [refreshNotes, currentPage, searchQuery, initialLimit]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const isNextButtonDisabled = notes.length < initialLimit;

  return {
    notes,
    currentPage,
    handleNextPage,
    handlePreviousPage,
    handleSearch,
    setRefreshNotes,
    isNextButtonDisabled,
  };
};

export default useNotes;
