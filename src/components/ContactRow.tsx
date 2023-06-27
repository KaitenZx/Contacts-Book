import React, { FC, useState } from "react";
import { Contact } from "../utils/types";
import CountryDropdown from "./CountryDropdown";
import InputField from "./InputField";
import style from "../styles/ContactRow.module.scss"

const DeleteButton: FC<{ onDelete: () => void }> = ({ onDelete }) => {
  return (
    <button
      className={`${style.button} ${style.deleteButton}`}
      onClick={onDelete}
      data-testid="deleteButton"
    >Delete</button>
  )
}

interface ContactItemProps {
  contactData: Contact;
  isEditing: boolean;
  onEdit: () => void;
  onSave: (contact: Contact) => void;
  onDelete: () => void;
}

const ContactRow: FC<ContactItemProps> = ({ contactData, isEditing, onEdit, onSave, onDelete }) => {
  const [contact, setContact] = useState<Contact>(contactData);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, key: string) => {
    setContact({ ...contact, [key]: event.target.value });
  }

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave(contact);
  };

  return (
    <>
      {isEditing ? (
        <form data-testid="contactRow" className={style.container} onSubmit={handleFormSubmit}>
          <div className={style.name}>
            <InputField
              testid="firstNameInput"
              value={contact.firstName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInputChange(event, 'firstName')}
            />
          </div>
          <div className={style.name}>
            <InputField
              testid="lastNameInput"
              value={contact.lastName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInputChange(event, 'lastName')}
            />
          </div>
          <div className={style.email}>
            <InputField
              testid='emailInput'
              type="email"
              value={contact.email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInputChange(event, 'email')}
            />
          </div>
          <div className={style.country}>
            <CountryDropdown
              isEditing
              value={contact.country}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => handleInputChange(event, 'country')}
            />
          </div>
          <div className={style.buttonsContainer}>
            <button type="submit" className={style.button}>Save</button>
            <DeleteButton onDelete={onDelete} />
          </div>
        </form>
      ) : (
        <div data-testid="contactRow" className={style.container}>
          <div data-testid="firstNameDiv" className={style.name}>{contact.firstName}</div>
          <div data-testid="lastNameDiv" className={style.name}>{contact.lastName}</div>
          <div data-testid="emailDiv" title={contact.email} className={style.email}>{contact.email}</div>
          <div data-testid="countryDiv" title={contact.country} className={style.country}>{contact.country}</div>
          <div className={style.buttonsContainer}>
            <button className={style.button} onClick={onEdit}>Edit</button>
            <DeleteButton onDelete={onDelete} />
          </div>
        </div>
      )}
    </>
  );
};



export default ContactRow;
