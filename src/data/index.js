"use strict";

const recordings = [
  {
    id : "123",
    name : "Kid A",
    releaseDate : "20001002",
    artist : "Radiohead"
  },
  {
    id : "124",
    name : "OK Computer",
    releaseDate : "19970521",
    artist : "Radiohead"
  },
  {
    id : "125",
    name : "Mutations",
    releaseDate : "19981103",
    artist : "Beck"
  }
];

module.exports = {
  getRecordings() {
    return recordings;
  },

  getRecording(recordingId) {
    return recordings.find((recording) => recording.id === recordingId);
  }
};

