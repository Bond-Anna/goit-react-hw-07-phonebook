import { useState } from "react";
import Form from "./components/form/form";
import Filter from "./components/filter/filter";
import ContactList from "./components/contacts/contactList";
import { Spinner } from "./components/spiner";
import { useGetContactsQuery } from "./redux/contacts/contactsServices";

export const App = () => {
  const { data: contacts, isLoading, isSuccess } = useGetContactsQuery();
  const [filter, setFilter] = useState("");
  console.log(contacts);
  const onFilterChange = (e) => setFilter(e.target.value);

  const contactsFilter = () => {
    const lowFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(lowFilter)
    );
  };

  return (
    <div className="App">
      <h1 className="title">Phonebook</h1>
      <Form />
      <h2 className="title">Contacts</h2>
      {isSuccess && contacts.lengs !== 0 ? (
        <Filter value={filter} onChange={onFilterChange} />
      ) : (
        <h3>no contacts</h3>
      )}
      {isLoading && <Spinner />}
      {isSuccess && (
        <ContactList
          contacts={contactsFilter()}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
      )}
    </div>
  );
};
