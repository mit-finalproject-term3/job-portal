const mongoose = require('mongoose');
mongoose.Promise = Promise;
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const db = mongoose.connection;

db.on('open',()=> {console.log('successful connection to MongoDB') });
mongoose.connect('mongodb://localhost/jobs',{ useMongoClient: true });

// APPLICANT

const passportLocalMongoose = require('passport-local-mongoose');

const ApplicantSchema = Schema({
  email: String,
  password: String
});

ApplicantSchema.plugin(passportLocalMongoose,{
  usernameField: 'email',
  usernameLowerCase: true,
  session: false
});

const Applicant = mongoose.model.Applicant || mongoose.model('Applicant', ApplicantSchema);

// COMMENT

// TODO - add extra properties if required
const CommentSchema = Schema({
  body: String
})

// APPLICANT DETAILS

const ApplicantDetailsSchema = Schema({
  firstName: String,
  lastName: String,
  cv: String, // TODO - change to Text?
  linkedinUrl: String,
  comments: [CommentSchema],
  applicant: { type: ObjectId, ref: 'Applicant' }
});

const ApplicantDetails = mongoose.models.ApplicantDetails || mongoose.model('ApplicantDetails', ApplicantDetailsSchema);

// CLIENT

const ClientSchema = Schema({
  email: String,
  password: String,
});

ClientSchema.plugin(passportLocalMongoose,{
  usernameField: 'email',
  usernameLowerCase: true,
  session: false
});

const Client = mongoose.models.Client || mongoose.model('Client', ClientSchema);

// JOB

var JobSchema = new Schema({
  title: String,
  sallary: String,
  description: String,
  //poster: String
});

const Job = mongoose.models.Job || mongoose.model('Job', JobSchema);
module.exports = Job;

// APPLICATION

const ApplicationSchema = Schema({
  status: String,
  applicant: { type: ObjectId, ref: 'Applicant' },
  job: { type: ObjectId, ref: 'Job' }
});

const Application = mongoose.models.Application || mongoose.model('Application', ApplicationSchema);

// CREATE MODEL INSTANCES AND THEN FIND THEM

// Applicant.create([
//     {
//       email: "user4@test.com",
//       password: "test123"
//     },
//     // {
//     //   email: "user2@test.com",
//     //   password: "test123"
//     // }
//   ])
//   .then((createdApplicant, err) => {
//     if (err) { console.log('Error creating user', err); }
//     console.log('Created applicant: ', createdApplicant)
//
//     ApplicantDetails.create([
//         {
//           firstName: "fn",
//           lastName: "ln",
//           cv: "good",
//           linkedinUrl: "here",
//           // comments: // TODO
//           applicant: createdApplicant._id
//         }
//       ])
//       .then((createdApplicantDetails, err) => {
//         console.log('Successfully created Applicant and ApplicantDetails in MongoDB: ', createdApplicantDetails);
//
//         ApplicantDetails.find()
//             .populate('applicant')
//             .then(applicantDetails => {
//               console.log(`Found list of applicantDetails: `, applicantDetails);
//               return applicantDetails
//             })
//             .catch(error => { console.error('Error finding any applicant details'); })
//       });
//   })
//

//
// ApplicantDetails.find()
//     .populate('applicant')
//     .then(applicantDetails => {
//       console.log(`applicantDetails: `, applicantDetails);
//       return res.json(applicantDetails)
//     })
//     .catch(error => res.json({ error }))
