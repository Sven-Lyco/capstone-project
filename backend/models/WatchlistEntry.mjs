import mongoose from 'mongoose';

const schema = new mongoose.Schema(
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

export default mongoose.model('WatchlistEntry', schema);
