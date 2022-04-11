import WatchlistEntry from '../../backend/models/WatchlistEntry.mjs';
import connectToMongoDB from '../../backend/db/dbConnect.mjs';

await connectToMongoDB();

export default async function handler(req, res) {
  console.log('connected to MongoDB');

  if (req.method === 'GET') {
    const watchlist = await WatchlistEntry.find();
    return res.status(200).json(watchlist);
  }

  if (req.method === 'POST') {
    const newWatchlistEntry = await WatchlistEntry.create(req.body);
    return res.status(200).json(newWatchlistEntry);
  }

  res.status(501).json(`Not implemented`);
}
