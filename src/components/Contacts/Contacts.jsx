import React from 'react';
import Notification from 'components/Notification';
import css from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { deleteContacts, getContacts } from 'redux/contactsSlice';
import PropTypes from 'prop-types';

export const Contacts = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const normalizeContact = filter.toLowerCase();

  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeContact)
  );
  const ouerContact = contacts.length;

  return (
    <div>
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
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
