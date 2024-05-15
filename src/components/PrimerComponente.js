import React, { useState } from "react";
import imagen from "./Imagenes/AimGYM Logo.png";

export const PrimerComponente = () => {
  return (
    <div>
      <h1 className="Logo">
        <img src={imagen} />
      </h1>
    </div>
  );
};
