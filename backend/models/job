import mongoose, { Schema } from 'mongoose';

// Define job schema
var jobSchema = new Schema({
  title: String,
  sallary: String,
  description: String,
  //poster: String
});

// Export Mongoose model
export default mongoose.model('job', jobSchema);

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
