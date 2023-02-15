import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import { AppTitle, Title, DefaultMessage } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = values => {
    values.id = nanoid();
    const isInContacts = this.state.contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isInContacts === undefined) {
      this.setState(prevState => ({
        contacts: [values, ...prevState.contacts],
      }));
    } else {
      alert(`${values.name} is already in contacts.`);
    }
  };

  handleInput = e => {
    const filter = e.target.value;
    this.setState({ filter });
  };

  hendleDelete = e => {
    const deletedElId = e.target.parentElement.getAttribute('id');
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== deletedElId),
    }));
  };

  filteredContacts = () => {
    const { filter, contacts } = this.state;
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

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    const { filter } = this.state;

    return (
      <div>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm onSubmit={this.handleSubmit} />

        <Title>Contacts</Title>
        <Filter onChange={this.handleInput} value={filter} />
        {this.filteredContacts().length === 0 ? (
          <DefaultMessage>
            There is no any contact yet. Please, add a contact.
          </DefaultMessage>
        ) : (
          <ContactList
            contacts={this.filteredContacts()}
            onDelete={this.hendleDelete}
          />
        )}
      </div>
    );
  }
}
