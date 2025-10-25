const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactmodel");

// GET all contacts
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({});
  res.status(200).json(contacts);
});

// GET contact by ID
const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }
  res.status(200).json(contact);
});

// CREATE a new contact
const createContacts = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ message: "All fields are mandatory" });
  }
  const newContact = await Contact.create({ name, email, phone });
  res.status(201).json({ message: "Contact created", contact: newContact });
});

// UPDATE a contact by ID
const putContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }
  const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json({ message: "Contact updated", contact: updated });
});

// DELETE a contact by ID
const deleteContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }
  await Contact.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Contact deleted" });
});

module.exports = {
  getContacts,
  getContactById,
  createContacts,
  putContacts,
  deleteContacts,
};
