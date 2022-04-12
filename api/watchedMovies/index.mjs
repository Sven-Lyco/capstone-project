import WatchedMovie from '../../backend/models/WatchedMovie.mjs';
import connectToMongoDB from '../../backend/db/dbConnect.mjs';

export default async function handler(req, res) {
  await connectToMongoDB();
  console.log('connected to MongoDB');

  if (req.method === 'GET') {
    const watchedMovies = await WatchedMovie.find();
    return res.status(200).json(watchedMovies);
  }

  if (req.method === 'POST') {
    const newWatchedMovie = await WatchedMovie.create(req.body);
    return res.status(200).json(newWatchedMovie);
  }

  if (req.method === 'DELETE') {
    const { deleteId } = req.body;
    const result = await WatchedMovie.findByIdAndDelete(deleteId);
    return res.status(200).json(result);
  }

  res.status(501).json(`Not implemented`);
}
