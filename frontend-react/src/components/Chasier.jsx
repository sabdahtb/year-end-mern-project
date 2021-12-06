import React from "react";

export default function Chasier({ menu }) {
  return (
    <div className="components">
      <h2>Halaman Chasier</h2>
      {menu &&
        menu
          .filter((men) => men.menu !== undefined)
          .map((filmen) => (
            <div className="mamn" key={filmen._id}>
              <h2>{filmen.menu}</h2>
            </div>
          ))}
    </div>
  );
}
