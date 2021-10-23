import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../redux/contacts/contacts-selectors";
import contactsActions from "../../redux/contacts/contacts-actions";
import css from "./form.module.css";

export default function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const state = { name, number };

  const items = useSelector(getContacts);
  const dispatch = useDispatch();

  const onChange = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);
        break;
      case "number":
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (items.find((cont) => cont.name.toLowerCase() === name.toLowerCase())) {
      return window.alert(`${name} is already in contacts`);
    }
    dispatch(contactsActions.addContact(state));

    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={onFormSubmit} className={css.form}>
      <label className={css.labelField}>
        <span className={css.label}>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={onChange}
          className={css.input}
        />
      </label>
      <label className={css.labelField}>
        <span className={css.label}>Number</span>
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={onChange}
          className={css.input}
        />
      </label>
      <button type="submit" className={css.formBtn}>
        Add contact
      </button>
    </form>
  );
}
