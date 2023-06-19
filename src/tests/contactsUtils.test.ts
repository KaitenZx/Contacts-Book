import { sortContacts } from '../utils/contactsUtils';
import { Contact, } from '../utils/types';

const MOCK_CONTACTS: Contact[] = [
    { id: '1', firstName: 'John', lastName: 'Doe', email: 'john@example.com', country: 'USA' },
    { id: '2', firstName: 'Alice', lastName: 'Smith', email: 'alice@example.com', country: 'Canada' },
    { id: '3', firstName: 'Bob', lastName: 'Johnson', email: 'bob@example.com', country: 'Australia' },
];

describe('sortContacts', () => {
    it('returns an empty array when sortField is undefined', () => {
        const sortedContacts = sortContacts(MOCK_CONTACTS, undefined, true);

        expect(sortedContacts).toEqual([]);
    });
    it('sorts contacts by the specified field in ascending order', () => {
        const sortedContacts = sortContacts(MOCK_CONTACTS, 'firstName', true);
        const expectedOrder = ['Alice', 'Bob', 'John'];

        const actualOrder = sortedContacts.map((contact) => contact.firstName);
        expect(actualOrder).toEqual(expectedOrder);
    });

    it('sorts contacts by the specified field in descending order', () => {
        const sortedContacts = sortContacts(MOCK_CONTACTS, 'lastName', false);
        const expectedOrder = ['Smith', 'Johnson', 'Doe'];

        const actualOrder = sortedContacts.map((contact) => contact.lastName);
        expect(actualOrder).toEqual(expectedOrder);
    });
});
