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

// Re-route into other resource routers
router.use('/:projectId/messages', messageRouter)

router.route("/")
    .get(getProjects)
    .post(createProject);
router.route('/:id')
    .get(getProject)
    .put(updateProject)
    .delete(deleteProject)

module.exports = router;
