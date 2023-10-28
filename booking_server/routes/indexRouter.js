const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController')
const { body, query, param } = require('express-validator');


router.get('/eventlist',eventController.eventList);
router.get('/eventid/:_id',eventController.particular_event);

module.exports = router;