const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectID;
require('dotenv').config()
const port = process.env.Port || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello Tuminol Bashi!')
})

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kds9z.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const serviceCollection = client.db("Homes").collection("services");

  app.get('/services', (req, res) => {
    serviceCollection.find()
    .toArray((err, items) => {
      // console.log('from database', items);
      res.send(items);
    })
  })

  app.post('/addServices', (req, res) => {
    const newService = req.body;
    console.log(newService);
    console.log("adding new event", newService);
    serviceCollection.insertOne(newService)
    .then( result => {
      console.log('inserted add service count', result.insertedCount);
      res.send(result.insertedCount > 0)
    })
  })
});


app.listen(process.env.PORT || port)