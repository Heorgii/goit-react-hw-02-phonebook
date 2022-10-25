import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contact, onDeleteContact }) => {
    return (
        <ul className={css.list}>
            {contact.map(({ id, name, number }) => (
                <li key={id} className={css.item}>
                    <p className={css.contact_name}>{name}------{number}</p>

                    <button className={css.btn_delete_contact} type='submit' onClick={() => onDeleteContact(id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
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