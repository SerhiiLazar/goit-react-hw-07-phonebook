import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import css from './FilterInput.module.css';

export const FilterInput = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <label className={css.labelContact}>
      <span className={css.spanContact}>Find contacts by name</span>
      <input
        className={css.contactsInput}
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
};
