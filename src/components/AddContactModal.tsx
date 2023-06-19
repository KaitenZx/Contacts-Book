import React, { FC, useState } from 'react';
import { Contact } from '../utils/types';
import { EMPTY_CONTACT } from '../utils/constants';
import CountryDropdown from './CountryDropdown';
import InputField from './InputField';
import style from '../styles/AddContactModal.module.scss'

interface ContactFormProps {
  saveContact: (contact: Contact) => void;
  setShowForm: (state: boolean) => void;
  contactsEmpty: boolean
}

const AddContactModal: FC<ContactFormProps> = ({ saveContact, setShowForm, contactsEmpty }) => {
  const [contact, setContact] = useState<Contact>(EMPTY_CONTACT);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, key: string) => {
    setContact({ ...contact, [key]: event.target.value });
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    saveContact({ ...contact });
    setShowForm(false)
  }

  return (
    <div className={style.wrapper} >
      <form data-testid="addContactModal" className={style.form} onSubmit={handleSubmit} autoComplete="off">
        <div className={style.title}>{contactsEmpty ? "Add your first contact!" : "Add a new contact"}</div>
        <div className={style.closeButton} onClick={() => setShowForm(false)}>{'\u292B'}</div>
        <InputField
          testid='firstNameInput'
          label="First Name: *"
          value={contact.firstName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInputChange(event, 'firstName')}
        />
        <InputField
          testid='lastNameInput'
          label="Last Name: *"
          value={contact.lastName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInputChange(event, 'lastName')}
        />
        <InputField
          testid='emailInput'
          label='Email: *'
          type="email"
          value={contact.email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInputChange(event, 'email')}
        />
        <CountryDropdown
          value={contact.country}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => handleInputChange(event, 'country')}
        />
        <button className={style.saveButton} type='submit'>Save contact</button>
      </form>
    </div>
  );
}

export default AddContactModal;
