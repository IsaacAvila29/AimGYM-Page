import React, { useState } from "react";

export const ContenidoDinamico = () => {
  const [contenido, setContenido] = useState(
    "AimGYM es un juego de entrenamiento de puntería diseñado para ayudar a los usuarios a mejorar sus habilidades. Ofrece múltiples modalidades que son extremadamente beneficiosas."
  );
  let palabras = [
    "AimGYM es un juego de entrenamiento de puntería diseñado para ayudar a los usuarios a mejorar sus habilidades. Ofrece múltiples modalidades que son extremadamente beneficiosas.",
    "Se planea el lanzamiento de este juego próximamente en el portal de itch.io",
    "AimGYM es un software creado exclusivamente para entretenimiento y se ofrece de manera gratuita. No se busca lucro con su distribución, ni se generan ingresos a partir de él. Este juego fue desarrollado para proporcionar diversión y entretenimiento a sus usuarios.",
    "Desarrollado por MurderCrack29.",
  ];
  return (
    <div>
      <div className="Botones">
        <button onClick={() => setContenido(palabras[0])}>Juego</button>
        <button onClick={() => setContenido(palabras[1])}>Descarga</button>
        <button onClick={() => setContenido(palabras[2])}>Acerca de</button>
        <button onClick={() => setContenido(palabras[3])}>Contacto</button>
      </div>

      <p className="TextoDinamico">{contenido}</p>
    </div>
  );
};
