import { useDeleteContactMutation } from "../../redux/contacts/contactsServices";
import css from "./contactItem.module.css";

export default function ContactItem({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  //   console.log(contacts);
  return (
    <>
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
    </>
  );
}
