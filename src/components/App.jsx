// import { nanoid } from 'nanoid'
import React, { Component } from 'react';
import { Filter } from "./Filter/Filter";
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

class App extends Component {

  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  addContact = ({ name }) => {
    const isNameAdded = name.toUpperCase();
    const isAdded = false;

    this.state.contacts.forEach(el => {
      if (el.name.toUpperCase() === isNameAdded) {
        alert(`${name} is already in contacts`)
      }
    });

    if (isAdded) {
      return;
    }
  }

  deleteContact = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e),
    }));
  };

  addItem = item => {
    this.setState({ ...this.state.contacts, item })
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default App;