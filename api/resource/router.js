const express = require('express');
const Resource = require('./model');

const router = express.Router();

router.post('/', (req, res, next) => {
  Resource.insertResource(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch(next);
});

router.get('/', (req, res, next) => {
  Resource.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(next);
});

module.exports = router;
