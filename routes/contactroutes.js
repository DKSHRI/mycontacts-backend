const express = require('express');
const router = express.Router();
const {
  getContacts,
  createContacts,
  putContacts,
  deleteContacts
} = require('../controller/contactController');

// Routes for "/api/contacts"
router.route('/')
  .get(getContacts)         // GET all contacts
  .post(createContacts);    // POST a new contact

// Routes for "/api/contacts/:id"
router.route('/:id')
  .put(putContacts)         // UPDATE a contact by ID
  .delete(deleteContacts);  // DELETE a contact by ID

module.exports = router;
