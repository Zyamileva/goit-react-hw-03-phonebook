import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem/ContactItem';
import { ContactsListStyle } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsListStyle>
      {contacts.map(contact => (
        <ContactItem
          name={contact.name}
          number={contact.number}
          key={contact.id}
          id={contact.id}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ContactsListStyle>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
