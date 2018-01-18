import mongoose from 'mongoose';
import Job from './models/job';

const jobs = [
  {
    title: "Full stack developer",
    sallary: "100000",
    description: "2 years experience necessary",
    poster: "./posters/ferris.png"
  },
  {
    title: "Junior developer",
    sallary: "65000",
    description: "expert in ruby and rails.",
    poster: "./posters/bridget-jones.png"
  },
  {
    title: "Junior developer",
    sallary: "65000",
    description: "a front end junior developr with one yer experience",
    poster: "./posters/50-first-dates.png"
  },
  {
    title: "Software developer",
    sallary: "120000",
    description: "with more than four years experience",
    poster: "./posters/matilda.png"
  }
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/jobs');

// Go through each job
jobs.map(data => {
  // Initialize a model with job data
  const job = new Job(data);
  // and save it into the database
  job.save();
});
