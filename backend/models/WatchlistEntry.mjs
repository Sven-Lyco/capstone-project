import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const schema = new Schema(
  {
    id: { type: String },
    name: { type: String },
    title: { type: String },
    posterPath: { type: String },
  },
  {
    versionKey: false,
  }
);

export default model('WatchlistEntry', schema);
