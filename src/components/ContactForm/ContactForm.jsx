import css from './ContactForm.module.css';
// import React, { Component } from 'react';

// class ContactForm extends Component {
export const ContactForm = () => {
    // state = {
    //     name: '',
    //     number: '',
    // }

    // handleChange = (e, name) => {
    //     const { target } = e;

    //     this.setState(() => ({
    //         [name]: target.value,
    //     }))
    // };

    // handleSubmit = e => {
    //     e.prevantDefault();

    //     const { onSubmit } = this.props;
    //     onSubmit(this.state);
    //     this.resetForm();
    // };

    // resetForm = e => {
    //     this.setState(() => ({
    //         name: '',
    //         number: '',
    //     }))
    // };

  
        return (
            <form className={css.contact_form}>
                <label className={css.contact_lable}>
                    Name
                    <input
                        className={css.input_name}
                        // value={this.state.name}
                        // onChange={this.handleChange('name')}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>

                <label className={css.contact_lable}>
                    Number
                    <input
                        className={css.input_num}
                        // value={this.state.number}
                        // onChange={this.handleChange('number')}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>

                <button type='submit' className={css.contact_btn_add}>Add contact</button>

            </form>
        );
};


// export default ContactForm;