import React from "react";
import { Link } from "react-router-dom";

function Post(props) {
  const { id, titoloLibro, immagineLibro, recensione, data } = props.data;

  const maxLength = 50;
  return (
    <div className="card">
      <img src={immagineLibro} />
      <div>
        <h3>{titoloLibro}</h3>
        <p>
          {recensione.length > maxLength
            ? `${recensione.substring(0, maxLength)}...`
            : recensione}
        </p>
        <p>{data}</p>
        <Link className="link" to={`/recensione/${id}`}>
          Leggi di più
        </Link>
      </div>
    </div>
  );
}

export default Post;
