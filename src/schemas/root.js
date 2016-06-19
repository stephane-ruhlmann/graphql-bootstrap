"use strict";
const graphql = require("graphql");
const GraphQLString = graphql.GraphQLString;
const GraphQLSchema = graphql.GraphQLSchema;
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLList = graphql.GraphQLList;

const recordingType = require("./recording");
const data = require("./../data/index");

const queryType = new GraphQLObjectType({
  name : "RootQuery",
  fields : () => ({
    recordings : {
      description : "A list of all recordings",
      type : new GraphQLList(recordingType),
      resolve : () => data.getRecordings()
    },
    recording : {
      type : recordingType,
      args : {
        id : {
          description : "id of recording",
          type : GraphQLString
        }
      },
      resolve : (root, args) => data.getRecording(args.id)
    }
  })
});

module.exports = new GraphQLSchema({
  query : queryType
});
