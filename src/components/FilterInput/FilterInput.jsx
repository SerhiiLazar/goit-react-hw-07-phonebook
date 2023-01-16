import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from 'redux/filterSlice';
import css from './FilterInput.module.css';

export const FilterInput = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

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
