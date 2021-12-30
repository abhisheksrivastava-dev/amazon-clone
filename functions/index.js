const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("secret_key");

// API

// -APP config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json);

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payment/create", (request, response) => {
  const total = request.query.total;

  console.log("Payment Recieved for this amount", total);

  const paymentIntent = stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
express.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
