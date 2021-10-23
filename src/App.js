import Form from "./components/form/form";
import Filter from "./components/filter/filter";
import ContactList from "./components/contacts/contactList";

export const App = () => {
  return (
    <div className="App">
      <h1 className="title">Phonebook</h1>
      <Form />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
