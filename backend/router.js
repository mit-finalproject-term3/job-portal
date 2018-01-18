import express, { Router } from 'express';
// Import index action from jobs controller
import { index } from './controllers/jobs';

// Initialize the router
const router = Router();

// Handle /jobs.json route with index action from jobs controller
router.route('/jobs.json')
  .get(index);

export default router;
