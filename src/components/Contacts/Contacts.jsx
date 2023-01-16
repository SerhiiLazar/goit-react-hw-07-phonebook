import React  from 'react';
import Notification from 'components/Notification';
import Input from 'components/Input';
import css from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from 'redux/filterSlice';
import { deleteContacts, getContacts } from 'redux/contactsSlice';
import PropTypes from 'prop-types';

export const Contacts = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts)
  
  const normalizeContact = filter.toLowerCase();
  const imputChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const visibleContact = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeContact));
  const ouerContact = contacts.length;

  return (
    <div>
      <Input
        label="Find contacts by name"
        value={filter}
        onChange={imputChange}
        type="text"
      />
      
      {!ouerContact ? (
        <Notification message="Contact list is empty !" />
      ) : (
      <ul className={css.contactsItem}>
        {visibleContact.map(({ id, name, number }) => (
          <li key={id} className={css.contactsList}>
            <span className={css.contactsName}>Name: {name}</span>
            <span className={css.contactsNumber}>Tel: {number}</span>
            <button
              className={css.contactsBtn}
              type="button"
              onClick={() => dispatch(deleteContacts(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

