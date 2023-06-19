import React, { FC } from 'react';
import ContactRow from './ContactRow';
import { Contact } from '../utils/types';
import style from '../styles/ContactsList.module.scss'


export interface ContactsListProps {
  contacts: Contact[];
  editingId: string;
  editContact: (id: string) => void;
  saveContact: (contact: Contact) => void;
  deleteContact: (id: string) => void;
}

const ContactsList: FC<ContactsListProps> = ({ contacts, editingId, editContact, saveContact, deleteContact }) => {

  return (
    <div className={style.container}>
      {contacts.map((contact) => (
        <ContactRow
          key={contact.id}
          contactData={contact}
          isEditing={editingId === contact.id}
          onEdit={() => editContact(contact.id)}
          onSave={saveContact}
          onDelete={() => deleteContact(contact.id)}
        />
      ))}
    </div>
  );
};

export default ContactsList;
