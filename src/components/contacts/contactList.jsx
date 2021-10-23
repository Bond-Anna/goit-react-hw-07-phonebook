import { useDispatch } from "react-redux";
import { connect, useSelector } from "react-redux";
import { filtredContacts } from "../../redux/contacts/contacts-selectors";
import contactsActions from "../../redux/contacts/contacts-actions";
import css from "./contacts.module.css";

export default function ContactList() {
  const contacts = useSelector(filtredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={css.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <div className={css.contact}>
            <span className={css.marker}></span>
            <span className={css.contactName}>{name}:</span>
            <span className={css.contactNumber}>{number}</span>
          </div>

          <button
            type="button"
            onClick={() => dispatch(contactsActions.deleteContact(id))}
            className={css.contactBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
