import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { ModalProvider } from "./Context/NotesModalContext";

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <Home />
      </ModalProvider>
    </div>
  );
}

export default App;
