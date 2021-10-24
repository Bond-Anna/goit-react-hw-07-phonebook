import { useDispatch } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";
import css from "./filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const onChange = (event) =>
    dispatch(contactsActions.contactsFilter(event.currentTarget.value));

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        type="text"
        name="name"
        // value={value}
        onChange={onChange}
        className={css.filterInput}
      />
    </label>
  );
}
