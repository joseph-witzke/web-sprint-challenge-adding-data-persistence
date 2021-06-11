const express = require('express');
const Project = require('./model');

const router = express.Router();

router.post('/', (req, res, next) => {
  res.json('posting new project');
});

router.get('/', (req, res, next) => {
  res.json('getting project');
});

module.exports = router;
