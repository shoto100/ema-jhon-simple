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
  const ordersCollection = client.db("Homes").collection("orders");
  const reviewsCollection = client.db("Homes").collection("reviews");
  const adminsCollection = client.db("Homes").collection("admins");

  app.get('/services', (req, res) => {
    serviceCollection.find()
    .toArray((err, items) => {
      // console.log('from database', items);
      res.send(items);
    })
  })

  app.get('/allOrder', (req, res) => {
    ordersCollection.find({ email: req.query.email })
    .toArray((err, documents) => {
      res.send(documents)
    })
  })
  
  app.get('/showOrder', (req, res) => {
    ordersCollection.find({})
    .toArray((err, documents) => {
      res.send(documents)
    })
  })

  app.get('/allReview', (req, res) => {
    reviewsCollection.find({})
    .toArray((err, documents) => {
      res.send(documents)
    })
  })
  app.get('/allAdmin', (req, res) => {
    adminsCollection.find({})
    .toArray((err, documents) => {
      res.send(documents)
    })
  })

  app.post('/addReview', (req, res) => {
    const review = req.body;
    console.log("new review added", review);
    reviewsCollection.insertOne(review)
    .then( result => {
      console.log('inserted review count', result.insertedCount);
      res.send(result.insertedCount > 0)
    })
  })

  app.post('/addOrder', (req, res) => {
    const order = req.body;
    console.log("new order added", order);
    ordersCollection.insertOne(order)
    .then( result => {
      console.log('inserted order count', result.insertedCount);
      res.send(result.insertedCount > 0)
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

  app.post('/addAdmin', (req, res) => {
    const admin = req.body;
    console.log("new admin added", admin);
    adminsCollection.insertOne(admin)
    .then( result => {
      console.log('inserted order count', result.insertedCount);
      res.send(result.insertedCount > 0)
    })
  })

  app.delete('/productdelete/:id', (req, res) => {
    cycleCollection.deleteOne({ _id: ObjectId(req.params.id) })
    .then(result => {
      res.send(result.deletedCount > 0)
    })
    .catch(error => console.log(error));
  })
});


app.listen(process.env.PORT || port)