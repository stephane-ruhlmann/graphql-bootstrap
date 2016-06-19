"use strict";
const graphql = require("graphql");
const GraphQLNonNull = graphql.GraphQLNonNull;
const GraphQLString = graphql.GraphQLString;
const GraphQLList = graphql.GraphQLList;
const Musician = require("./musician");
const getArtist = require("../data").getArtist;

module.exports = new graphql.GraphQLObjectType({
  name : "Band",
  description : "A recording (studio/live album, EP, mixtape...)",
  fields : () => ({
    id : {
      description : "A band unique identifier",
      type : new GraphQLNonNull(GraphQLString)
    },
    name : {
      description : "Self-descriptive",
      type : GraphQLString
    },
    members : {
      description : "Self-descriptive",
      type : new GraphQLList(Musician),
      resolve : (band) => {
        return band.members.map(getArtist)
      }
    }
  })
});
