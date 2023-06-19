import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { getContacts } from '../utils/contactsUtils';
import App from '../App';

const MOCK_CONTACT = {
  id: '166589c7',
  firstName: 'Joe',
  lastName: 'Doe',
  email: 'xhan@gmail.com',
  country: 'Anguilla',
};

jest.mock('../utils/contactsUtils');

describe('App', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('shows the AddContactModal when addButton is clicked', () => {
    (getContacts as jest.Mock).mockReturnValueOnce([MOCK_CONTACT]);

    render(<App />);
    fireEvent.click(screen.getByText('Add a new contact'));
    expect(screen.getByTestId('addContactModal')).toBeInTheDocument();
  });

  it('shows the AddContactModal if the contacts list is empty when app is started', () => {
    (getContacts as jest.Mock).mockReturnValueOnce([]);
    render(<App />);
    expect(screen.getByTestId('addContactModal')).toBeInTheDocument();
  });
});