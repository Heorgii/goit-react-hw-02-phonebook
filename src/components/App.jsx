// import { nanoid } from 'nanoid'
// import React, { Component } from 'react';
import { Filter } from "./Filter/Filter";
import { ContactForm } from "./ContactForm/ContactForm";
// import { ContactList } from "./ContactList/ContactList";
// class App extends Component {
// state = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// }

// addContact = ({ name, number }) => {
//   const isNameAdded = name.toUpperCase();
//   const isAdded = false;

//   this.state.contacts.forEach(el => {
//     if (el.name.toUpperCase() === isNameAdded) {
//       alert(`${name} is already in contacts`)
//     }
//   });

//   if (isAdded) {
//     return;
//   }

//   const contact = {
//     id: module.id = nanoid(),
//     name: name,
//     number: number,
//   };

//   this.setState(prevState => ({
//     contacts: [...prevState.contacts, contact],
//   }));
// };

// changeFilter = e => {
//   this.setState({ filter: [e.currentTarget.value] });
// };

// deleteContact = e => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== e),
//   }));
// };

//   render() {
//     // const { filter } = this.state;
//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm  />

//         <h2>Contacts</h2>
//         <Filter />
//         <ContactList  />
//       </div>
//     );
//   }
// }

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {/* <ContactList /> */}
    </div>
  );
}