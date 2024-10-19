const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const helmet = require('helmet');
const cors = require('cors');
const depthLimit = require('graphql-depth-limit');
const { createComplexityLimitRule } = require('graphql-validation-complexity');
require('dotenv').config();
const mongoose = require('mongoose');
//const db = require('./db');
const models = require('./models');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const port = process.env.PORT || 4000;
//const DB_HOST = process.env.DB_HOST;

const app = express();

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.i0fur.mongodb.net/?retryWrites=true&w=majority&appName=${MONGO_DB}`).
then(()=>{app.listen(port);}).catch(err => {
  console.error('MongoDB connection error:', err);
});

app.use(helmet());
app.use(cors());