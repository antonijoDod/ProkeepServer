const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    messageContent: {
      type: String,
    },
    byUser: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    project: {
      type: mongoose.Schema.ObjectId,
      ref: "Project",
      required: true,
    },
  },
  { minimize: false }
);

module.exports = mongoose.model("Message", MessageSchema);
