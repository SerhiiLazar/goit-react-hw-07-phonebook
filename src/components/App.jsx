import { Contacts } from './Contacts';
import Section from './Section';
import { Form } from './Form';
import css from './App.module.css';
import { FilterInput } from './FilterInput';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Loader } from './Loader';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch]);


  return (
    <div className={css.appBody}>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <FilterInput />
        <Contacts />
        {isLoading && !error && <Loader />}
      </Section>
    </div>
  );
}
