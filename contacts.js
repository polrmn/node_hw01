const fs = require('fs').promises
const {v4} = require('uuid');
const getContacts = require('./getContacts');
const writeContacts = require('./writeContacts');

// TODO: задокументувати кожну функцію
async function listContacts() {
  // ...твій код
  const contacts = await getContacts();
  console.log(contacts);
  return contacts;
}

async function getContactById(contactId) {
  // ...твій код
  const contacts = await getContacts();
  const newContact = contacts.find((elem) => elem.id === contactId);
  if (!newContact) {
    return null
  }
  console.log(newContact);
  return newContact;
}

async function removeContact(contactId) {
  // ...твій код
  const contacts = await getContacts();
  const removedContact = contacts.find((elem) => elem.id === contactId)
  if (!removedContact) {
    return null
  }
  const newContacts = contacts.filter(elem=> elem.id !== contactId)
  await writeContacts(newContacts);
  console.log(removedContact);
  return removedContact;
}

async function addContact(name, email, phone) {
  // ...твій код
  const contacts = await getContacts();
  const newContact = { id: v4(), name, email, phone };
  const newContacts = [...contacts, newContact];
  await writeContacts(newContacts);
  console.log(newContact);
  return newContact;

}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact
};
