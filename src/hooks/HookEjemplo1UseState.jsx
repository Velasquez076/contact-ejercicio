/**
 * Ejemplo de Hook useState()
 *
 * Crear un componente de tipo funcion y acceder a su estado
 * private a travez de un hook y, ademas, poder modificarlo
 */
import React, { useState } from "react";

const HookEjemplo1UseState = () => {
  const personaInicial = {
    nombre: "Julian",
    email: "julianvm@mail.com",
  };

  const [persona, setPersona] = useState(personaInicial);
  const [contador, setContador] = useState(0);

  const actualizarPersona = () => {
    setPersona({
      nombre: "Juan Jose",
      email: "juanjo@mail.com",
    });
  };

  const actualizarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h1>Nombre: {persona.nombre}</h1>
      <h2>Email: {persona.email}</h2>
      <hr />
      <h3>Contador: {contador}</h3>
      {/**Se crean los botones que ejecutan el cambio de estado */}
      <button onClick={actualizarPersona}>
        {" "}
        **Actualiza los datos de la persona ****
      </button>
      <button onClick={actualizarContador}>**Actualiza el contador ***</button>
    </div>
  );
};

export default HookEjemplo1UseState;
