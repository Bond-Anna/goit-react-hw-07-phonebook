import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import contactsActions from "./contacts-actions";

const contactList = [
  { name: "Rosie Simpson", id: uuidv4(), number: "459-12-56" },
  { name: "Hermione Kline", id: uuidv4(), number: "443-89-12" },
  { name: "Eden Clements", id: uuidv4(), number: "645-17-79" },
];

console.log(contactsActions);

const items = createReducer(contactList, {
  [contactsActions.addContact]: (state, action) => [action.payload, ...state],
  [contactsActions.deleteContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filter = createReducer("", {
  [contactsActions.contactsFilter]: (state, action) => action.payload,
});

export default combineReducers({ items, filter });
