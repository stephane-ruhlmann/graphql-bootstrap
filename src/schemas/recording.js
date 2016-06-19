"use strict";
const graphql = require("graphql");
const moment = require("moment");
const GraphQLNonNull = graphql.GraphQLNonNull;
const GraphQLString = graphql.GraphQLString;
const Artist = require("./recordingArtist");
const getArtist = require("../data").getArtist;

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
      type : Artist,
      resolve : (recording) => getArtist(recording.artist)
    },
    releaseDate : {
      description : "The recording release date",
      type : GraphQLString,
      args : {
        dateFormat : {
          description : "The output date format (default is 'DD-MM-YYY')",
          type : GraphQLString,
          defaultValue : "DD-MM-YYYY"
        }
      },
      resolve : (recording, args) => moment(recording.releaseDate, "YYYYMMDD").format(args.dateFormat)
    }
  })
});

