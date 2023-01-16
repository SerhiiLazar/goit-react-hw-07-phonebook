import {Contacts} from './Contacts';
import Section from './Section';
import {Form} from './Form';
import css from './App.module.css';

export function App() {

  return (
    <div className={css.appBody}>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Contacts />
      </Section>
    </div>
  );
}

