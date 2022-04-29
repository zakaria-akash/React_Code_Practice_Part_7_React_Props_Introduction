import React from "react";
import Card from "./Card";
import Contacts from "../Contacts.js";

function viewContacts(Contacts) {
  return (
    <Card
      key={Contacts.id}
      id={Contacts.id}
      name={Contacts.name}
      img={Contacts.imgURL}
      tel={Contacts.phone}
      email={Contacts.email}
    />
  );
}

function Contact() {
  return <div>{Contacts.map(viewContacts)}</div>;
}

export default Contact;
