import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

// const ContactList = ({ contacts, onDeleteContact }) => {
class ContactList extends Component {
    state = {
        contacts: [],
        name: '',
        number: ''
    }

    renderList = ({ contacts, onDeleteContact }) => {
        return (
            <ul className={css.list}>
                {contacts.map(({ id, name, number }) => (
                    <li key={id} className={css.item}>
                        <p className={css.contact_name}>{name}</p>
                        <p className={css.contact_name}>{number}</p>

                        <button className={css.btn_delete_contact} type='submit' onClick={() => onDeleteContact(id)}>Delete</button>
                    </li>
                ))}
            </ul>
        );
    }

    render(){
        return(this.renderList);
    }
};

ContactList.protoType = {
    contact: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            number: PropTypes.number,
        })
    ),

    onDeleteContact: PropTypes.func,
};

export default ContactList;