import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, screen } from '@testing-library/react';
import AddContactModal from '../components/AddContactModal';

const mockSaveContact = jest.fn();
const mockSetShowForm = jest.fn();

const mockProps = {
  saveContact: mockSaveContact,
  setShowForm: mockSetShowForm,
  contactsEmpty: true
}

describe('AddContactModal', () => {
  it('show correct label if contacts are empty', () => {
    render(<AddContactModal {...mockProps} />);

    expect(screen.getByText('Add your first contact!')).toBeInTheDocument();
  });

  it('show correct label if contacts are not empty', () => {
    render(<AddContactModal {...mockProps} contactsEmpty={false} />);

    expect(screen.getByText('Add a new contact')).toBeInTheDocument();
  });


  it('calls saveContact when the form is submitted', () => {
    render(<AddContactModal {...mockProps} />);

    const firstName = screen.getByTestId('firstNameInput');
    const lastName = screen.getByTestId('lastNameInput');
    const email = screen.getByTestId('emailInput');
    const country = screen.getByTestId('countrySelect');

    fireEvent.change(firstName, { target: { value: 'John' } });
    fireEvent.change(lastName, { target: { value: 'Johnson' } });
    fireEvent.change(email, { target: { value: 'jon@mail.com' } });
    fireEvent.change(country, { target: { value: 'Andorra' } });

    fireEvent.submit(screen.getByTestId('addContactModal'));
    expect(mockSaveContact).toHaveBeenCalledTimes(1);
  });
});
