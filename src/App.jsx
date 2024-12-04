import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Header from "./Header";
import { RECENSIONI } from "./recensioni";
import PostDetail from "./PostDetail";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecensioni, setFilteredRecensioni] = useState(RECENSIONI);
  const handleRecensioniFiltered = (term) => {
    setSearchTerm(term);
    const filtered = RECENSIONI.filter((recensione) =>
      recensione.titoloLibro.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredRecensioni(filtered);
  };

  return (
    <Router>
      <div className="container-page">
        <div className="content-wrap">
          <Header onRecensioniFiltered={handleRecensioniFiltered} />
          <main>
            <Routes>
              <Route path="/recensione/:id" element={<PostDetail />} />
              <Route
                path="/"
                element={<Home filteredRecensioni={filteredRecensioni} />}
              />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </main>
        </div>
        <footer>&copy; Blog di Elisa</footer>
      </div>
    </Router>
  );
}

export default App;
