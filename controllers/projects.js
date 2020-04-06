const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Project = require("../models/Project");

// @desc Get all projects
// @route GET /api/v1/projects
// @acess Private
exports.getProjects = asyncHandler(async (req, res, next) => {
  const projects = await Project.find();
  res
    .status(200)
    .json({ sucess: true, count: projects.length, data: projects });
});

// @desc Get single project
// @route GET /api/v1/projects/:id
// @acess Private
exports.getProject = asyncHandler(async (req, res, next) => {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return next(
        new ErrorResponse(`Project not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: project });

});

// @desc Create new project
// @route POST /api/v1/projects
// @acess Private
exports.createProject = asyncHandler(async (req, res, next) => {
    const project = await Project.create(req.body);
    res.status(201).json({
      success: true,
      data: project,
    });
});

// @desc Update project
// @route PUT /api/v1/projects/:id
// @acess Private
exports.updateProject = asyncHandler(async (req, res, next) => {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!project) {
      return next(
        new ErrorResponse(`Project not found with id of ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: project });
});

// @desc Delete project
// @route DELETE /api/v1/projects/:id
// @acess Private
exports.deleteProject = asyncHandler(async (req, res, next) => {
    const project = await Project.findByIdAndRemove(req.params.id);

    if (!project) {
      return next(
        new ErrorResponse(`Project not found with id of ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: {} });
});
