"use strict";
const graphql = require("graphql");
const GraphQLNonNull = graphql.GraphQLNonNull;
const GraphQLString = graphql.GraphQLString;
const GraphQLList = graphql.GraphQLList;

module.exports = new graphql.GraphQLObjectType({
  name : "Musician",
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
    instruments : {
      description : "List of instrument played",
      type : new GraphQLList(GraphQLString)
    }
  })
});
