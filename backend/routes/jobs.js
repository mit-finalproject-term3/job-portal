import express, { Router } from 'express';
// Import index action from jobs controller
import { index } from '../controllers/jobs';
const Job = require('../models/job');

// Initialize the router
const router = express.Router();

// Handle /jobs.json route with index action from jobs controller
router.route('/jobs.json')
  .get(index);

router.post('/jobs.json', (req, res) => {
  Job.create(req.body)
    .then((job) => {
      res.status(201).json(job).end();
    })
    .catch(error => res.json({ error }))
});
module.exports = router;
