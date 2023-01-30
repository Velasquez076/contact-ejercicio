import React from "react";
import { Contact } from "../../model/Contact.class";
import { ContactComponent } from "../pure/ContactComponent";

export const ContactListComponent = () => {
  const contacto = new Contact("Julian", "Velasquez", "jvm@mail.com", true);
  return (
    <div>
      <h1>List of contact: </h1>
      <ContactComponent contact={contacto} />
    </div>
  );
};
