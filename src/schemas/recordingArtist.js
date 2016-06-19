"use strict";
const graphql = require("graphql");
const GraphQLUnion = graphql.GraphQLUnionType;
const BandType = require("./band");
const MusicianType = require("./musician");

module.exports = new GraphQLUnion({
  name : "RecordingArtist",
  types : [BandType, MusicianType],
  resolveType : (data) => {
    if (data.members) {
      return BandType;
    }
    return MusicianType;
  }
});
