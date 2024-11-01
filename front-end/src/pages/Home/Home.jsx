import React from "react";
import "./Home.scss";
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import NotesList from './components/NotesList/NotesList';
import NoteModal from './components/Modal/NoteModal';
import useNotes from "../../hooks/useNotes";
import { NOTES_PER_PAGE } from "../../constants/GeneralsConstants";
import Pagination from "./components/Pagination/Pagination";

const Home = () => {
  const {
    notes,
    currentPage,
    handleNextPage,
    handlePreviousPage,
    handleSearch,
    setRefreshNotes,
    setIsSearching,
    isNextButtonDisabled,
  } = useNotes(NOTES_PER_PAGE);

  return (
    <div className="home">
      <Header />
      <Search onSearch={handleSearch} setIsSearching={setIsSearching} />
      <NotesList notes={notes} setRefreshNotes={setRefreshNotes} />
      <NoteModal setRefreshNotes={setRefreshNotes} />
      <Pagination
        currentPage={currentPage}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
        isNextDisabled={isNextButtonDisabled}
      />
    </div>
  );
};

export default Home;
