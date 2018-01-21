import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routes/jobs';

// Connect to MongoDB
mongoose.connect('mongodb://localhost/jobs');

//Initialize http server
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Logger that outputs all requests into the console
app.use(morgan('combined'));
//Use v1 as prefix for all API endpoints
app.use('/', router);

app.get('/', (req, res) => {
  res.json({
    resources: [{
      jobs: '/jobs'
    }]
  })
});


const server = app.listen(7000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
