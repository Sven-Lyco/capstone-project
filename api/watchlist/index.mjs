import Watchlist from '../../backend/models/Watchlist.mjs';
import connectToMongoDB from '../../backend/db/dbConnect.mjs';

await connectToMongoDB();

export default async function handler(req, res) {
  console.log('connected to MongoDB');

  if (req.method === 'GET') {
    const watchlist = await Watchlist.find();
    return res.status(200).json(watchlist);
  }

  if (req.method === 'POST') {
    const newWatchlistEntry = await Watchlist.create(req.body);
    return res.status(200).json(newWatchlistEntry);
  }

  if (req.method === 'DELETE') {
    const { _id } = req.body;
    const result = await Watchlist.findByIdAndDelete(_id);
    return res.status(200).json(result);
  }

  res.status(501).json(`Not implemented`);
}
