import React, { useEffect, useState } from 'react';
import AddContactModal from './components/AddContactModal';
import { v4 as uuidv4 } from 'uuid';
import { Contact, LabelsKey } from './utils/types';
import style from './styles/App.module.scss'
import { getContacts, saveToLocalStorage, sortContacts } from './utils/contactsUtils';
import ContactsList from './components/ContactsList';
import Headline from './components/Headline';
import { LABELS_KEYS } from './utils/constants';

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [editingId, setEditingId] = useState("");
  const [showForm, setShowForm] = useState<boolean>(false);
  const [sortField, setSortField] = useState<LabelsKey>();
  const [isAscending, setIsAscending] = useState<boolean | undefined>()
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const storageContacts = getContacts()
    setContacts(storageContacts)
    if (storageContacts.length === 0) {
      setShowForm(true);
    }
  }, [])

  const saveContact = (newContact: Contact) => {
    if (newContact.id) {
      const updatedContacts = contacts.map(contact =>
        contact.id === newContact.id ? newContact : contact
      );
      setContacts(updatedContacts);
      saveToLocalStorage(updatedContacts)
      setEditingId("");
    } else {
      const id = uuidv4()
      setContacts([...contacts, { ...newContact, id }]);
      saveToLocalStorage([...contacts, { ...newContact, id }])
    }
  };

  const editContact = (id: string) => {
    setEditingId(id);
  };

  const deleteContact = (id: string) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this contact?');
    if (confirmDelete) {
      setContacts(contacts.filter(contact => contact.id !== id));
    }
  };

  const handleSortFieldChange = (field: LabelsKey) => {
    setContacts(sortContacts(contacts, field, isAscending))
    setIsAscending(!isAscending)
    setSortField(field)
  }

  const filteredContacts = contacts.filter(contact =>
    Object.values(contact).some((contactField: string) =>
      contactField.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );


  return (
    <div className={style.container}>
      <div className={style.headerContainer}>
        <div className={style.header}>Contacts Book</div>
        <input
          className={style.searchInput}
          type="text"
          placeholder="Search contacts..."
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)}
        />
        <button className={style.addButton} onClick={() => setShowForm(true)}>Add a new contact</button>
      </div>
      <div className={style.separator} />

      <div className={style.headlines}>
        {LABELS_KEYS.map((label) => (
          <Headline
            key={label}
            label={label}
            currentSortField={sortField}
            onClick={() => handleSortFieldChange(label)}
            isAscending={isAscending}
          />
        ))}
        <div className={style.placeholder} />
      </div>

      {showForm && (
        <AddContactModal contactsEmpty={contacts.length === 0} setShowForm={setShowForm} saveContact={saveContact} />
      )}

      <ContactsList
        contacts={filteredContacts}
        editingId={editingId}
        editContact={editContact}
        saveContact={saveContact}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
