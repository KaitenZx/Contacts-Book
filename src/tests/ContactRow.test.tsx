import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactRow from '../components/ContactRow';
import '@testing-library/jest-dom/extend-expect'

const mockOnEdit = jest.fn()

const mockContact = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  country: 'Andorra'
};

const mockProps = {
  contactData: mockContact,
  isEditing: false,
  onEdit: mockOnEdit,
  onSave: jest.fn(),
  onDelete: jest.fn(),
}

describe('ContactRow', () => {
  it('renders the contact data correctly in a view mode', () => {
    render(<ContactRow {...mockProps} />);

    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Doe')).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
    expect(screen.getByText('Andorra')).toBeInTheDocument();
  });

  it('shows an editing mode when isEditing is true', async () => {
    render(<ContactRow {...mockProps} isEditing={true} />);

    expect(screen.getByTestId('emailInput')).toBeInTheDocument();
    expect(screen.getByTestId('firstNameInput')).toBeInTheDocument();
    expect(screen.getByTestId('lastNameInput')).toBeInTheDocument();
    expect(screen.getByTestId('countrySelect')).toBeInTheDocument();

    expect(screen.queryByTestId('firstNameDiv')).not.toBeInTheDocument();
    expect(screen.queryByTestId('lastNameDiv')).not.toBeInTheDocument();
    expect(screen.queryByTestId('emailDiv')).not.toBeInTheDocument();
    expect(screen.queryByTestId('countryDiv')).not.toBeInTheDocument();
  });

  it('shows a view mode when isEditing is false', async () => {
    render(<ContactRow {...mockProps} isEditing={false} />);

    expect(screen.getByTestId('firstNameDiv')).toBeInTheDocument();
    expect(screen.getByTestId('lastNameDiv')).toBeInTheDocument();
    expect(screen.getByTestId('emailDiv')).toBeInTheDocument();
    expect(screen.getByTestId('countryDiv')).toBeInTheDocument();

    expect(screen.queryByTestId('emailInput')).not.toBeInTheDocument();
    expect(screen.queryByTestId('firstNameInput')).not.toBeInTheDocument();
    expect(screen.queryByTestId('lastNameInput')).not.toBeInTheDocument();
    expect(screen.queryByTestId('countrySelect')).not.toBeInTheDocument();
  });
});
