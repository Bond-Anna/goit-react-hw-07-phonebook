export const getContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

export const filtredContacts = (state) => {
  const allContacts = getContacts(state);
  const filter = getFilter(state);
  const lowFilter = filter.toLowerCase();

  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(lowFilter)
  );
};
