import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>Oops!, it is a dead end</h1>

        <button>
          {/* We have {Link} imported from react-router-dom */}
          <Link className="btn btn-primary" to="/">
            Back Home
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Error;
