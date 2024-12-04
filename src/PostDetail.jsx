import React from "react";
import { useParams } from "react-router-dom";
import { RECENSIONI } from "./recensioni";

function PostDetail() {
  const { id } = useParams();

  const recensione = RECENSIONI.find((r) => r.id === parseInt(id));

  return (
    <div className="container-details">
      <div className="container-img">
        {" "}
        <img src={recensione.immagineLibro} /> <h3>{recensione.titoloLibro}</h3>
      </div>

      <div>
        <p>{recensione.recensione}</p>
        <p>{recensione.data}</p>
      </div>
    </div>
  );
}

export default PostDetail;
