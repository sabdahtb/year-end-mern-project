import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="Nav">
      <div className="kiri">
        <h2>React Kafe</h2>
      </div>
      <div className="kanan">
        <ul>
          <li>
            <Link to="/">Cashier</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
          <li>
            <Link to="/edit">Edit</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
