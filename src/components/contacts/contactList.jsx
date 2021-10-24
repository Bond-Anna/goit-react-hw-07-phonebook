import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from "../../redux/contacts/contactsServices";
import css from "./contacts.module.css";
import { Spinner } from "../spiner";

export default function ContactList() {
  const { data: contacts, error, isLoading, isSuccess } = useGetContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  console.log(contacts);

  return (
    <>
      <h1>Contacts</h1>
      {isLoading && <Spinner />}
      {isSuccess && (
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
                onClick={() => deleteContact(id)}
                className={css.contactBtn}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
