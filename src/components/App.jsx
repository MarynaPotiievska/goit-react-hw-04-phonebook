import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import { AppTitle, Title, DefaultMessage } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleSubmit = values => {
    values.id = nanoid();
    const isInContacts = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isInContacts === undefined) {
      setContacts([values, ...contacts]);
    } else {
      alert(`${values.name} is already in contacts.`);
    }
  };

  const handleInput = e => {
    const filter = e.target.value;
    setFilter(filter);
  };

  const hendleDelete = e => {
    const deletedElId = e.target.parentElement.getAttribute('id');
    setContacts(contacts.filter(({ id }) => id !== deletedElId));
  };

  const filteredContacts = () => {
    const filterValue = filter.trim().toLowerCase();
    if (filterValue !== '') {
      const filteredArr = contacts.filter(({ name }) =>
        name.toLowerCase().includes(filterValue)
      );
      return filteredArr;
    } else {
      return contacts;
    }
  };

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <AppTitle>Phonebook</AppTitle>
      <ContactForm onSubmit={handleSubmit} />

      <Title>Contacts</Title>
      <Filter onChange={handleInput} value={filter} />
      {filteredContacts().length === 0 ? (
        <DefaultMessage>
          There is no any contact yet. Please, add a contact.
        </DefaultMessage>
      ) : (
        <ContactList contacts={filteredContacts()} onDelete={hendleDelete} />
      )}
    </div>
  );
};
