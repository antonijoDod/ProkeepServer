const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Message = require("../models/Message");
const Project = require('../models/Project')

// @desc Get all messages
// @route GET /api/v1/projects/:projectId/messages
// @acess Private
exports.getMessages = asyncHandler(async (req, res, next) => {

  let query;

  if(req.params.projectId) {
    query = Message.find({project: req.params.projectId})
  } else {
    query = Message.find()
  }

  const messages = await query;

  res.status(200).json({
    success: true,
    count: messages.lenght,
    data: messages,
  });
});


// @desc Add message
// @route POST /api/v1/projects/:projectId/messages/
// @acess Private
exports.addMessage = asyncHandler(async (req, res, next) => {

  req.body.project = req.params.projectId

  const project = await Project.findById(req.params.projectId)

  if(!project) {
    return next(
      new ErrorResponse(`No project with the id of ${req.params.projectId}`)
    )
  }

  const message = await Message.create(req.body)

  res.status(200).json({
    success: true,
    data: message
  })

});

