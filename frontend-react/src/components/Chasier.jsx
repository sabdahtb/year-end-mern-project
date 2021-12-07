import React from "react";

export default function Chasier({ kafes, fails, loads }) {
  return (
    <div className="components">
      <h2>Halaman Chasier</h2>

      {loads && (
        <div className="loading">
          <h2>Loading...</h2>
        </div>
      )}

      {fails && (
        <div className="fail">
          <h2>{fails}</h2>
        </div>
      )}

      {kafes &&
        kafes
          .filter((kafe) => kafe.menu !== undefined)
          .map((menus, index) => (
            <div className="mamn" key={index}>
              <h2>{menus.menu}</h2>
            </div>
          ))}
    </div>
  );
}
