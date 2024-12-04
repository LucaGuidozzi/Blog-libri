import React from "react";
import Post from "./post";
import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";

function Home({ filteredRecensioni }) {
  return (
    <div>
      <div>
        <img className="img-blog" src={blog2} />
      </div>

      <div>
        <h1 className="info-h1">Benvenuto nel mio blog letterario!</h1>
        <h3>Qui sotto le mie ultime recensioni...buona lettura!</h3>
      </div>
      <div className="card-container">
        {filteredRecensioni.length === 0 ? (
          <p className="info-p">Spiacente...nessun libro trovato!</p>
        ) : (
          filteredRecensioni.map((recensione) => (
            <Post key={recensione.id} data={recensione} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
