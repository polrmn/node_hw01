const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const writeContacts = async (data) => {
  await fs.writeFile(contactsPath, JSON.stringify(data))
};

module.exports = writeContacts;
