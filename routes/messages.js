const express = require("express");
const {
  getMessages,
  addMessage
} = require("../controllers/messages");

const router = express.Router({mergeParams: true});

router.route('/').get(getMessages).post(addMessage);
router.route('/:id').get(getMessages);

module.exports = router