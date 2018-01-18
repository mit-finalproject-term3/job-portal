import Job from '../models/job';
export const index = (req, res, next) => {
  // Find all jobs and return json response
  Job.find().lean().exec((err, jobs) => res.json(
    // Iterate through each job
    { jobs: jobs.map(job => ({
      ...job,

    }))}
  ));
};
