const express = require("express");
const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projects");

// Include other resource routers
const messageRouter = require('./messages')

const router = express.Router();

const {protect} = require('../middleware/auth')

// Re-route into other resource routers
router.use('/:projectId/messages', messageRouter)

router.route("/")
    .get(protect, getProjects)
    .post(protect, createProject);
router.route('/:id')
    .get(getProject)
    .put(protect, updateProject)
    .delete(protect, deleteProject)

module.exports = router;
