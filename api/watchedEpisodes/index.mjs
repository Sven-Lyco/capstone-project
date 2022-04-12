import WatchedEpisode from '../../backend/models/WatchedEpisode.mjs';
import connectToMongoDB from '../../backend/db/dbConnect.mjs';

export default async function handler(req, res) {
  await connectToMongoDB();
  console.log('connected to MongoDB');

  if (req.method === 'GET') {
    const watchedEpisodes = await WatchedEpisode.find();
    return res.status(200).json(watchedEpisodes);
  }

  if (req.method === 'POST') {
    const newWatchedEpisode = await WatchedEpisode.create(req.body);
    return res.status(200).json(newWatchedEpisode);
  }

  if (req.method === 'DELETE') {
    const { deleteId } = req.body;
    const result = await WatchedEpisode.findByIdAndDelete(deleteId);
    return res.status(200).json(result);
  }

  res.status(501).json(`Not implemented`);
}
