import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import css from './Form.module.css';
// import PropTypes from 'prop-types';

export function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [phone, setPnohe] = useState('');
  const nameContact = contacts.map(contact => contact.name);

  const hendleSubmit = e => {
    e.preventDefault();

    if (nameContact.includes(name)) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContact({name, phone}));

    setName('');
    setPnohe('');

    console.log(e.target.value)
  };

  const handleChenge = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPnohe(value);
        break;
      default:
        break;
    }
  };

  return (
    <form className={css.phonebookForm} onSubmit={hendleSubmit}>
      <label className={css.label}>
        <p>Name:</p>
        <input
          className={css.input}
          type="text"
          name="name"
          onChange={handleChenge}
          value={name}
          autoCapitalize="off"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        <p>Namber:</p>
        <input
          className={css.input}
          type="tel"
          name="number"
          onChange={handleChenge}
          value={phone}
          autoCapitalize="off"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
}

// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
