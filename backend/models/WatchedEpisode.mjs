import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const schema = new Schema(
  {
    episodeId: { type: Number },
  },
  {
    versionKey: false,
  }
);

export default model('WatchedEpisode', schema);
