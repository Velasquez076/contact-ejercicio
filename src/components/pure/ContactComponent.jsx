import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../model/Contact.class";

export const ContactComponent = ({ contact }) => {
  return (
    <div>
      <h2>Nombre Contacto: {contact.nombre}</h2>
      <h2>Apellido Contacto: {contact.apellido}</h2>
      <h2>Email Contacto: {contact.email}</h2>
      <h2>
        Conectado:{" "}
        {contact.conectado ? "Contacto En Línea" : "Contacto No Disponible"}
      </h2>
    </div>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};