import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = [];

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact(state, { payload }) {
        state.push(payload);
        },
        deleteContact(state, { payload }) {
            const index = state.findIndex(contact => contact.id === payload);
        state.splice(index, 1);
        },
    }
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;