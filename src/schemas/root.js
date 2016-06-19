"use strict";
const graphql = require("graphql");
const GraphQLString = graphql.GraphQLString;
const GraphQLSchema = graphql.GraphQLSchema;
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLList = graphql.GraphQLList;

const Recording = require("./recording");
const Artist = require("./recordingArtist");
const data = require("./../data/index");

const queryType = new GraphQLObjectType({
  name : "RootQuery",
  fields : () => ({
    recordings : {
      description : "A list of all recordings",
      type : new GraphQLList(Recording),
      resolve : () => data.getRecordings()
    },
    recording : {
      type : Recording,
      args : {
        id : {
          description : "id of recording",
          type : GraphQLString
        }
      },
      resolve : (root, args) => data.getRecording(args.id)
    },
    artists : {
      type : new GraphQLList(Artist),
      resolve : () => data.getArtists()
    }
  })
});

module.exports = new GraphQLSchema({
  query : queryType
});
