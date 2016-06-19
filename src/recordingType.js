"use strict";
const graphql = require("graphql");
const moment = require("moment");
const GraphQLNonNull = graphql.GraphQLNonNull;
const GraphQLString = graphql.GraphQLString;

module.exports = new graphql.GraphQLObjectType({
  name : "Recording",
  description : "A recording (studio/live album, EP, mixtape...)",
  fields : () => ({
    id : {
      description : "A recording unique identifier",
      type : new GraphQLNonNull(GraphQLString)
    },
    name : {
      description : "Self-descriptive",
      type : GraphQLString
    },
    artist : {
      description : "The artist credited for this recording",
      type : GraphQLString
    },
    releaseDate : {
      description : "The recording release date",
      type : GraphQLString,
      resolve : (recording) => moment(recording.releaseDate, "YYYYMMDD").format("DD-MM-YYYY")
    }
  })
});

