const express = require("express");
const {
  getMessages,
  addMessage
} = require("../controllers/messages");

const router = express.Router({mergeParams: true});

const {protect} = require('../middleware/auth')

router.route('/').get(protect, getMessages).post(protect, addMessage);
router.route('/:id').get(protect, getMessages);

module.exports = router