import express from 'express'
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools';
import cors from 'cors';
import crypto from 'crypto';
import  typeDefs  from './schema.js';
import mongoose from 'mongoose'
import { URL_MONGO } from './config.js'


mongoose.connect(URL_MONGO,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
  console.log("connected to mongodb")
})

mongoose.connection.on("error",(err)=>{
  console.log("error connecting",err)
})

import './models/User.js'

import { resolvers } from './resolvers.js';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Chạy server
app.listen(4000, () => {
  console.log('http://localhost:4000/graphiql');
});
