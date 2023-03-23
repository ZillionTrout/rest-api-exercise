const Show = require('../models/show');
const router = require("express").Router();

// @desc See Shows
// @route GET /shows
// @access Public 

router.get("/", async (req, res, next) => {
    try {
        const shows = await Show.find();
        res.status(200).json(shows);
    } catch (error) {
        next(error)
    }
});

// @desc    See one show
// @route   GET /shows/:showId
// @access  Public
router.get("/:showId", async (req, res, next) => {
    const { showId } = req.params;
    try {
        const show = await Show.findById(showId);
        res.status(200).json(show);
    } catch (error) {
        next(error);
    }
});

// @desc Add show
// @route POST /shows
// @access Public 
router.post("/", async (req, res, next) => {
    try {
        const newShow = await Show.create(req.body);
        res.status(201).json(newShow);
    } catch (error) {
        next(error)
    }
});

// @desc Edit Show
// @route PUT /shows/:showsId 
// @access Public
router.put("/:showId", async (req, res, next) => {
    const { showId } = req.params;
    try {
        const editShow = await Show.findByIdAndUpdate(showId, req.body, {new: true});
        res.status(204).json(editShow);
    } catch (error) {
        next (error)
    }
});

// @desc    Delete show
// @route   DELETE /shows/:showId
// @access  Public
router.delete("/:showId", async (req, res, next) => {
    const { showId } = req.params;
    try {
        const deleteShow = await Show.findByIdAndDelete(showId);
        res.status(200).json(deleteShow);
    } catch (error) {
        next (error);
    }
});

module.exports = router;