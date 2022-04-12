import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const schema = new Schema(
  {
    movieId: { type: String },
    title: { type: String },
  },
  {
    versionKey: false,
  }
);

export default model('WatchedMovie', schema);
