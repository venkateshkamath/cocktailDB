import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ drink }) => {
  const { image, id, name, info, glass } = drink;
  console.log(id);
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        {/* now the dynamic link */}
        <Link className="btn btn-primary btn-details" to={`/cocktail/${id}`}>
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
