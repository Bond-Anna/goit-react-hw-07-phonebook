import ContactItem from "../contactItem/contactItem";
import css from "./contacts.module.css";

export default function ContactList({ contacts }) {
  // const { data: contacts, error, isLoading, isSuccess } = useGetContactsQuery();

  return (
    <ul className={css.contactsList}>
      {contacts.map((cont) => (
        <ContactItem key={cont.id} {...cont} />
      ))}
    </ul>
  );
}
