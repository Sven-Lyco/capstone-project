import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const schema = new Schema(
  {
    seriesId: { type: String },
    name: { type: String },
  },
  {
    versionKey: false,
  }
);

export default model('WatchedSeries', schema);
