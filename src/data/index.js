"use strict";

const recordings = [
  {
    id : "123",
    name : "Kid A",
    releaseDate : "20001002",
    artist : "900"
  },
  {
    id : "124",
    name : "OK Computer",
    releaseDate : "19970521",
    artist : "900"
  },
  {
    id : "125",
    name : "Mutations",
    releaseDate : "19981103",
    artist : "1034"
  }
];

const artists = [
  {
    id : "900",
    name : "Radiohead",
    members : ["001", "002", "003", "004", "005"]
  },
  {
    id : "1034",
    name : "Beck",
    instruments : ["Vocals", "Guitar"]
  },
  {
    id : "001",
    name : "Thom Yorke",
    instruments : ["Vocals", "Guitar", "Piano", "Keyboards"]
  },
  {
    id : "002",
    name : "Johnny Greenwood",
    instruments : ["Guitar", "Bass guitar", "Ondes Martenot", "Piano", "Drum machine", "Keyboards"]
  },
  {
    id : "003",
    name : "Phil Selway",
    instruments : ["Drums", "Guitar", "Drum machine", "Vocals"]
  },
  {
    id : "004",
    name : "Colin Greenwood",
    instruments : ["Bass guitar"]
  },
  {
    id : "005",
    name : "Ed O'Brien",
    instruments : ["Guitar", "Vocals"]
  }
];

module.exports = {
  getRecordings() {
    return recordings;
  },

  getRecording(recordingId) {
    return recordings.find((recording) => recording.id === recordingId);
  },

  getArtists() {
    return artists;
  },

  getArtist(artistId) {
    return artists.find((artist) => artist.id === artistId);
  }
};

