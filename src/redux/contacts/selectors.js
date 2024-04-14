import { selectNameFilter } from "../filters/selectors";
import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, filter) => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
    }
)

export const selectLoader = state => state.contacts.loading

export const selectError = state => state.contacts.error