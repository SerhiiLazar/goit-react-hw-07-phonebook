import React from 'react';
import Notification from 'components/Notification';
import css from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectVisibleContacts } from 'redux/selectors';
// import PropTypes from 'prop-types';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const contactFinde = contacts.length;
  const contactAll = useSelector(selectVisibleContacts);
  
  return (
    <div>
      {!contactFinde ? (
        <Notification message="Contact list is empty !" />
      ) : (
        <ul className={css.contactsItem}>
          {contactAll.map(({ name, phone, id }) => (
            <li key={id} className={css.contactsList}>
              <p className={css.contactParagraph}>Name:<span className={css.contactsName}>{name}</span></p>
              <p className={css.contactParagraph}>Tel:<span className={css.contactsName}> {phone}</span></p>
              <button
                className={css.contactsBtn}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
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

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };
