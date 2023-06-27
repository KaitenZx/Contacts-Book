import { Contact, LabelsKey } from "./types";

export const getContacts = (): Contact[] => {
  const contacts = localStorage.getItem('contacts');
  return contacts ? JSON.parse(contacts) : [];
};

export const saveToLocalStorage = (contacts: Contact[]): void => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};


export const sortContacts = (contacts: Contact[], sortField: LabelsKey | undefined, isAscending: boolean | undefined): Contact[] => {

  if (sortField === undefined) return [] // ????????????

  const sortedContacts = [...contacts].sort((a, b) => {
    const valueA = a[sortField].toLowerCase();
    const valueB = b[sortField].toLowerCase();

    return isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
  });

  return sortedContacts;
};