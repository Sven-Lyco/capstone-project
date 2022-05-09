import WatchedSeries from '../../backend/models/WatchedSeries.mjs';
import connectToMongoDB from '../../backend/db/dbConnect.mjs';

export default async function getWatchedSeries(req, res) {
  await connectToMongoDB();
  console.log('connected to MongoDB');

  if (req.method === 'GET') {
    const watchedSeries = await WatchedSeries.find();
    return res.status(200).json(watchedSeries);
  }

  if (req.method === 'POST') {
    const newWatchedSeries = await WatchedSeries.create(req.body);
    return res.status(200).json(newWatchedSeries);
  }

  if (req.method === 'DELETE') {
    const { deleteId } = req.body;
    const result = await WatchedSeries.findByIdAndDelete(deleteId);
    return res.status(200).json(result);
  }

  res.status(501).json(`Not implemented`);
}
